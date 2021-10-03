import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheckSquare} from "@fortawesome/free-solid-svg-icons";

const OtherSkills = () => {
    return (
        <div className="otherSkills">
           <h3>Autres Compétences</h3>
            <div className="list">
                <ul>
                    <li><FontAwesomeIcon icon={faCheckSquare} className="icons"/>Anglais courant</li>
                    <li><FontAwesomeIcon icon={faCheckSquare} className="icons"/>Français courant</li>
                    <li><FontAwesomeIcon icon={faCheckSquare} className="icons"/>Github</li>
                    <li><FontAwesomeIcon icon={faCheckSquare} className="icons"/>SEO</li>
                    <li><FontAwesomeIcon icon={faCheckSquare} className="icons"/>Méthodes Agiles</li>
                </ul>
                <ul>
                    <li><FontAwesomeIcon icon={faCheckSquare} className="icons"/>Figma</li>
                    <li><FontAwesomeIcon icon={faCheckSquare} className="icons"/>Jira</li>
                    <li><FontAwesomeIcon icon={faCheckSquare} className="icons"/>Montage Vidéo</li>
                    <li><FontAwesomeIcon icon={faCheckSquare} className="icons"/>Traduction</li>
                    <li><FontAwesomeIcon icon={faCheckSquare} className="icons"/>Scrum</li>
                </ul>

            </div>

        </div>
    );
};

export default OtherSkills;