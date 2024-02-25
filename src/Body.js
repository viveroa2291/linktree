import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './body.css';
import {Button, Collapse} from 'react-bootstrap';
import Finance from './components/Finance';
function Body() {
    const [finance, showFinance] = useState(false);
    return (
        <div>
            <p className='description'>Full Stack Developer | Snapchat Lens Creator</p>
            <p className='description'>E-mail for all business inquiries</p>
            <p className='description'><FontAwesomeIcon icon="envelope"/> adan.vivero1@gmail.com</p>
            <div className='links'>
                <Button className='link'
                aria-controls="example-collapse-text"
                aria-expanded={finance} 
                onClick={() => showFinance(!finance)}>Finance</Button>
                
                <Button className='link'>Code</Button>
                <Button className='link'>Sponsors</Button>
                <Button className='link'>Connect</Button>
                <Button className='link'>Social</Button>
                <Button className='link'>Media</Button>
                <Button className='link'>Projects</Button>
                <Button className='link'>Lenses</Button>
                <Button className='link'>Content</Button>
                <Collapse in={finance}>
                    <div>
                        <Finance/>
                    </div>    
                </Collapse>
            </div>
        </div>
    )
}
export  default Body;