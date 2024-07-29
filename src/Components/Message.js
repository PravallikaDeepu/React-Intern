import React from 'react';
import Principal from '../Images/Principal.jpg'

function Message() {
  return (
    <div style={{gap: "1px", display: "grid", gridTemplateColumns: "500px 500px", margin: "70px 250px"}}>
        <div>
            <h3 style={{marginLeft: "-150px", fontSize: "24px"}}>Principal</h3>
        <img src={Principal} style={{width: "350px", borderRadius: "10px", height: "450px"}}/>
        <h5 style={{marginTop: "5px", marginLeft: "-150px", fontSize: "24px"}}>John Doe</h5>
        <p style={{marginTop: "-2px", marginLeft: "-150px", fontSize: "20px"}}>M.Ed</p>
        </div>
        <div style={{width: "500px", marginTop: "90px"}}>
            <h3 style={{fontSize: "30px"}} className='head'>Message</h3>
       <p style={{textAlign: "justify", marginTop: "30px", lineHeight: 2}}>
       I am John Doe, the Principal of Sprinsdale Public School. With over two decades of experience in educational leadership and an M.Ed., I am committed to fostering a holistic learning environment. My role involves guiding our school community towards academic excellence while nurturing students' growth and development. I believe in creating a supportive and inclusive atmosphere where every student can reach their full potential. My passion lies in empowering both students and faculty to achieve their goals, and I look forward to contributing to our school's continued success.
</p>
        </div>
     
    </div>
  )
}

export default Message