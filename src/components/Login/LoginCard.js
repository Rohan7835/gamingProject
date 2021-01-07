import React, { useState} from 'react'
import { CSSTransition } from 'react-transition-group'
import './LoginCard.css'
import Register from './Register'
import axios from 'axios'
 
const LoginCard = ({showGame,onClick}) => {
    const [credentials, setCredentials] = useState({ username: '', password:''})
    const [wrongInfo, setWrongInfo] = useState(false)
    const [login, setLogin] = useState(true)
    const [register, setRegister] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        // const login_username = credentials.username
        // const login_password = credentials.password

        // let formData = new FormData()
        // formData.append("login_username",login_username)
        // formData.append("login_password",login_password)
        
        // const url = "http://localhost:80/game-backend/login.php"
        
        // axios.get(url,formData)
        //     .then(res => console.log(res))
        if(credentials.username === 'gaming' && credentials.password === 'gamingworld'){
            setWrongInfo(false);
            showGame();
        }else{
            setWrongInfo(true)
        }
        setCredentials({username: '', password: ''})
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setCredentials({...credentials,[name]:value})
    }

    return (
        <div className="login-container">
            <div className="login-wrapper">
                
                <div className="login-head flex">
                    <div className="login-logo">
                        <h2>Gaming World</h2>
                    </div>
                    <div className="cross-login" onClick={onClick}>X</div>
                </div>
                <div className="credentials">
                    <div className="switchLog">
                        <p className={login && "active-log-panel"} onClick={() => setRegister(false)}>LOG IN</p>
                        <p className={login || "active-log-panel"} onClick={() => setLogin(false)}>SIGN UP</p>
                    </div>
                    <CSSTransition
                        in={login}
                        classNames={"fadein-fadeout"}
                        timeout={250}
                        unmountOnExit={true}
                        onExited={()=>setRegister(true)}
                    >
                        <div className="login">
                            <form >
                                <div className="login-inputs">
                                    {wrongInfo && <div className="error-msg">Incorrect username or password</div>}
                                    <input type="text" 
                                        placeholder="ENTER YOUR USERNAME (Demo: gaming)" 
                                        name="username" 
                                        onChange={handleChange} 
                                        value={credentials.username}
                                    /><br />
                                    <input type="password" 
                                        placeholder="ENTER YOUR PASSWORD (Demo: gamingworld)" 
                                        name="password" 
                                        onChange={handleChange} 
                                        value={credentials.password}
                                    />
                                </div>
                                <button className="loginBtn" type="submit" onClick={handleSubmit} style={{margin:'auto'}}>LOGIN</button>
                            </form>
                        </div>
                    </CSSTransition>
                    <CSSTransition
                        in={register}
                        classNames={"fadein-fadeout"}
                        timeout={250}
                        unmountOnExit={true}
                        onExited={() => setLogin(true)}
                    >
                        <Register />
                    </CSSTransition>
                </div>
                <div className="divide">
                    <p>OR</p>
                </div>
                <div className="login-with">   
                    <div className="google">
                        <i className="fab fa-google"></i>
                        Continue with Google
                    </div>
                </div>
                <div className="socials flex">
                    <div className="mail">
                        <i className="fas fa-envelope"></i>
                        <p>gamingworld@gmail.com</p>
                    </div>
                    <ul className="social-handles flex">
                        <li className="social-item">
                            <a href="www.google.com">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="www.google.com">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="www.google.com">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LoginCard
