import { useState } from 'react';
import { BrowserRouter as Router,
    Routes,
    Route,
    Link } from "react-router-dom";

/* === COMPONENTS === */
import useFetch from "../useFetch";
import Values from '../components/Values';
import Image from '../components/Image';

    function Landing() {

        const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/landing-page?pLevel`)

        let sections = null;
        let display = [];

        if (data) {

            sections = data.data.Sections

            for (let i = 0; i < sections.length; i ++) {
                if (sections[i].__component === "media.values") {
                    display.push(<Values data={sections[i]} />)
                }
                
                if (sections[i].__component === "media.image") {
                    display.push(<Image data={sections[i]} />)
                }
            }

            return (
                <div className="page-wrapper flex column ai-flex-end">
                    {display.map((section, index) => 
                        <div key={ index }>
                            { section }
                        </div>
                    )}
                </div>
            );
        }
    }
    
    export default Landing;