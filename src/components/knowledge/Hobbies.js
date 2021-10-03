import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookReader, faMusic, faTv, faUtensils} from "@fortawesome/free-solid-svg-icons";

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérets</h3>
            <ul>
                <li className="hobby">
                    <FontAwesomeIcon icon={faBookReader} className="icons"/>
                    <span>Lecture</span>
                </li>
                <li className="hobby">
                    <FontAwesomeIcon icon={faTv} className="icons"/>
                    <span>Filmes et Séries</span>
                </li>
                <li className="hobby">
                    <FontAwesomeIcon icon={faUtensils} className="icons"/>
                    <span>Cuisiner</span>
                </li>
                <li className="hobby">
                    <FontAwesomeIcon icon={faMusic} className="icons"/>
                    <span>Violon</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;