import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAddressBook, faHome, faImages, faMountain, } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedin, faGithub)

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/Lily2.jpg" alt="profil-pic"/>
                    <h3>Elizabeth Afolabi</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <FontAwesomeIcon icon={faHome} />
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <FontAwesomeIcon icon={faMountain} />
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <FontAwesomeIcon icon={faImages} />
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <FontAwesomeIcon icon={faAddressBook} />
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.google.com" target="_blank"
                        rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_blank"
                           rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                </ul>
                <div className="signature">
                    <p>fromLilyA - 2021</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;