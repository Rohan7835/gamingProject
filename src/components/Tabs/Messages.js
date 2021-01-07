import React from 'react'
import './Tabs.css'
import { Link } from 'react-router-dom'

function Messages() {
    return (
        <div className="control-section">
            <div className="heading">
                <h3>Messages</h3>
                <Link to='/' className="cross"><div><i className="fas fa-times"></i></div></Link>
            </div>
            <div className="control-content">
                <div className="login-error">
                    <i className="fas fa-exclamation-circle"></i>
                    <p>Please Login to view Messages</p>
                </div>
            </div>
        </div>
    )
}

export default Messages