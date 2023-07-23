import React from "react";
import "../CSS/OurRooms.css";
import delux from "../Images/delux.jpeg";
import combo from "../Images/combo.jpeg";
import hall from "../Images/hall.jpeg";
import Navbar from "./Navbar";

const OurRooms = () => {
    // function roomAvailable () {
        
            // if(props.available === true){
            //     document.querySelector('.avail').textContent="Available";
            // }else{
            //     document.querySelector('.avail').textContent="Reserved";

            // }
    // };

  return (
    <>
     
      <Navbar />
      <div className="ourRoom">
        <div className="title">
          <h1>Our Rooms</h1>
        </div>
        <Room
          roomName="Delux Room"
          imageName={delux}
          features="Master Bedroom, Study Table"
          facilities="WiFi, Air Conditioner, Geyser"
          guests="2 Adult , 2 Children"
          price={1999}
          available={true}
          soldOut= {false}
          link= "/delux"
        />

        <Room
          roomName="Super Delux Room"
          imageName={combo}
          features="Master Bedroom, Study Table"
          facilities="WiFi, Air Conditioner, Geyser"
          guests="4 Adult , 2 Children"
          price={3999}
          available={true}
          soldOut= {false}
          link="/superdelux"
        />

        <Room
          roomName="Party Hall"
          imageName={hall}
          features="Stage, Projector, Spacious"
          facilities="WiFi, Air Conditioner, Food Facility"
          guests="100 Person"
          price={6999}
          available={false}
          soldOut = {true}
          link="/hall"
        />
      </div>
    </>
  );
};

function Room(props) {

  return (
    <div className="roomContainer">
      <div className="room">
        <div className="roomImage">
          <img src={props.imageName} alt={props.roomName} />
        </div>
        <div className="roomDetails">
          <h2>{props.roomName}</h2>
          <div className="roomItems">
            <h4>Features</h4>
            <span>{props.features}</span>

            <h4>Facilities</h4>
            <span>{props.facilities}</span>

            <h4>Guests</h4>
            <span>{props.guests}</span>
          </div>
        </div>
      </div>
      <div className="roomPrice">
        {
          props.available ? (
            <h3 className="avail" style={{backgroundColor:"green"}}>Available</h3>
            
          ):(
            <h3 className="avail" style={{backgroundColor:"red"}}>Reserved</h3>
          )
            
          
        }
        <h2> &#8377;{props.price}</h2>
        <a href={props.link}>
        {
          props.soldOut ? (
            <input value="Sold" type="button" disabled/>
          ):(

            <input type="button" value="Book" />
          )
        }
        </a>
      </div>
    </div>
  );
}

export default OurRooms;
