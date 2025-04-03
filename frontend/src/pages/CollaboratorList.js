import { useState } from 'react';
import { useParams } from "react-router-dom"
import { BrowserRouter as Router,
    Routes,
    Route,
    Link } from "react-router-dom";

/* === COMPONENTS === */
import useFetch from "../useFetch";
import TagFilter from '../components/TagsFilter';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';


    function CollaboratorList() {
        const { id } = useParams()
        const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/collaborator-page?pLevel`)

        let copy = null
        let collaborators = null;
        let tags = null;

        if (data) {

            console.log(data)
            copy = data.data
            collaborators = copy.collaborators
            return (
                <div className="page-wrapper flex column ai-flex-end">
                    <div className="collaborator-wrapper flex jc-flex-end">
                        <div className="collaborator-info bg-black width-50 flex column">
                            <h1>Collaborators</h1>
                            <BlocksRenderer content={ copy.Page_Copy } />
                            <h1>Skills</h1>
                            <TagFilter />
                        </div>
                        <div className="collaborator-info width-50 layout-grid columns-three">
                        {collaborators.map((collaborator, index) => 
                            <div className="collaborator-column" key={ index }>
                                <img className="profile-picture-small" src={`${process.env.REACT_APP_BACKEND}${ collaborator.Profile_Picture.url }`} />
                                <div className="padding-sm">
                                    <h2>{ collaborator.Name }</h2>
                                    <h3>{ collaborator.Title}</h3>
                                    <div className="flex flex-wrap row-gap-10">
                                        {collaborator.tags.map((tag, index) => 
                                            <div className="tag" key={ index }>
                                                <p>{ tag.Tag }</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            );
        }
    }
    
    export default CollaboratorList;