import React from "react";
import hall from "../Images/hall.jpeg";
import "../CSS/Delux.css";
import Navbar from "./Navbar";

const Hall = () => {
  return (
    <>
      <Navbar />
      <div className="deluxRoom">
        <div className="roomHead">
          <h1>Super Delux Room</h1>
        </div>
        <div className="roomImg">
          <img src={hall} alt="roomImage" />
        </div>
        <div className="roomDescription">
          <h2>~ Room Description</h2>
          <p>
            Our Deluxe Twin/Large Double also provides views over landscaped
            gardens. It has a seating area, digital safe and mini fridge. This
            room can be configured with either 2 single beds or zip and linked
            to provide a large double bed.
          </p>
          <span>
            <b>Max:</b> 100 Person
          </span>
          <span>
            <b>Size:</b> 50 m <sup>2</sup>
          </span>
        </div>
        <div className="roomList">
          <div className="roomServices">
            <h2>~ Hotel Services</h2>
            <li>Free WiFI</li>
            <li>Mini Stage</li>
            <li>Air Conditioner</li>
            <li>Projector</li>
            <li>Free starter</li>
            <li>Help & Support</li>
          </div>
          <div className="roomAddOn">
            <h2>~ Add Ons</h2>
            <div>
              <span>
                <input type="checkbox" name="book" id="" />
                <label htmlFor="miniBar">Drinks</label>
              </span>
              <p>&#8377;400</p>
            </div>
            <div>
              <span>
                <input type="checkbox" name="spa" id="" />
                <label htmlFor="spa">Food & Dessert</label>
              </span>
              <p>&#8377;900</p>
            </div>
            
          </div>
        </div>
        <div className="totalPrice">
            <span>&#8377;6999</span>
            <span><button>Book Now</button></span>
        </div>
      </div>
    </>
  );
};

export default Hall;