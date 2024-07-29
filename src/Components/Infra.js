import React from 'react'
import Sports from '../Images/Sport.jpg';
import Play from '../Images/play.jpg';
import Science from '../Images/Science.jpg'
import Class from '../Images/Classroom.jpg'
import Digital from '../Images/Digital.jpg'
import '../style/style.css'

function Infra() {
  return (
    <div style={{textAlign: "left",marginLeft: "35px"}}>
        <h3 style={{marginTop: "50px"}}  className='head'>Infrastructure and Facilities</h3>
    
  
  <ul style={{listStyleType: "square", listStyleColor: "blue"}} className='color'>
    <li>State-of-the-art science and computer labs</li>
    <li>Spacious and well-equipped classrooms</li>
    <li>Library with a vast collection of books and digital resources</li>
    <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
  </ul>
       <div style={{marginTop: "50px", display: "flex", border: "2px solid white"}} >
       <img src={Class} className='img-infra'/>
       <img src={Science} className='img-infra'/>
       
       <img src={Sports} className='img-infra'/>
       <img src={Play} className='img-infra'/>
      <img src={Digital} className='img-infra'/>
       
       </div>

           
        </div>
        
  )
}

export default Infra