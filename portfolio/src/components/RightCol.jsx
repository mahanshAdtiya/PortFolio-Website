import React from 'react'

function RightCol({className}) {
    return (
        <ul className={`col-container right ${className}`}>
            <li className="col-content rotate-90">
                <a target="_blank" rel="noreferrer" href="mailto:mahansh21334@iiitd.ac.in">mahansh21334@iiitd.ac.in</a>
            </li>
            <li className="col-underline"></li>
        </ul>
    )
}

export default RightCol