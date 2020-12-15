import React from 'react'
import './Tabs.css'
import { Link } from 'react-router-dom'

function Messages() {
    return (
        <div className="control-section">
            <div className="heading">
                <h3>Messages</h3>
                <Link to='/' className="cross"><div>X</div></Link>
            </div>
            new page
        </div>
    )
}

export default Messages
