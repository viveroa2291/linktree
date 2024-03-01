import React from "react";
import '../CSS/media.css';
import rumble from '../images/rumble_logo.jpeg';
import {SocialIcon } from 'react-social-icons';

function Media () {
    return (
        <div>
            <span class="video-media-body">
                <img src={rumble} loading="lazy" alt="Rumble Logo" class="rumble-logo"/>
                <a href="https://rumble.com/user/adxadan" class="rumble-text">Rumble</a>
            </span> 
            <span class="video-media-body">
                <div>
                    <SocialIcon className="youtube-icon" url="https://www.youtube.com/channel/UC44ZQ3MDGUBNPA0ZFsY8Lfg"/>
                </div>
                <a href="https://www.youtube.com/channel/UC44ZQ3MDGUBNPA0ZFsY8Lfg" class="youtube-text">Youtube</a>
            </span>
            <span class="video-media-body">
                <div>
                    <SocialIcon className="twitch-icon" url="https://www.twitch.tv/adxadan" />
                </div>
                <a href="https://www.twitch.tv/adxadan" class="twitch-text">Twitch</a>
            </span>
        </div>
    )
}
export default Media;