import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

export function Login({ setLogin }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='container'>
            <div className="signin">
                <h1>Welcome Back!</h1>
                <input value={email} onChange={(e) => setEmail(e.target.value)}
                    type="email" placeholder="Enter email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)}
                    type="password" placeholder="Enter password" />
                <button onClick={async () => {
                    try {
                        const response = await axios.post(
                            "http://localhost:3000/aval/cc/user/signin",
                            JSON.stringify({ email, password }),
                            { headers: { "Content-Type": "application/json" } }
                        );

                        localStorage.setItem("token", response.data.token);
                        setLogin(true);
                        navigate("/");
                    } catch (error) {
                        console.error("Login failed:", error.response?.data?.msg || error.message);
                    }
                }}>sign in</button>
                <p>New user? <Link to="/signup">SignUp</Link></p>
            </div>
        </div>
    );
}
