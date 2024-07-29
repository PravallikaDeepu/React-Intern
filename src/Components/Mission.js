import React from 'react'
import Learning from '../Images/Learning.jpg';
import Library from '../Images/Library.jpg'

function Mission() {
  return (
    <div>
    <img src={Library} className='banner-img' />

    <div className='grid-2 grid'>
        <div>

            <img src={Learning} style={{width: "450px", marginTop:"100px", height: "400px", borderRadius: "15px"}}/> 
        </div>
        <div style={{marginTop: "110px", marginBottom: "40px"}}>
            <h3 style={{marginLeft: "-280px", marginBottom: "20px"}} className='head'>Mission</h3>
            <p style={{textAlign: "justify", marginBottom: "5px", width: "500px", marginLeft: "-50px",lineHeight: 1.8}}> To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
            </p> 
            
            <p style={{textAlign: "justify", marginBottom: "40px", width: "450px", marginLeft: "-50px"}}>Leading in educational excellence, Springdale Public Schools ensures a safe and inclusive environment empowering a community of learners.</p>
        </div>
    </div>

    </div>
  )
}

export default Mission