import React, { useState } from 'react'
import './Game.css'
import { CSSTransition } from 'react-transition-group'
import LoginCard from '../LoginCard'
import GameMenu from './GameMenu'

const GameContainer = (props) => {
    const [titleTab , setTitleTab] = useState(true)
    const [activeLoginPage, setActiveLoginPage] = useState(false)
    const [showGameMenu, setShowGameMenu] = useState(false)

    const showGame = () => {
        setTitleTab(false)
        setActiveLoginPage(false)
        setShowGameMenu(true)
    }
    
    return(
    <>
        <div className="game-section">
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
                        classNames={"slideintop-slideout"}
                        timeout={500}
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