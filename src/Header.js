import React from 'react';
import './header.css';
import chicago from './images/chicago.jpeg';
function Header () {
    const getDay = (day) => {
        switch(day) {
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
            default:
                return "Invalid day";
        }
    };
    const currentDay = new Date().getDay();
    const dayName = getDay(currentDay);

    return (
        <div>
            <p className='date'>Happy {dayName}</p>
            <div class="picture">
                <img className='header-pic' src={chicago} alt="Header pic"/>
            </div>
            <h1 className='header-name'>Adan Vivero</h1>
            <hr className='header-hr'/>
        </div>
    )
}

export default Header;