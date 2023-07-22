import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../CSS/Login.css';
import user from '../Images/user.png'

const Login =() =>{

    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const handleLogin =(e) =>{
        e.preventDefault();
        const loggedInUser =JSON.parse( localStorage.getItem("user"));
        if(input.email === loggedInUser.email && input.password === loggedInUser.password){
            localStorage.setItem("loggedin",true)
            navigate("/homepage");
        }
        else{
            alert("worng email or password");
        }
    };

    return(
        <div class="loginWindow">
            <div class="loginHead">
                <img src={user} alt="login icon"  />
                <h2> User Login</h2>
            </div>
            <div class="loginDetails">
                <form onSubmit={handleLogin}>

                <label for="Email">Email:</label>
                <input type="email" name="email" value={input.email} id="email" required 
                onChange={(e) => setInput({...input,[e.target.name] : e.target.value,})}/>
                <label for="password">Password:</label>
                <input type="password" name="password" value={input.password} id="email" required 
                onChange={(e) => setInput({...input,[e.target.name] : e.target.value,})}/>
                <span class="btnLink">
                    <button type="submit">Login</button>
                    <p>Don't have an account?<a href="/register">Register Here</a></p>
                </span>
                </form>
        
            </div>
        </div>
    )
}

export default Login;