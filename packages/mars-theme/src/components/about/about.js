import { connect } from 'frontity';
import React, { useEffect } from 'react';
import AboutHeroSection from './about-hero';

const AboutUs = ({ state }) => {


    // console.log(data)
    const data = state.source.get(state.router.link);

    const post = state.source[data.type][data.id];
    const myField = post.acf; // The ACF info is in the same place.

    console.log("About Us Page Data----> ", myField);




    return (
        <div>
            <AboutHeroSection {...myField} />
        </div>
    )
};

export default connect(AboutUs);