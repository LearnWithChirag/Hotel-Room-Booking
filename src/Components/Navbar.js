import React from "react";
import '../CSS/Navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = () =>{
    const Navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem("user"));
    const handleLogOut =() =>{
        localStorage.removeItem("loggedin");
        Navigate("/");
    }
    return(
        <div class="navbar">
            <h1>rest<span>&</span>peace</h1>
            <div class="link">
                <ul class="list">
                    <li><a href="/homepage">Home</a></li>
                    <li><a href="/hotels">Hotels</a></li>
                    {/* <li><a href="/facilities">Facilities</a></li> */}
                    {/* <li><a href="#">Contact Us</a></li> */}
                    <li><a href="/about">About</a></li>
                </ul>
                <span class="userName">
                    Welcome, <p> {userName.name} </p>
                    <button type="button" onClick={handleLogOut}>LogOut</button>
                </span>
            </div>
        </div>
    )
}

export default Navbar;