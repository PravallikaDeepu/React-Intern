import React from 'react';
import { Link } from 'react-router-dom';

function Admissions() {

  return (
    <div style={{ border: "3px solid blue", width: "600px", margin: "120px auto", padding: "35px", textAlign: "justify"}}>
      <h5 style={{fontSize: "25px", fontWeight: 600}} className='head-process'>Process: </h5>
      <p style={{fontSize:"18px"}}>"Admission forms are available for download. Submit the completed form along with required documents at the school office."</p>
      <h5 style={{fontSize: "25px", fontWeight: 600}} className='head-process'>Criteria</h5>
      <p style={{fontSize:"18px"}}>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
      <h5 style={{fontSize: "25px", fontWeight: 600, marginBottom: "15px"}} className='head-process'>Important Dates:</h5>
<ul style={{fontSize:"18px"}}>
  <li style={{listStyleType: "circle"}}>Admission Form Availability: March 1st</li>
<li style={{listStyleType: "circle"}}>Last Date for Submission: March 31st</li>
<li style={{listStyleType: "circle"}}>Entrance Test: April 15th</li>
<li style={{listStyleType: "circle"}}>Announcement of Results: April 30th</li>
</ul>
<a class="btn btn-warning" href='admissionform.html' role="button" style={{marginTop: "20px"}}>Application Form(Offline)</a>
    <Link to='/admission/form' className='btn btn-primary'  style={{marginTop: "20px", marginLeft: "100px"}}>Application Form(Online)</Link>
    </div>
  )
}

export default Admissions