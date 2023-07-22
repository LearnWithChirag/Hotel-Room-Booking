import React from "react";
import '../CSS/Facilities.css';
import ac from  '../Images/ac.png';
import pool from '../Images/pool.png';
import tv from '../Images/television.png';
import gym from '../Images/gym.png';
import spa from '../Images/spaa.png';
import Navbar from "./Navbar";

const Facilities =() =>{
    return(
        <>
        
        <Navbar />
        <div className="facilityContainer">
            <div className="title">
                <h1>Facilities</h1>
            </div>
            <Facility imageName={ac} name='Air Conditioner' />
            <Facility imageName={pool} name='Swimming Pool' />
            <Facility imageName={tv} name='Television' />
            <Facility imageName={gym} name='Gym' />
            <Facility imageName={spa} name='Spa' />

        </div>
        </>
    )
};

function Facility(props){
    return(
        <div className="facilities">
        <span>
        <img src={props.imageName} alt={props.name} title={props.name} />
        <figcaption>            
            <h2>{props.name}</h2>
        </figcaption> 
        </span>
        </div>
    )
}

export default Facilities;