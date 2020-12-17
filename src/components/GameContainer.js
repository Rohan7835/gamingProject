import React, { useState, useEffect } from 'react'
import './Game.css'
import { CSSTransition } from 'react-transition-group'
import GameMenu from './GameMenu'

const GameContainer = (props) => {
    const [titleTab , setTitleTab] = useState(true)
    const [loginTab , setLoginTab] = useState(false)
    const [gameMenu, setGameMenu] = useState(false)


    const goToLogin = () => {
        setTitleTab(prevState => !prevState)
        setLoginTab(prevState => !prevState)
    }
    const goToGame = () => {
        setTitleTab(false)
        setLoginTab(false)
        setGameMenu(true)
    }
    return(
        <div className="game-section">
            <div className="game-container">
                <div className="games">
                    <div className="bg-forest">
                        <i className="bg-forest-img"></i>
                    </div>
                    <div className={gameMenu ? "game-box-large" : "game-box"}>
                        <CSSTransition
                            in={titleTab}
                            appear={true}
                            classNames={"slidein-slideout"}
                            timeout={300}
                            unmountOnExit={true}
                        >
                        <div className="game-content">
                            <i className="bg-hands"></i>
                            <p className="login-info">Please Login To Start playing</p>
                            <i className="fas fa-gamepad" id="gameIcon" style={{fontSize : 40, color: '#b8e986'}}></i>
                            <button className="loginBtn" onClick={goToLogin}>GO TO LOGIN</button>
                        </div>
                        </CSSTransition>
                        
                        <CSSTransition
                            in={loginTab}
                            classNames={"slidein-fadeout"}
                            timeout={300}
                            unmountOnExit={true}
                        >
                            <LoginCard goToTitle={goToLogin} goToGame={goToGame}/>
                        </CSSTransition>

                        <CSSTransition
                            in={gameMenu}
                            classNames={"fadein-fadeout"}
                            timeout={400}
                            unmountOnExit={true}
                        >
                            <GameMenu/>
                        </CSSTransition>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

const LoginCard = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [wrongInfo, setWrongInfo] = useState(false)

    const change = () => {
        props.goToTitle()
    }

    const handleSubmit = () => {
        if(username === 'rohan' && password === 'rohan'){
            setWrongInfo(false)
            props.goToGame()
        }else{
            console.log(username,password)
            setWrongInfo(true)
            const gameIcon = document.getElementById('gameIcon')
            gameIcon.classList.add('shake')
            setTimeout(() => {
                gameIcon.classList.remove('shake')
            },600)
        }
        setUsername('')
        setPassword('')
    }

    useEffect(() => {
        document.getElementById('login').addEventListener('click', handleSubmit)

        
    },[handleSubmit])

    return (
        <div className="game-content">
            <i className="bg-hands"></i>
            <div className="cross" onClick={change}>X</div>
            <div className="login-inputs">
                <input type="text" 
                    placeholder="Enter Your Username" 
                    name="username" 
                    onChange={(e) => setUsername(e.target.value)} 
                    value={username}
                /><br />
                <input type="password" 
                    placeholder="Enter Your Password" 
                    name="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}
                />
                {wrongInfo && <div style={{color: 'red'}}>Incorrect username or password</div>}
            </div>
            <i className="fas fa-gamepad" id="gameIcon" style={{fontSize : 40, color: '#b8e986'}}></i>
            <button className="loginBtn" id="login">LOGIN</button>
        </div>
    )
}

export default GameContainer