import React, { useState } from 'react';
import './homepage.styles.scss';

import ProjectsTitle from '../../components/projects-title/projects-title.componenet';
import ProjectsAlbum from '../../components/projects-album/projects-album.compoent';

import crwnClothing from './../../assets/custom/images/crwn_clothing.svg';
 
const HomePage = () => {
    const [projectItems] = useState([
        {
            imageUrl: crwnClothing,
            title: "first title",
            description: "this is the description for the first item"
         }
    ]);

    return (
        <div className="main-body">        
            <div className="main-body__about-me">
                <p className="main-body__about-me__title" id="about-me">about me!</p>
                <img src={require('./../../assets/custom/images/main-image.jpg')} alt="my" className="main-body__main-image"/>
            </div>
            <ProjectsTitle title="portfolio" description="Focusing on user experience, performance, accessibility, simplicity, and aesthetic — I bridge the gap as a meticulous developer with an adoration for design:" />
            <ProjectsAlbum projectItems={projectItems}/>
        </div>
    )
}

export default HomePage;