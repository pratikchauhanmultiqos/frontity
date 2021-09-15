const settings = {
  "name": "my-first-frontity-project",
  "state": {
    "frontity": {
      "url": "https://ill-favored-stubs.000webhostapp.com/",
      "title": "MultiQos Website",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "About",
              "/about-test/"
            ],
            [
              "Contact Us",
              "/contact/"
            ],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://ill-favored-stubs.000webhostapp.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
