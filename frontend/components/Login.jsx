import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="signup">
            <h1>Login</h1>
            <input value={username} onChange={(e) => {setUsername(e.target.value)}} className="entry-inpt" type="text" placeholder="Enter Username"></input>
            <input value={password} onChange={(e) => {setPassword(e.target.value)}} className="entry-inpt" type="password" placeholder="Enter password"></input>
            <button onClick={() => {
                ;
            }} className="entry-btn">Login</button>
            <p className="entry-other">Didn't have an account? <Link to="/signup">SignUp</Link></p>
        </div>
    )
}