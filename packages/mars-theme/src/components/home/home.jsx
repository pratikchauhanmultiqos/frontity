import { connect } from "frontity";

const HomePage = ({state}) =>{

  const data = state.source.get("/home");
  
  const post = state.source[data.type][data.id];
  const myField = post.acf; // The ACF info is in the same place.

    console.log("About Us Page Data----> ", myField);
  console.log(post)

  return(
    <>
    <div>
      <div>
      <h1>{myField.hero_title}</h1>
      </div>
      
      <div className="text" dangerouslySetInnerHTML={{__html:myField.hero_content}} ></div>
      </div>
    </>
  )
}

export default connect(HomePage);