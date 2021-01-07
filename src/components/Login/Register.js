import React, {useState} from 'react'
import axios from 'axios'

function Register() {
    const [credentials, setCredentials] = useState({ reg_username: '', reg_password:'', reg_email:''})
    const [wrongInfo, setWrongInfo] = useState(false)
    const [success, setSuccess] = useState(false)
    const [makingRequest, setMakingRequest] = useState(false)
    const [usernameTaken, setUsernameTaken] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSuccess(false)
        const username = credentials.reg_username
        const password = credentials.reg_password
        const email = credentials.reg_email
        
        const email_format = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(email.match(email_format)){
            let formData = new FormData()
            formData.append("username",username)
            formData.append("password",password)
            formData.append("email",email)
            const url = "http://localhost:80/game-backend/"
            setMakingRequest(true)
            axios.post(url,formData)
                .then(res => res)
                .then((data) => {
                    if(data.data === "error"){
                        setUsernameTaken(true)
                        setMakingRequest(false)
                    }else if(data.data !== "error"){
                        credentials.reg_username = ''
                        credentials.reg_password = ''
                        credentials.reg_email = ''
                        setWrongInfo(false)
                        setSuccess(true)
                        setMakingRequest(false)
                    }
                    
                })
                .catch( err => console.log('error: ' +err))
            
            setTimeout(() => {
                setUsernameTaken(false)
            },2000)
        }else{
            setSuccess(false)
            setWrongInfo(true)
        }

    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setCredentials({...credentials,[name]:value})
    }
    return (
        <div className="login">
            <form action="
            ">
                <div className="login-inputs">
                <input type="text" 
                    placeholder="SET USERNAME" 
                    name="reg_username" 
                    onChange={handleChange} 
                    value={credentials.reg_username}
                    required=""
                /><br />
                <input type="password" 
                    placeholder="SET PASSWORD" 
                    name="reg_password" 
                    onChange={handleChange}
                    value={credentials.reg_password}
                    required=""
                /><br />
                <input type="email" 
                    placeholder="ENTER EMAIL" 
                    name="reg_email" 
                    onChange={handleChange}
                    value={credentials.reg_email}
                    required=""
                />
            </div>
            <button className="loginBtn" type="submit" style={{margin:'auto'}} onClick={handleSubmit}>
                {makingRequest ? <i className="fas fa-circle-notch"></i> : 'register'}
            </button>
            </form>
            {wrongInfo && <div className="reg_status reg_status_false">Incorrect Info, Please Fill Correct Info</div>}
            {success && <div className="reg_status">Successfully Registered (Please Continue to Login)</div>}
            {usernameTaken && <div className="reg_status reg_status_false">Userame {credentials.reg_username} already taken</div>}
        </div>
    )
}

export default Register
