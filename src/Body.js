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
function Body() {
    const [activeSection, setActiveSection] = useState(null);

    const handleSectionClick = (section) => {
        setActiveSection((prevSection) => (prevSection === section ? null : section));
    };
          
    return (
        <div>
            <p className='description'>Full Stack Developer | Snapchat Lens Creator</p>
            <p className='description'>E-mail for all business inquiries</p>
            <p className='description'><FontAwesomeIcon icon="envelope"/> adan.vivero1@gmail.com</p>
            <div className='links'>
                <a className='link' href='#finance' onClick={() => handleSectionClick('finance')}>Finance</a>
                <a className='link' href='#code' onClick={() => handleSectionClick('code')}>Code</a>
                <a className='link' href='#sponsors' >Sponsors</a>
                <a className='link' href='#connect'>Connect</a>
                <a className='link' href='#social'>Social</a>
                <a className='link' href='#media'>Media</a>
                <a className='link' href='#projects'>Projects</a>
                <a className='link' href='#lenses'>Lenses</a>
                <a className='link' href='#content'>Content</a>
                {activeSection === 'finance' && <Finance />}
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