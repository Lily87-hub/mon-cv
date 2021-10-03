import React from 'react';
import Navigation from "../components/Navigation";
import Languages from "../components/knowledge/Languages";
import Experience from "../components/knowledge/Experience";
import OtherSkills from "../components/knowledge/OtherSkills";
import Hobbies from "../components/knowledge/Hobbies";

const Knowledge = () => {
    return (
        <div className="knowledge">
            <Navigation/>
            <div className="knowledgeContent">
                <Languages/>
                <Experience/>
                <OtherSkills/>
                <Hobbies/>
            </div>
        </div>
    );
};

export default Knowledge;