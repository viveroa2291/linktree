import React from "react";
import '../CSS/code.css';
import {SocialIcon } from 'react-social-icons';
function Code () {
    return(
        <div>
            <span className="code-block">
                <div className="code-container">
                    <SocialIcon className="code-icons" url="https://stackoverflow.com/users/10572727/adan-vivero"/>
                </div>
                <a className="stackoverflow-text code-text" href="https://stackoverflow.com/users/10572727/adan-vivero">Stackoverflow</a>  
            </span>
            <span className="code-block">
                <div className="code-container">
                    <SocialIcon className="code-icons" url="https://github.com/viveroa2291"/>
                </div>
                <a className="code-text github-text" href="https://github.com/viveroa2291" >Github</a>
            </span>
            <span className="code-block">
                <div className="code-container">
                    <SocialIcon className="code-icons" url="https://gitlab.com/viveroa2291"/>
                </div>
                <a className="gitlab gitlab-text code-text" href="https://gitlab.com/viveroa2291" >Gitlab</a>
            </span>
        </div>
    )
}
export default Code;