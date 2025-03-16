import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export function Signup() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    return (
        <div className="signup">
            <h1>SignUp</h1>
            <input value={username} onChange={(e) => {setUsername(e.target.value)}} className="entry-inpt" type="text" placeholder="Enter Username"></input>
            <input value={email} onChange={(e) => {setEmail(e.target.value)}} className="entry-inpt" type="mail" placeholder="Enter Email"></input>
            <input value={password} onChange={(e) => {setPassword(e.target.value)}} className="entry-inpt" type="password" placeholder="Enter password"></input>
            <input value={password2} onChange={(e) => {setPassword2(e.target.value)}} className="entry-inpt" type="password" placeholder="Confirm password"></input>
            <button onClick={() => {
                fetch("")
            }} className="entry-btn">Sign Up</button>
            <p className="entry-other">already had an account? <Link to="/login">Login</Link></p>
        </div>
    )
}