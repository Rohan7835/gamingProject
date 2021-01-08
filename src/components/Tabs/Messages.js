import React,{useState,useEffect} from 'react'
import './Tabs.css'
import { Link } from 'react-router-dom'

function Messages() {
    const [userToken, setUserToken] = useState(null)
    
    //getting token from local storage
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'))
        if(token){
            setUserToken(token)
        }else{
            setUserToken(null)
        }
    },[])
    
    return (
        <div className="control-section">
            <div className="heading">
                <h3>Messages</h3>
                <Link to='/' className="cross"><div><i className="fas fa-times"></i></div></Link>
            </div>
            <div className="control-content">
                <div className="login-error">
                    {userToken ? <p>Currently No messages to show</p> : 
                    <div>
                        <i className="fas fa-exclamation-circle"></i>
                        <p>Please Login to view Messages</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Messages