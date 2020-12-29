import React, {useState} from 'react'
import { CSSTransition } from 'react-transition-group'

function GameMenu() {
    const [loadingGame, setLoadingGame] = useState(true)
    const [gameLoaded, setGameLoaded] = useState(false)


    setTimeout(() => setLoadingGame(false),3000)

    return (
        <div className="game-content">
            <CSSTransition
                in={loadingGame }
                classNames={"fadein-fadeout"}
                timeout={400}
                unmountOnExit={true}
                onExited={() => setGameLoaded(true)}
            >
                <div className="loader" style={{height:55,width:55}}>
                    <div className="border"></div>
                    <i className="fas fa-gamepad" style={{fontSize:25}}></i>
                </div>
            </CSSTransition>
            <CSSTransition
                in={gameLoaded}
                classNames={"fadein-fadeout"}
                timeout={400}
                unmountOnExit={true}
            >
                <GameStart />
            </CSSTransition>
        </div>
    )
}
const GameStart = () => {
    const [state, setState] = useState(false)

    setTimeout(() => setState(true), 2000)

    return(
        <div className="gameStart">
            {state ? <h3 className="slideUp">START PLAYING</h3> : <h3>Welcome to Tic Tac Toe</h3>}
        </div>
    )
}
export default GameMenu
