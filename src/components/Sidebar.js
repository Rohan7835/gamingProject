import React, {useState} from 'react'
import sidebarData from './sideBarData'
import './Navbar.css'
import SidebarItem from './SidebarItem'

function Sidebar() {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <>
        <div className={toggleMenu ? "toggle-btn toggle-btn-active" : "toggle-btn"} 
            onClick={() => setToggleMenu(prevState => !prevState)}
        >
            {toggleMenu ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </div>
        <nav className={toggleMenu ? "side-nav flex nav-toggled" : "side-nav flex"}>
            <div className="user-profile flex-justify" style={{marginBottom:20}}>
                <i className="fas fa-user"></i>
            </div>
            <ul className="side-navigation-links">
                {sidebarData.map((data,index) => (
                    <SidebarItem key={index} data={data} onClick={() => setToggleMenu(false)}/>
                ))}
            </ul>
        </nav>
        </>
    )
}

export default Sidebar
