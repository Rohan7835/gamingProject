import React, { useState }from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

function SidebarItem(props) {
    const [tooltip, setTooltip] = useState(false) //sideitem tooltip
    
    return (
        <>
        <NavLink to={props.data.path} className="side-link-wrap" exact activeClassName="active-tab">
            <li className="side-link flex-justify"
                onMouseEnter={() => setTooltip(true)}
                onMouseLeave={() => setTooltip(false)}
                key={props.data.key}
                onClick={props.onClick}>
                    <i className={props.data.icon}></i>
                    {
                tooltip === true &&
                    <motion.div className="tab-tooltip" initial={{opacity:0}} animate={{opacity:1}}>{props.data.name}</motion.div>
                }
            </li>
        </NavLink>
        </>
    )
}

export default SidebarItem
