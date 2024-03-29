import React from "react";
import '../CSS/connect.css';
import {SocialIcon } from 'react-social-icons';
function  Connect() {
    return (
        <div>
            <span className="connect-body">    
                <span className="linkedin-span">
                    <SocialIcon className="linkedin linkedin-block" url="https://www.linkedin.com/in/adan-vivero-a93970156/"/>
                </span>
                <a className="connect-text linkedin-text" href="https://www.linkedin.com/in/adan-vivero-a93970156/" >Linkedin</a>
            </span>                
            <span className="connect-body">
                <span className="medium-span">
                    <SocialIcon className='medium-icon' url="https://medium.com/@adan_vivero"/>
                </span>
                <a className="connect-text medium-text" href="https://medium.com/@avivero6487">Medium</a>
            </span>
            <span className="connect-body">
                    <svg className="mathematics" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 60 60">
                        <path fill="#CB181F" d="M32.2 5.1l-8.7 5.1-8.8-5.1L23.4 0z"/>
                        <path fill="#B6161C" d="M32.2 5.1v10.1l-8.7 5.1V10.2z"/>
                        <path fill="#7F0F13" d="M23.5 10.2v10.1l-8.9-5.1.1-10.1z"/>
                        <path fill="#CB181F" d="M46.8 13.5L38 18.6l-8.8-5.1L38 8.4z"/>
                        <path fill="#B6161C" d="M46.8 13.5v10.1L38 28.7V18.6z"/>
                        <path fill="#CB181F" d="M46.8 30.3L38 35.4l-8.8-5.1 8.8-5.1z"/>
                        <path fill="#B6161C" d="M46.8 30.3v10.1L38 45.5V35.4z"/>
                        <path fill="#CB181F" d="M32.2 38.8l-8.7 5.1-8.8-5.1 8.7-5.1z"/>
                        <path fill="#B6161C" d="M32.2 38.8v10.1L23.5 54V43.9z"/>
                        <path fill="#CB181F" d="M17.6 30.3l-8.8 5.1L0 30.3l8.8-5.1z"/>
                        <path fill="#B6161C" d="M17.6 30.3v10.1l-8.8 5.1V35.4z"/>
                        <path fill="#CB181F" d="M17.6 13.5l-8.7 5.1-8.8-5.1 8.7-5.1z"/>
                        <path fill="#B6161C" d="M17.6 13.5v10.1l-8.7 5.1V18.6z"/>
                    </svg>
                    <a className="mathematics-text" href="https://math.stackexchange.com/users/663376/adan-vivero">Mathematics Exchange</a>
                </span>
                <span className="connect-body">
                    <svg className="mathematics" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 60 60">
                          <path fill="gray" d="M32.2 5.1l-8.7 5.1-8.8-5.1L23.4 0z"/>
                          <path fill="gray" d="M32.2 5.1v10.1l-8.7 5.1V10.2z"/>
                          <path fill="gray" d="M23.5 10.2v10.1l-8.9-5.1.1-10.1z"/>
                          <path fill="gray" d="M46.8 13.5L38 18.6l-8.8-5.1L38 8.4z"/>
                          <path fill="gray" d="M46.8 13.5v10.1L38 28.7V18.6z"/>
                          <path fill="gray" d="M46.8 30.3L38 35.4l-8.8-5.1 8.8-5.1z"/>
                          <path fill="gray" d="M46.8 30.3v10.1L38 45.5V35.4z"/>
                          <path fill="gray" d="M32.2 38.8l-8.7 5.1-8.8-5.1 8.7-5.1z"/>
                          <path fill="gray" d="M32.2 38.8v10.1L23.5 54V43.9z"/>
                          <path fill="gray" d="M17.6 30.3l-8.8 5.1L0 30.3l8.8-5.1z"/>
                          <path fill="gray" d="M17.6 30.3v10.1l-8.8 5.1V35.4z"/>
                          <path fill="gray" d="M17.6 13.5l-8.7 5.1-8.8-5.1 8.7-5.1z"/>
                          <path fill="gray" d="M17.6 13.5v10.1l-8.7 5.1V18.6z"/>
                      </svg>
                    <a className="math-meta-text" href="https://math.meta.stackexchange.com/users/663376/adan-vivero">Mathematics Meta</a>
                </span>
                <span className="connect-body">
                    <svg className="meta" viewBox="0 0 550 380" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                        <path d="M25 72.14C25 46.21 46.21 25 72.13 25h188.53a47.13 47.13 0 0 1 33.33 13.81 47.124 47.124 0 0 1 13.81 33.33z" fill="#8fd8f7"/>
                        <path d="M307.8 237.14H25c0 25.93 21.21 47.15 47.13 47.15h117.83V355l70.7-70.71a47.13 47.13 0 0 0 33.33-13.81 47.166 47.166 0 0 0 13.81-33.34z" fill="#155397"/>
                        <path d="M25 95.71h282.8v47.15H25z" fill="#46a2d9"/>
                        <path d="M25 166.43h282.8v47.14H25z" fill="#2d6db5"/>
                    </svg>
                    <a className="meta-text" href="https://meta.stackexchange.com/users/513158/adan-vivero">Meta Stack Exchange</a>
                </span>
        </div>
    )
}
export default Connect;