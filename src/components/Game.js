import React from 'react'
import './Game.css'

const Game = (props) => {
    return(
        <div className="game-section">
            <div className="game-container">
                <div className="games">
                    <div className="bg-forest">
                        <i className="bg-forest-img"></i>
                    </div>
                    <div className="game-content">
                        what are you doing right now
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game