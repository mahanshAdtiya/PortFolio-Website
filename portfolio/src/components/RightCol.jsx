import React from 'react'

function RightCol({className}) {
    return (
        <ul className={`${className}`}>
            <li className="col-content rotate-90 transform hover:-translate-y-1 transition ease-in">
                <a target="_blank" rel="noreferrer" href="mailto:mahansh21334@iiitd.ac.in" className='hover:text-red-500'>mahansh21334@iiitd.ac.in</a>
            </li>
            <li className=""></li>
        </ul>
    )
}

export default RightCol