import React from 'react';
import Grad from '../Images/Grad.jpg'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function Academics() {
  return (
    <div>
        <img src={Grad} className='banner-img'/>

        <div class="dropdown">
  <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{borderStyle: "none", backgroundColor: "inherit", color:"#007bff", fontSize: "16px", fontWeight: "500"}}>
    About Us
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link class="dropdown-item" to="/history">History</Link>
    <Link class="dropdown-item" to="/vision">Vision</Link>
    <Link class="dropdown-item" to="/mission">Mission</Link>
    <Link class="dropdown-item" to="/message">Principal's Message</Link>
    <Link class="dropdown-item" to="/infra">Infrastructure and Facilities</Link>

</div>  
  </div>
    </div>
  )
}

export default Academics