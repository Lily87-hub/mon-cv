import React, {Component} from 'react';
import ProgressBar from "./ProgressBar";

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "JavaScript", xp:0.6},
            {id: 2, value: "Python", xp:1},
            {id: 3, value: "C#", xp:0.8},
            {id: 4, value: "SQL", xp:0.4},
        ],
        frameworks: [
            {id: 1, value: "React JS", xp:0.5},
            {id: 2, value: "Bootstrap", xp:0.8},
            {id: 3, value: "Material UI", xp:0.5},
            {id: 4, value: "SASS & CSS", xp:0.8},
            {id: 5, value: "HTML", xp:0.8},
        ]
    }
    render() {
        let {languages, frameworks} =this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    classname="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    languages={frameworks}
                    classname="frameworksDisplay"
                    title="frameworks & bibliothèques"
                />

            </div>
        );
    }
}

export default Languages;