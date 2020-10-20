import React from 'react';
import ProjectItem from '../project-item/project-item.component';
import './projects-album.styles.scss';

const ProjectsAlbum = ({projectItems}) => {
    debugger;
    return (
        <div className="projects-album_container">
            {projectItems?.map(projectItem => (
                <ProjectItem imgUrl={projectItem.imageUrl} title={projectItem.title} description={projectItem.description}/>
            ))}
        </div>
    )
}

export default ProjectsAlbum;