import React, { useState , useEffect} from 'react'
import './LoginCard.css'
 
const LoginCard = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [wrongInfo, setWrongInfo] = useState(false)
    const [isLogged, setIsLogged] = useState(false)
    const {login, showGame } = props

    const handleSubmit = () => {
        if(username === 'rohan' && password === 'rohan'){
            setWrongInfo(false);
            setIsLogged(true);
            showGame();
            login();
        }else{
            setWrongInfo(true)
        }
        setUsername('')
        setPassword('')
    }

    useEffect(() => {
        document.getElementById('login') != null && document.getElementById('login').addEventListener('click', handleSubmit)

        
    },[handleSubmit])

    return (
        <div className="login-container">
            <div className="login-wrapper">
                
                <div className="login-head flex">
                    <div className="login-logo">
                        <h2>Gaming World</h2>
                    </div>
                    <div className="cross-login" onClick={props.onClick}>X</div>
                </div>
                <div className="credentials">
                    <div className="login-inputs">
                        {wrongInfo && <div className="error-msg">Incorrect username or password</div>}
                        <input type="text" 
                            placeholder="ENTER YOUR USERNAME" 
                            name="username" 
                            onChange={(e) => setUsername(e.target.value)} 
                            value={username}
                        /><br />
                        <input type="password" 
                            placeholder="ENTER YOUR PASSWORD" 
                            name="password" 
                            onChange={(e) => setPassword(e.target.value)} 
                            value={password}
                        />
                    </div>
                    <button className="loginBtn" id="login" style={{margin:'auto'}}>LOGIN</button>
                </div>
                <div className="divide">
                    <p>OR</p>
                </div>
                <div className="login-with">   
                    <div className="google">
                        <i class="fab fa-google"></i>
                        Continue with Google
                    </div>
                </div>
                <div className="socials flex">
                    <div className="mail">
                        <i class="fas fa-envelope"></i>
                        <p>gamingworld@gmail.com</p>
                    </div>
                    <ul className="social-handles flex">
                        <li className="social-item">
                            <a href="#">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="#">
                                <i class="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="#">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LoginCard
