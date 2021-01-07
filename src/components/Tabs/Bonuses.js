import React from 'react'
import './Tabs.css'
import { Link } from 'react-router-dom'

function Bonuses() {
    return (
        <div className="control-section">
            <div className="heading">
                <h3>Bonuses</h3>
                <Link to='/' className="cross"><div><i className="fas fa-times"></i></div></Link>
            </div>
            <div className="control-content">
                <div className="login-error">
                    <i className="fas fa-exclamation-circle"></i>
                    <p>Under Development</p>
                </div>
            </div>
        </div>
    )
}

export default Bonuses
