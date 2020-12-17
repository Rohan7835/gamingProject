import React from 'react'
import './TopNav.css'

function TopNav() {
    return (
        <div className="top-nav">
            <div className="logo">
                Gaming World
            </div>
            <div className="user flex-justify">
                <p>rohan7835</p>
                <div className="user-profile flex-justify" style={{height:25,width:25}}>
                    <i className="fas fa-user" style={{fontSize:14}}></i>
                </div>
            </div>
        </div>
    )
}

export default TopNav
