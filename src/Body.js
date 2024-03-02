import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './body.css';
import Finance from './components/Finance';
import Code from './components/Code';
import Sponsors from './components/Sponsors';
import Connect from './components/Connect';
import Social from './components/Social';
import Media from './components/Media';
import Projects from './components/Projects';
import Lenses from './components/Lenses';
import Content from './components/Content';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { SocialIcon } from 'react-social-icons';

library.add(faEnvelope);
function Body() {
    const [activeSection, setActiveSection] = useState(null);

    const handleSectionClick = (section) => {
        setActiveSection((prevSection) => (prevSection === section ? null : section));
        const social = document.getElementById("social-media-headers");
        social.style.display = "none";
    };
    return (
        <div>
            <p className='description'>Full Stack Developer | Snapchat Lens Creator</p>
            <p className='description'>E-mail for all business inquiries</p>
            <p className='description'><FontAwesomeIcon icon="envelope"/> adan.vivero1@gmail.com</p>
            <div className='links'>
                <p className='link' onClick={() => handleSectionClick('finance')}>Finance</p>
                <a className='link' href='#code' onClick={() => handleSectionClick('code')}>Code</a>
                <a className='link' href='#sponsors' onClick={() => handleSectionClick('sponsors')}>Sponsors</a>
                <a className='link' href='#connect' onClick={() => handleSectionClick('connect')}>Connect</a>
                <a className='link' href='#social' onClick={() => handleSectionClick('social')}>Social</a>
                <a className='link' href='#media' onClick={() => handleSectionClick('media')}>Media</a>
                <a className='link' href='#projects' onClick={() => handleSectionClick('projects')}>Projects</a>
                <a className='link' href='#lenses' onClick={() => handleSectionClick('lenses')}>Lenses</a>
                <a className='link' href='#content' onClick={() => handleSectionClick('content')}>Content</a>
            </div>
            <div class="social-media-headers" id="social-media-headers">
                <SocialIcon className='header-icons' url='https://stackoverflow.com/users/10572727/adan-vivero'/>
                <SocialIcon className='header-icons' url='https://www.youtube.com/channel/UC44ZQ3MDGUBNPA0ZFsY8Lfg'/>
                <SocialIcon className='header-icons' url='https://github.com/viveroa2291'/>
                <SocialIcon className='header-icons' url='https://www.linkedin.com/in/adan-vivero-a93970156/'/>
            </div>
            <div className='body-sections'>
                {activeSection === 'finance' && <Finance/>}
                {activeSection === 'code' && <Code/>}
                {activeSection === 'sponsors' && <Sponsors/>}
                {activeSection === 'connect' && <Connect/>}
                {activeSection === 'social' && <Social/>}
                {activeSection === 'media' && <Media/>}
                {activeSection === 'projects' && <Projects/>}
                {activeSection === 'lenses' && <Lenses/>}
                {activeSection === 'content' && <Content/>}
            </div>
        </div>
    )
}
export  default Body;