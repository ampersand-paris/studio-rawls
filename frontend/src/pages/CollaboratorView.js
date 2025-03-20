import { useState } from 'react';
import { useParams } from "react-router-dom"
import { BrowserRouter as Router,
    Routes,
    Route,
    Link } from "react-router-dom";

/* === COMPONENTS === */
import useFetch from "../useFetch";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';


    function CollaboratorView() {
        const { id } = useParams()
        const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/collaborators?filters[slug][$eq]=${id}&[populate]=*`)

        let collaborator = null;
        let projects = null;
        let tags = null;

        if (data) {

            collaborator = data.data[0]
            projects = collaborator.projects
            tags = collaborator.tags
            console.log(projects)

            return (
                <div className="page-wrapper flex column ai-flex-end">
                    <div className="collaborator-wrapper flex jc-flex-end">
                        <img className="profile-picture" src={`${process.env.REACT_APP_BACKEND}${ collaborator.Profile_Picture.url }`} />
                        <div className="collaborator-info width-50 flex column">
                            <h1>{ collaborator.Name }</h1>
                            <h3>{ collaborator.Title }</h3>
                            {tags.map((tag, index) => 
                                <div key={ index }>
                                    <p>{ tag.Tag }</p>
                                </div>
                            )}
                            <BlocksRenderer content={ collaborator.Bio } />
                            <h2>Current Projects</h2>
                            {projects.map((project, index) => 
                                <div key={ index }>
                                    <p>{ project.Project_Title }</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            );
        }
    }
    
    export default CollaboratorView;