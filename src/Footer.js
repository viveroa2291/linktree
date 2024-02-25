import React from 'react'
import "./CSS/footer.css";
function Footer () {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <p className='bottom-text'>Code, Social Media, Cringe</p>
            <p className='copyright'>Created by Adan Vivero <br/> © {currentYear}</p>
        </div>
    )
}
export default Footer;