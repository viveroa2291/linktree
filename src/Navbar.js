import React, {useState, useRef} from 'react';
import './navbar.css';
import music from './music/alarm.mp3';
function NavBar() {
    const [isAudio, setAudio] = useState(false);
   // const [isMedia, setMedia] = useState(false);
    const audioRef = useRef(null);

    const toggleAudio = () => {
        if (isAudio) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setAudio(!isAudio);
    };
    /*
    const toggleMedia = () => {
        
        setMedia(!isMedia);
    }
    */
    return (
        <div>
            <button className='music-button' type="button" onClick={toggleAudio}>                
                {isAudio ? 'Pause Audio' : 'Play Audio'}
            </button>
            {/*
            <button className='movie-button' type='button' onClick={toggleMedia}>
                {isMedia ? 'Hide Media' : 'Show Media'}
            </button>
            */}
            <a className="home-button" href="https://adans-linktree.vercel.app/">Home</a>
            <audio ref={audioRef} className="music" src={music} controls autoPlay loop /> 
        </div>
    )
};
export default NavBar;