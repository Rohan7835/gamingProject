import React from 'react'
import './Tabs.css'
import { Link } from 'react-router-dom'

function Global() {
    return (
        <div className="control-section">
            <div className="heading">
                <h3>Global chat</h3>
                <Link to='/' className="cross"><div>X</div></Link>
            </div>
            Global chat
        </div>
    )
}

export default Global
