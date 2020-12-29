import React, { useState } from 'react'
import './TopNav.css'
import LoginCard from './LoginCard'
import {CSSTransition} from 'react-transition-group'

function TopNav() {
    const [activeLoginPage, setActiveLoginPage] = useState(false)
    const [isLogged, setIsLogged] = useState(false)

    const login = () => {
        setIsLogged(true)
    }

    return (
        <>
        <div className="top-nav">
            <div className="logo">
                <h1>GAMING WORLD</h1>
            </div>
            {isLogged || <div className="user flex-justify">
                <div className="swing">
                    <button onClick={() => setActiveLoginPage(true) }>LOG IN</button>
                </div>
            </div>}
        </div>
        <CSSTransition
        in={activeLoginPage}
        appear={true}
        classNames={"slideintop-slideout"}
        timeout={500}
        unmountOnExit={true}
        >
            <LoginCard onClick={() => setActiveLoginPage(false)} login={login}/>
        </CSSTransition>
        </>
    )
}

export default TopNav
