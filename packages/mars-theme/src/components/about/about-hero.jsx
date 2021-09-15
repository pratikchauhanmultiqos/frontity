import React from 'react';



const AboutHeroSection = ({hero_title,hero_content}) => {
    return (
        <div className={""}>
            <div className="containerGlobal">
                <div className={""}>
                    <h1>{hero_title}</h1>
                    <div dangerouslySetInnerHTML={{__html:hero_content}}>

                    </div>

                    <div className={""}>
                        <img src={""} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHeroSection;