import React, { useState } from 'react'
import './Game.css'
import { CSSTransition } from 'react-transition-group'
import LoginCard from '../Login/LoginCard'
import GameMenu from './GameMenu'

const GameContainer = () => {
    const [titleTab , setTitleTab] = useState(true)
    const [activeLoginPage, setActiveLoginPage] = useState(false)
    const [showGameMenu, setShowGameMenu] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const showGame = () => {
        setTitleTab(false)
        setActiveLoginPage(false)
        setShowGameMenu(true)
    }
    const logout = () => {
        setShowGameMenu(false)
        setActiveLoginPage(false)
        setTitleTab(true)
    }
    
    return(
    <>
        <div className="user flex-justify">
            {
                showGameMenu ? 
                <div className="user-info-details">
                    <div className="user-info-title" onClick={() => setDropdown(e => !e)}>
                        <p>Welcome rohan 
                        <span>
                            {dropdown ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}
                        </span>
                        </p>
                    </div>
                    {dropdown && <ul className="dropdown-user">
                        <li className="dropdown-item"><i className="fas fa-user"></i>Go to Profile</li>
                        <li className="dropdown-item" onClick={logout}> <i className="fas fa-sign-out-alt"></i> Logout</li>
                    </ul>}
                </div> : 
                <div className="swing">
                <button onClick={() => setActiveLoginPage(true) }>LOG IN</button>
            </div>
            }
        </div>
        <div className="game-section" onClick={() => setDropdown(false)}>
            <div className="game-container">
                <div className="games">
                    <div className={showGameMenu ? "game-box-large" : "game-box"}>
                        <CSSTransition
                            in={titleTab}
                            appear={true}
                            classNames={"slidein-slideout"}
                            timeout={300}
                            unmountOnExit={true}
                        >
                        <div className="game-content">
                            <h3 className="login-info">Please Login To Start playing</h3>
                            <i className="fas fa-gamepad" id="gameIcon" style={{fontSize : 40, color: '#78b5ed'}}></i>
                            <button className="loginBtn" onClick={() => setActiveLoginPage(true)}>GO TO LOGIN</button>
                        </div>
                        </CSSTransition>
                        <CSSTransition
                        in={showGameMenu}
                        appear={true}
                        classNames={"slidein-fadeout"}
                        timeout={300}
                        unmountOnExit={true}
                        >
                            <GameMenu />
                        </CSSTransition>
                    </div>
                    
                </div>
            </div>
        </div>

        <CSSTransition
        in={activeLoginPage}
        appear={true}
        classNames={"slideintop-slideout"}
        timeout={500}
        unmountOnExit={true}
        onEntered={() => setTitleTab(false)}
        onExit={() => setTitleTab(true)}
        >
            <LoginCard onClick={(prevState) => setActiveLoginPage(!prevState)} showGame={showGame}/>
        </CSSTransition>

    </>
    )
}

export default GameContainer