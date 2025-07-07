import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


function Header() {
  return (
    
    <div style={{ display: "flex", marginTop: "30px" }}>
      <div style={{ display: "flex" }}>
        <img src='https://tse3.mm.bing.net/th?id=OIP.hcS9B6u-dDsoDmdtd9caZwHaHa&pid=Api&P=0&h=180' style={{ width: "75px", height: "75px" }} alt="logo" />
        <h1 style={{ fontSize: "33px", textTransform: "uppercase", marginTop: "20px", fontWeight: "800", color: "#850F8D" }}>Springdale Public School</h1>
        
      </div>
     
        <div className='side'>
          
        <Link to="/"  className='link-name'>Home</Link>
          <div className="dropdown">
  <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{borderStyle: "none", backgroundColor: "inherit", color:"#007bff", fontSize: "16px", fontWeight: "500"}}>
    About Us
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link className="dropdown-item" to="/history/">History</Link>
    <Link className="dropdown-item" to="/vision/">Vision</Link>
    <Link className="dropdown-item" to="/mission/">Mission</Link>
    <Link className="dropdown-item" to="/message/">Principal's Message</Link>
    <Link className="dropdown-item" to="/infra/">Infrastructure and Facilities</Link>

  
  </div>
</div>
          

<div className="dropdown">
  <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{borderStyle: "none", backgroundColor: "inherit", color:"#007bff", fontSize: "16px", fontWeight: "500"}}>
    Academics
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <Link className="dropdown-item" to="/curriculum/">Academic Curriculum</Link>
    <Link className="dropdown-item" to="/methodology/">Methodologies</Link>
    <Link className="dropdown-item" to="/resources/">Educational Resources</Link>

  
  </div>
          </div>
          <Link to="/admissions" className='link-name'>Admissions</Link>
          <Link to="/faculty/" className='link-name'>Faculty</Link>
          <Link to="/student/" className='link-name'>Students</Link>
          <Link to="/gallery/" className='link-name'>Gallery</Link>
          <Link to="/contact/" className='link-name'>Contact Us</Link>
        </div>
        
      
    </div>
   
  )
}

export default Header;
