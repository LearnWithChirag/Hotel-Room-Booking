import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import OurRooms from './Components/OurRooms';
import Facilities from './Components/Facilities';
import Login from './Components/Login';
import Register from './Components/Register';
import Hotels from './Components/Hotels';
import Delux from './Components/Delux';
import SuperDelux from './Components/SuperDelux';
import Hall from './Components/Hall';
import About from './Components/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/homepage' element={<HomePage />} >
        </Route>
          
      </Routes>
      <Routes>
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/about' element={<About /> } />
        <Route path='/ourrooms' element={<OurRooms />} /> 
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/delux' element={<Delux />} />
        <Route path='/superdelux' element={<SuperDelux />} />
        <Route path='/hall' element={<Hall />} /> 
      </Routes>
      {/* <Hotels /> */}
      
      </BrowserRouter>
    </div>
  );
}

export default App;
