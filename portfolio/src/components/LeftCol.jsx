import React from 'react'

function LeftCol({className}) {
    return (
        <ul className={`col-container flex justify-center flex-col items-center ${className}`}>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/mahanshAdtiya"><i className="fab fa-github-alt" /></a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mahansh-aditya-015915238/"><i className="fab fa-linkedin-in" /></a>
            </li>
            <li className=" col-underline w-1 h-20 bg-slate-500"></li>
        </ul>
    )
}

export default LeftCol