import React, {useState}from 'react'
import {Link} from 'react-router-dom'

function SidebarItem(props) {
    const [tooltip, setTooltip] = useState(false)
    
    return (
        <>
        <Link to={props.data.path} className="side-link-wrap" id={window.location.pathname === props.data.path ? "active-tab" : ""}>
            <li className="side-link flex-justify"
                onMouseEnter={() => setTooltip(true)}
                onMouseLeave={() => setTooltip(false)}
                key={props.data.key}>
                    <i className={props.data.icon}></i>
                    {
                tooltip === true &&
                    <div className="tab-tooltip">{props.data.name}</div>
                }
            </li>
        </Link>
        </>
    )
}

export default SidebarItem
