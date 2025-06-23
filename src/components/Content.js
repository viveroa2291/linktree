import React, { useState, useEffect } from "react";
import '../CSS/content.css';

import Logan from './content-folder/logan';
import Logan2 from './content-folder/logan2';
import Nikki from './content-folder/nikki';
import Walmart from './content-folder/walmart';
import Rats from './content-folder/rats';
import Bucks from './content-folder/bucks';
import Umbrella from './content-folder/umbrella';
import Homeless from './content-folder/homeless';
import Party from './content-folder/party';
import Crime from './content-folder/crime';
import Planet from './content-folder/planet';
import Planet2 from './content-folder/planet2';
import Airport from './content-folder/airport';
import Met from './content-folder/met';

function Content () {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.snapchat.com/embed.js';
        script.async = true;

        script.onload = () => setIsLoading(false);
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div>
            {isLoading ? (
                <div className="loading-screen">
                    <div className="spinner"></div>
                    <p>Loading Content...</p>
                </div>
            ) : (
                <div className="content-header">
                <span className="snapchat"><Logan/></span>
                <span className="snapchat"><Logan2/></span>
                <span className="snapchat"><Nikki/></span>
                <span className="snapchat"><Walmart/></span>
                <span className="snapchat"><Rats/></span>
                <span className="snapchat"><Bucks/></span>
                <span className="snapchat"><Umbrella/></span>
                <span className="snapchat"><Homeless/></span>
                <span className="snapchat"><Party/></span>
                <span className="snapchat"><Crime/></span> 
                <span className="snapchat"><Planet/></span>
                <span className="snapchat"><Planet2/></span>
                <span className="snapchat"><Airport/></span>
                <span className="snapchat"><Met/></span>
            </div>
            )}
        </div>
    )
}
export default Content;