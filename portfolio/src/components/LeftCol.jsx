import React from 'react'

function LeftCol({className}) {
    return (
        <ul className={`flex justify-center flex-col items-center ${className}`}>
            <li className=''>
                <a target="_blank" rel="noreferrer" href="https://github.com/mahanshAdtiya"><i className="fab fa-github-alt text-2xl transform hover:-translate-y-1 transition ease-in hover:text-red-500" /></a>
            </li>
            
            <li className='py-4'>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mahansh-aditya-015915238/"><i className="fab fa-linkedin-in text-2xl transform hover:-translate-y-1 transition ease-in hover:text-red-500" /></a>
            </li>
            <li className="w-1 h-40 rounded-xl bg-red-200"></li>
        </ul>
    )
}

export default LeftCol