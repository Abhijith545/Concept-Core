import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'
export function Signup({ setLogin }) {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const navigate = useNavigate()
    return (
        <div className='container'>
            <div className="signup">
                <h1>Create an Account</h1>
                <input value={username} onChange={(e) => { setUsername(e.target.value) }} className="entry-inpt" type="text" placeholder="Enter Username"></input>
                <input value={email} onChange={(e) => { setEmail(e.target.value) }} className="entry-inpt" type="mail" placeholder="Enter Email"></input>
                <input value={password} onChange={(e) => { setPassword(e.target.value) }} className="entry-inpt" type="password" placeholder="Enter password"></input>
                <input value={password2} onChange={(e) => { setPassword2(e.target.value) }} className="entry-inpt" type="password" placeholder="Confirm password"></input>
                <button onClick={async () => {
                    try {
                        const response = await fetch("http://localhost:3000/aval/cc/user/signup", {
                            method: "POST",
                            body: JSON.stringify({ email, userName: username, password }),
                            headers: { "Content-type": "application/json" }
                        });

                        if (response.ok) {
                            setLogin(true);
                            alert("Signed up");
                            navigate("/");
                        } else {
                            alert("Signup failed!");
                        }
                    } catch (error) {
                        console.error("Error signing up:", error);
                        alert("Something went wrong!");
                    }
                }} className="entry-btn">Sign Up</button>
                <p className="entry-other">already a user? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}
