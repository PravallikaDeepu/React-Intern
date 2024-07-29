import React from 'react';
import Grad from '../Images/Grad.jpg'
import { Link } from 'react-router-dom';

function Academics() {
  return (
    <div>
        <img src={Grad} className='banner-img' alt='academic-banner'/>

        <div className="dropdown">
  <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{borderStyle: "none", backgroundColor: "inherit", color:"#007bff", fontSize: "16px", fontWeight: "500"}}>
    About Us
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link className="dropdown-item" to="/history">History</Link>
    <Link className="dropdown-item" to="/vision">Vision</Link>
    <Link className="dropdown-item" to="/mission">Mission</Link>
    <Link className="dropdown-item" to="/message">Principal's Message</Link>
    <Link className="dropdown-item" to="/infra">Infrastructure and Facilities</Link>

</div>  
  </div>
    </div>
  )
}

export default Academics