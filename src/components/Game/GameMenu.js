import React, {useState, useEffect} from 'react'
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
                <GameTable />
            </CSSTransition>
        </div>
    )
}
const GameTable = () => {
    const [playGame, setPlayGame] = useState(false)
    const [bettingAmount, setBettingAmount] = useState('0.00020000')
    const [currentCell, setCurrentCell] = useState(0)

    let totalCells = [1.29,1.67,2.16,2.79,3.61,4.68,6.05,7.82,10.12];

    const gameStart = () => {
        setPlayGame(true);

    }
    const playGameLogic = () => {
        const gameRows = document.querySelectorAll('.game-table-row');
        const CookieIcons = document.querySelectorAll('.game-cell .cell-content');
        
        if(playGame){
            if(currentCell < gameRows.length){
                gameRows[currentCell].classList.add('active-game-table-row')
                const activeRowCells = document.querySelectorAll('.active-game-table-row .game-cell');
                for(let i =0; i < 4 ; i++){
                    activeRowCells[i].id =i
                }
                // if(currentCell >= 1){
                //     gameRows[currentCell-1].classList.add('prev-game-table-row')
                // }
                for(let i = 0 ; i < 4; i++){
                    activeRowCells[i].addEventListener('click', () => {
                        console.log("click");
                        const randomCell = Math.floor(Math.random()*4)
                        activeRowCells[randomCell].children[0].innerHTML = '<i class="fas fa-poop"></i>'

                        if(randomCell !== i){
                            //if player picks a cookie he goes to next level
                            gameRows[currentCell].classList.remove('active-game-table-row')
                            
                            const prev=currentCell+1
                            setCurrentCell(prev)
                        }else if(randomCell === i){
                            //If player Loses
                            setTimeout(()=> {
                                setCurrentCell(0)
                                setPlayGame(false)
                                activeRowCells[randomCell].children[0].innerHTML = '<i class="fas fa-cookie"></i>'
                            },2000)
                        }
                    })
                }
                if(currentCell >=1){
                    gameRows[currentCell-1].classList.add('prev-game-table-row')
                }
            }else{setPlayGame(false)}

        }else if(!playGame){
            gameRows.forEach(row => row.removeEventListener('click', () => {
                console.log("click");
            }))
            //Reset Game
            const activeRow = document.querySelector('.active-game-table-row')
            activeRow !== null && activeRow.classList.remove('active-game-table-row')
            const prevRow = document.querySelectorAll('.prev-game-table-row')
            prevRow !== null && prevRow.forEach(row => row.classList.remove('prev-game-table-row'))
            gameRows.forEach(row => row.classList.remove('active-game-table-row'))
            CookieIcons.forEach(cookie => cookie.innerHTML = '<i class="fas fa-cookie"></i>')
            setCurrentCell(0)
        }
    }

    useEffect(() => {
        playGameLogic();
    })


    return(
        <div className="gameStart">
            {playGame ? <h3 className="game-title">START PLAYING</h3> : <h3 className="game-title">Welcome to Tic Tac Toe</h3>}
            <div className="play-game-wrapper">
                <div className={playGame ? "game-table active-game-table" : "game-table"}>
                    {totalCells.map((cell,index) => {
                        return (
                            <div className="game-table-row" key={index} id={cell}>
                                <span className="row-outcome"><p>{(bettingAmount*cell).toFixed(8)}</p></span>
                                <div className="cells">
                                    <div>
                                        <div className="game-cell">
                                            <div className="cell-content">
                                                <i className="fas fa-cookie"></i>
                                            </div>
                                        </div>
                                        <div className="game-cell">
                                            <div className="cell-content">
                                                <i className="fas fa-cookie"></i>
                                            </div>
                                        </div>
                                        <div className="game-cell">
                                            <div className="cell-content">
                                                <i className="fas fa-cookie"></i>
                                            </div>
                                        </div>
                                        <div className="game-cell">
                                            <div className="cell-content">
                                                <i className="fas fa-cookie"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="action-bar">
                    {
                        playGame ? <button className="stop-btn" onClick={() => setPlayGame(false)}>STOP</button> : 
                        <button className="play-btn" onClick={gameStart}>PLAY</button>
                    }
                </div>
                <div className="game-info-amount flex">
                    <div className="betting-input">
                        <label htmlFor="bettingAmount">BET AMOUNT</label>
                        <input 
                            type="number" 
                            placeholder="0.00020000" 
                            name="bettingAmount" 
                            id="bettingAmount" 
                            value={bettingAmount}
                            onChange={(e) => playGame || setBettingAmount(e.target.value)}
                        />
                    </div>
                    <button className="submitBet">BET</button>
                </div>
            </div>
        </div>
    )
}
export default GameMenu
