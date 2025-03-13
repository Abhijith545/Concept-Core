import { Link } from "react-router-dom";
import React from 'react';
export function Navbar() {
    return <>
        <div className="nav-div">
            <ul className="nav-ul">
                <li><button><Link to="/">Home</Link></button></li>
                <li><button><Link to="/explore">Explore</Link></button></li>
                <li><button><Link to="/mycourses">My Courses</Link></button></li>
                <li><button className="r8-btn"><Link to="/profile">Profile</Link></button></li>
            </ul>
        </div>
    </>
}
