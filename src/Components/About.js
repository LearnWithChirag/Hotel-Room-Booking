import React from "react";
import '../CSS/About.css';
import Navbar from "./Navbar";

const About = () =>{
    return(
        <>
        <Navbar />
        <div className="about">
            <div className="aboutHead">
            <h1>rest<span>&</span>peace</h1>
            </div>
            <div className="aboutContent">
                <p>From the last 7 years, We <b>rest&peace</b> have provided the best Hotels and Rooms to our Customers.</p>
            </div>
        </div>
        </>
    )
};

export default About;