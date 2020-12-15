import React, {useState} from 'react'
import sidebarData from './sideBarData'
import './Navbar.css'
import SidebarItem from './SidebarItem'

function Sidebar() {
    const [active, setActive] = useState('')

    return (
        <>
        <nav className="side-nav flex" onClick={() => setActive(window.location.pathname)}>
            <div className="user-profile flex-justify">
                <i className="fas fa-user"></i>
            </div>
            <ul className="side-navigation-links">
                {sidebarData.map((data,index) => (
                    <SidebarItem key={index} data={data}/>
                ))}
            </ul>
        </nav>
        </>
    )
}

export default Sidebar
