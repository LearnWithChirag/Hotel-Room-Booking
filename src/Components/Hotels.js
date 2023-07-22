import React from 'react';
import '../CSS/Hotel.css';
import prev from '../Images/prev3.avif';
import prev2 from '../Images/prev2.avif';
import prev3 from '../Images/prev4.avif';
import Navbar from './Navbar';

const Hotels = () => {
  return (
 <>
 <Navbar />
        <span className="hotelHead">
            <h1>Our Hotels</h1>
        </span>
    <div className='hotelContainer'>
        

        <Cards 
        hotelImage={prev} 
        hotelName='A1 Palace' 
        location='Udaipur, Rajasthan'
        rating={4.5} />

        <Cards 
        hotelImage={prev2} 
        hotelName='B1 Palace' 
        location='Jaipur, Rajasthan'
        rating={4.5} />

        <Cards 
        hotelImage={prev3} 
        hotelName='C1 Palace' 
        location='Surat, Gujarat'
        rating={4.5} />
        
    </div>
    </>
  )
};

function Cards(props){
    return(
        
        <div className="card">
        
            <img src={props.hotelImage} alt="prev"  />
            <div className="content">
                <h2>{props.hotelName}</h2>
                <span>{props.location} </span>
                <p><span>{props.rating} </span>(245 ratings & 56 reviews)</p>
                
                <button><a href="/ourrooms">Check Rooms</a></button>
                
            </div>
        </div>
        
        )

}

export default Hotels;