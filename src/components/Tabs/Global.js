import React, {useState,useEffect} from 'react'
import './Tabs.css'
import { Link } from 'react-router-dom'

function Global() {
    const [messageArr, setMessageArr] = useState([
        {message:'hi'},
        {message:'hello'},
        {message:'what are you doing'}
    ])
    const [message, setMessage] = useState('')
    const [userToken, setUserToken] = useState(null)
    
    //getting token from local storage
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'))
        if(token){
            setUserToken(token)
            console.log(token)
        }else{
            setUserToken(null)
        }
    },[])

    //handling form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if(message){
            const finalMessage = { message : message}
            setMessageArr((prevMessage) => {return[...prevMessage,finalMessage]})
        }
        setMessage('')
    }
    
    //handling inputs value
    const handleChange = (e) => {
        const {value} = e.target
        setMessage(value)
    }

    return (
            <div className="control-section">
                <div className="heading">
                    <h3>Global chat</h3>
                    <Link to='/' className="cross"><i className="fas fa-times"></i></Link>
                </div>
                <div className="chat-container">
                    <div className="chat-wrapper">
                        <div className="scrollbar">
                            <div className="chat-box">
                                <div className="message permanent">
                                    <div className="left">
                                    <div className="message-profile flex-justify">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    </div>
                                    <div className="right">
                                        <div className="top">System</div>
                                        <div className="bottom">Making accusations regarding the fairness of the game without providing
                                        any proof will cause your account to be blocked.</div>
                                    </div>
                                </div>
                                {messageArr.map((msg, index) => (
                                        <div className="message random" key={index}>
                                            <div className="left">
                                            <div className="message-profile flex-justify">
                                                <i className="fas fa-user"></i>
                                            </div>
                                            </div>
                                            <div className="right">
                                                <div className="top">Unkown user</div>
                                                <div className="bottom">{msg.message}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={userToken ? "chat-input" : "chat-input disabled-input"}>
                    {userToken ? "" : <div className="login-popup-error"><p><span>SignIn</span> to Access All Features </p></div>}
                    <form action="">
                        <input type="text" placeholder="Say Something" name="message" value={message} onChange={handleChange}/>
                        <button className="submit" onClick={handleSubmit}>SEND</button>
                    </form>
                </div>
            </div>
    )
}

export default Global