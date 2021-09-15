const homeHandler = {
    name: "home",
    priority: 10,
    pattern: "/",
    func: async ({ route, state, libraries }) => {
      const { api } = libraries.source;
      const { page, query } = parse(route);
  
      // 1. Fetch the specified pages.
      const homePromise = api.get({
        endpoint: "posts",
        params: { search: query.s, page, _embed: true, ...state.source.params }
      });
      const bioPromise = api.get({
        endpoint: "pages",
        params: { slug: "home", _embed: true }
      });
      const [homeResponse, bioResponse] = await Promise.all([
        homePromise,
        bioPromise
      ]);
  
      // 2. Populate the state.
      const items = await populate({ response: homeResponse, state });
      await populate({ response: bioResponse });
      if (page > 1 && items.length === 0)
        throw new Error(`post archive doesn't have page ${page}`);
  
      // 3. get posts and pages count
      const total = getTotal(response);
      const totalPages = getTotalPages(response);
  
      // 4. Add data to source.
      Object.assign(state.source.data[route], {
        items,
        total,
        totalPages,
        isArchive: true,
        isPostTypeArchive: true,
        isHome: true
      });
    }
  };