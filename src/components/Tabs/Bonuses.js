import React from 'react'
import './Tabs.css'
import { Link } from 'react-router-dom'

function Bonuses() {
    return (
        <div className="control-section">
            <div className="heading">
                <h3>Bonuses</h3>
                <Link to='/' className="cross"><div>X</div></Link>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius mollitia accusamus exercitationem consequatur,
                 suscipit odit modi et sed beatae in quam corrupti nostrum dolores aliquid id, voluptatum rem hic iure? Suscipit
                  magni asperiores voluptatum architecto ullam vel nisi doloribus unde dolorem, quasi numquam aliquid. Ea aut minima possimus nisi.
            </p>
        </div>
    )
}

export default Bonuses
