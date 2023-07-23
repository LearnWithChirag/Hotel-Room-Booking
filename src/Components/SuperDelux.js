import React from "react";
import combo from "../Images/combo.jpeg";
import "../CSS/Delux.css";
import Navbar from "./Navbar";

const SuperDelux = () => {
  function Booked(){
    document.querySelector('.booked').style.opacity='1';
    document.querySelector('.bookBtn').textContent='Booked';
  }
  return (
    <>
      <Navbar />
      <div className="deluxRoom">
        <div className="roomHead">
          <h1>Super Delux Room</h1>
        </div>
        <div className="roomImg">
          <img src={combo} alt="roomImage" />
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
            <b>Max:</b> 5 Person
          </span>
          <span>
            <b>Size:</b> 50 m <sup>2</sup>
          </span>
        </div>
        <div className="roomList">
          <div className="roomServices">
            <h2>~ Hotel Services</h2>
            <li>Free WiFI</li>
            <li>Swimming Pool</li>
            <li>Air Conditioner</li>
            <li>Television</li>
            <li>Balcony</li>
            <li>Help & Support</li>
          </div>
          <div className="roomAddOn">
            <h2>~ Add Ons</h2>
            <div>
              <span>
                <input type="checkbox" name="book" id="" />
                <label htmlFor="miniBar">Book A Taxi</label>
              </span>
              <p>&#8377;400</p>
            </div>
            <div>
              <span>
                <input type="checkbox" name="spa" id="" />
                <label htmlFor="spa">Spa</label>
              </span>
              <p>&#8377;500</p>
            </div>
            <div>
              <span>
                <input type="checkbox" name="miniBar" id="" />
                <label htmlFor="miniBar">Mini Bar</label>
              </span>
              <p>&#8377;1200</p>
            </div>
            <div>
              <span>
                <input type="checkbox" name="breakfast" id="" />
                <label htmlFor="miniBar">Breakfast</label>
              </span>
              <p>&#8377;900</p>
            </div>
            <div>
              <span>
                <input type="checkbox" name="specialDinner" id="" />
                <label htmlFor="miniBar">Book A Special Dinner</label>
              </span>
              <p>&#8377;2000</p>
            </div>
          </div>
        </div>
        <div className="totalPrice">
        <span><p className="booked">Your Room has been Booked🎊</p></span>
            <span>&#8377;3999</span>
            <span><button onClick={Booked} className="bookBtn">Book Now</button></span>
        </div>
      </div>
    </>
  );
};

export default SuperDelux;
