import React, { useState } from 'react';
import './homepage.styles.scss';

import ProjectsTitle from '../../components/projects-title/projects-title.componenet';
import ProjectsAlbum from '../../components/projects-album/projects-album.compoent';

const HomePage = () => {
    const [projectItems] = useState([
        {
            imageUrl: "./../../assets/custom/images/juno.jpg",
            title: "first title",
            description: "this is the description for the first item"
        },
        {
            imageUrl: "./../../assets/custom/images/bowen.jpg",
            title: "second title",
            description: "this is the description for the first item"
        },
        {
            imageUrl: "./../../assets/custom/images/bowen.jpg",
            title: "third title",
            description: "this is the description for the first item"
        }
    ]);

    console.log("project items:");
    console.log(projectItems);

    return (
        <div className="main-body">        
            <div className="main-body__about-me">
                <p className="main-body__about-me__title" id="about-me">about me!</p>
                <img src={require('./../../assets/custom/images/main-image.jpg')} alt="my" className="main-body__main-image"/>
            </div>
            {/* <HeaderQuote message="This is a quote" />
            <div className="flex-container">
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis nisi non ex gravida,
                sollicitudin imperdiet libero congue. Proin ac tristique dolor. Integer et semper mauris.
                Maecenas vel semper nisl, id malesuada quam. Sed sed ligula ac dui egestas gravida vel tincidunt turpis.
                    Nam sit amet gravida libero, non euismod tortor. Pellentesque sagittis hendrerit diam quis commodo. Donec blandit molestie metus nec malesuada. Etiam non pretium metus. Suspendisse sed pulvinar nibh. Nulla facilisi. Sed quis aliquam tortor.</div>
                
            </div>
            <HeaderQuote message="This is a different quote and it's the second one" /> */}
            <ProjectsTitle title="The title" description="Focusing on user experience, performance, accessibility, simplicity, and aesthetic — I bridge the gap as a meticulous developer with an adoration for design:" />
            <ProjectsAlbum projectItems={projectItems}/>
        </div>
    )
}

export default HomePage;