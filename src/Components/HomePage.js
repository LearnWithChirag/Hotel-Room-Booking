import React from "react";
import "../CSS/Navbar.css";
import "../CSS/HomePage.css";
import Navbar from "./Navbar";

const HomePage = () => {

  return (
    <>
      <Navbar />
      
      <div class="main">
        {/* <div class="booking">
          <div class="head">
            <h3>Check Booking Availability</h3>
          </div>
          <div class="fieldsContainer">
            <div class="fields">
              <label for="checkIn">Check In:</label>
              <input type="date" name="checkIn" id="" />
            </div>
            <div class="fields">
              <label for="checkIn">Check Out:</label>
              <input type="date" name="checkOut" id="" />
            </div>
            <div class="fields">
              <label for="adult">Adult:</label>
              <select name="adult" id="adult">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div class="fields">
              <label for="children">Children:</label>
              <select name="children" id="children">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div class="fields submitBtn">
                <a href="/hotels">

              <input type="button" value="Submit" />
                </a>
            </div>
          </div>
        </div> */}
      </div>

      {/* <Outlet /> */}
    </>
  );
};

export default HomePage;
