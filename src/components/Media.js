import React from "react";
import '../CSS/media.css';
import rumble from '../images/rumble_logo.jpeg';
import {SocialIcon } from 'react-social-icons';

function Media () {
    return (
        <div>
            <span className="video-media-body">
                <img className="rumble-logo" src={rumble} loading="lazy" alt="Rumble Logo"/>
                <a className="rumble-text" href="https://rumble.com/user/adxadan">Rumble</a>
            </span> 
            <span className="video-media-body">
                <span className="youtube-span">
                    <SocialIcon className="youtube-icon" url="https://www.youtube.com/channel/UC44ZQ3MDGUBNPA0ZFsY8Lfg"/>
                </span>
                <a className="youtube-text" href="https://www.youtube.com/channel/UC44ZQ3MDGUBNPA0ZFsY8Lfg">Youtube</a>
            </span>
            <span className="video-media-body">
                <span className="twitch-span">
                    <SocialIcon className="twitch-icon" url="https://www.twitch.tv/adxadan" />
                </span>
                <a className="twitch-text" href="https://www.twitch.tv/adxadan">Twitch</a>
            </span>
        </div>
    )
}
export default Media;