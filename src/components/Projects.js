import React from "react";
import cancun from '../images/cancun.png';
import phone from '../images/phone.png';
import tictactoe from '../images/tictactoe.png';
import valentines from '../images/valentines.png';
import '../CSS/project.css';
function Projects () {
    return (
        <div>
            <span className="project-body">
                <img className="cancun-image" src={cancun} alt="Cancun Mexican Grill"/>
                <a href="https://viveroa2291.github.io/Cancun/" className="cancun-text">Cancun Mexican Grill <i>(Beta)</i></a>
            </span> 
            <span className="project-body">
                <img className="phone-image" src={phone} loading="lazy" alt="Me with my phone"/>
                <a href="https://viveroa2291.github.io/Developer-Site/" className="developer-text">Developer Site <i>(Beta)</i></a>
            </span>
            <span className="project-body">
                <img className="tic-tac-toe-image" src={tictactoe} loading="lazy" alt="My tic tac toe board"/>
                <a href="https://viveroa2291.github.io/Tic-Tac-Toe/" className="tic-tac-toe-text">Tic-Tac-Toe</a>
            </span>
            <span className="project-body">
                <a href="https://background-remover-chi.vercel.app/" className="tic-tac-toe-text">Background Remover <i>(Beta)</i></a>
            </span>
            <span className="project-body">
                <img className="valentines-image" src={valentines} alt="Valentines"/>
                <a href="https://adans-valentines-card.vercel.app/" className="valentines-text">Valentines Card</a>
            </span> 
        </div>
    )
}
export default Projects;