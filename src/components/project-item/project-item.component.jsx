import React from 'react';
import './project-item.styles.scss';

const ProjectItem = ({ imgUrl, title, description }) => {
    return (

        <div className="project-item_container">          
            <div className="project-item_container_image" style={{ backgroundImage: imgUrl }}>
                {/* <img src={require(`"${imgUrl}"`)} alt=""/> */}
                <img src={imgUrl}     alt="" />
            </div>

            <div className="project-item_container_title">
                <p>{title}</p>
            </div>
            <div className="project-item_container_decription">
                <p>{description}</p>
            </div>
        </div>


    )
}

export default ProjectItem;