import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Card';
import History from './History';
import Vision from './Vision';
import Mission from './Mission';
import Message from './Message';
import Infra from './Infra'
import Academics from './Academics';
import Curriculum from './Curriculum';
import Methodology from './Methodology';
import Resources from './Resources'
import '../style/style.css'
import Admissions from './Admissions';
import Faculty from './Faculty';
import Students from './Students';
import Gallery from './Gallery';
import Contact from './Contact';


function Header() {
  return (
    <BrowserRouter>
    <div style={{ display: "flex", marginTop: "30px" }}>
      <div style={{ display: "flex" }}>
        <img src='https://tse3.mm.bing.net/th?id=OIP.hcS9B6u-dDsoDmdtd9caZwHaHa&pid=Api&P=0&h=180' style={{ width: "75px", height: "75px" }} alt="logo" />
        <h1 style={{ fontSize: "33px", textTransform: "uppercase", marginTop: "20px", fontWeight: "800", color: "#850F8D" }}>Springdale Public School</h1>
        <img/>
      </div>
     
        <div className='side'>
          <Link to="/home"  className='link-name'>Home</Link>
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
          

<div class="dropdown">
  <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{borderStyle: "none", backgroundColor: "inherit", color:"#007bff", fontSize: "16px", fontWeight: "500"}}>
    Academics
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <Link class="dropdown-item" to="/curriculum">Academic Curriculum</Link>
    <Link class="dropdown-item" to="/methodology">Methodologies</Link>
    <Link class="dropdown-item" to="/resources">Educational Resources</Link>
    
    {/* <Link class="dropdown-item" to="/curriculum" className='link-name'>Academic Curriculum</Link>
    <Link class="dropdown-item" to="/methodology" className='link-name'>Methodologies</Link>
    <Link class="dropdown-item" to="/resources" className='link-name'>Educational Resources</Link> */}

  
  </div>
          </div>
          <Link to="/admissions" className='link-name'>Admissions</Link>
          <Link to="/faculty" className='link-name'>Faculty</Link>
          <Link to="/student" className='link-name'>Students</Link>
          <Link to="/gallery" className='link-name'>Gallery</Link>
          <Link to="/contact" className='link-name'>Contact Us</Link>
        </div>
        
      
    </div>
    <Routes>
      <Route path='home' element={<Home/>}></Route>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/history' element= {<History/>} />
          <Route path='/vision' element={<Vision/>}/>
          <Route path='/mission' element={<Mission/>}/>
          <Route path='/message' element={<Message/>}/>
          <Route path='/infra' element={<Infra/>}/>
          <Route path='/academics' element= {<Academics/>}/>
          <Route path='/curriculum' element={<Curriculum/>}/>
          <Route path='/methodology' element={<Methodology/>}/>
          <Route path='/resources' element={<Resources/>}/>
          <Route path='/admissions' element={<Admissions/>}/>
          <Route path='/faculty' element={<Faculty/>}/>
         <Route path='/student' element={<Students/>}/>
         <Route path='/gallery' element={<Gallery/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default Header;
