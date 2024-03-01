import React from "react";
import cancun from '../images/cancun.png';
import phone from '../images/phone.png';
import tictactoe from '../images/tictactoe.png';
import valentines from '../images/valentines.png';
import '../CSS/project.css';
function Projects () {
    return (
        <div>
            <span class="project-body">
                <img className="cancun-image" src={cancun} alt="Cancun Mexican Grill"/>
                <a href="https://viveroa2291.github.io/Cancun/" class="cancun-text">Cancun Mexican Grill <i>(Beta)</i></a>
            </span> 
            <span class="project-body">
                <img class="phone-image" src={phone} loading="lazy" alt="Me with my phone"/>
                <a href="https://viveroa2291.github.io/Developer-Site/" class="developer-text">Developer Site <i>(Beta)</i></a>
            </span>
            <span class="project-body">
                <img class="tic-tac-toe-image" src={tictactoe} loading="lazy" alt="My tic tac toe board"/>
                <a href="https://viveroa2291.github.io/Tic-Tac-Toe/" class="tic-tac-toe-text">Tic-Tac-Toe</a>
            </span>
            <span class="project-body">
                <a href="https://background-remover-chi.vercel.app/" class="tic-tac-toe-text">Background Remover <i>(Beta)</i></a>
            </span>
            <span class="project-body">
                <img class="valentines-image" src={valentines} alt="Valentines"/>
                <a href="https://adans-valentines-card.vercel.app/" class="tic-tac-toe-text">Valentines Card</a>
            </span> 
        </div>
    )
}
export default Projects;