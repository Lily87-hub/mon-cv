import React from 'react';
import Navigation from "../components/Navigation";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Paris</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0643398571">
                                <span
                                    className="clickInput" onClick={() => {alert('Téléphone copié !');}}
                                >
                                    06 43 39 85 71
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="elizabethafolabi87@gmail.com">
                                <span
                                    className="clickInput" onClick={() => {alert('E-mail copié !');}}
                                >
                                    elizabethafolabi87@gmail.com
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;