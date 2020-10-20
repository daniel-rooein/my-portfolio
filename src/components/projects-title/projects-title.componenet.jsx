import React from 'react';
import './projects-title.styles.scss';

const ProjectsTitle = ({title, description}) => {
    return (
        <div className="projects-title_container">
            <div className="projects-title_container_title">
                {title}
            </div>
            <div className="projects-title_container_description">
                {description}
            </div>
        </div>
    )
}

export default ProjectsTitle;