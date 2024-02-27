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
                <a href="https://stackoverflow.com/users/10572727/adan-vivero" class="stackoverflow-text code-text">Stackoverflow</a>  
            </span>
            <span className="code-block">
                <div className="code-container">
                    <SocialIcon className="code-icons" url="https://github.com/viveroa2291"/>
                </div>
                <a href="https://github.com/viveroa2291" class="code-text github-text">Github</a>
            </span>
            <span className="code-block">
                <div className="code-container">
                    <SocialIcon className="code-icons" url="https://gitlab.com/viveroa2291"/>
                </div>
                <a href="https://gitlab.com/viveroa2291" class="gitlab gitlab-text code-text">Gitlab</a>
            </span>
        </div>
    )
}
export default Code;