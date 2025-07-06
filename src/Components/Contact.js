import React from 'react'
import location from '../Images/location.png';
import call from '../Images/call.png';
import Mail from '../Images/Mail.png'
import { useState } from 'react';
import Axios from 'axios'

function Contact() {
    const API_BASE_URL = process.env.REACT_BACKEND_URL ||"http://localhost:4001"
    const [myName,setmyName] = useState("")
    const [myEmail,setmyEmail] = useState("")
    const [myMessage,setmyMessage] = useState("")
    function handleName(e)
    {
        setmyName(e.target.value)
    }

    function handleEmail(e)
    {
        setmyEmail(e.target.value)
    }
    function handleText(e)
    {
         setmyMessage(e.target.value)
    }
async function handleSubmit(e)
    {
        const data={
            name: myName,
            email:myEmail,
            message:myMessage
        }
try{
        await Axios.post(`${API_BASE_URL}/contact`, data)
}
catch(e){
    console.log(e)
}
        
    }

  return (
    <div style={{display: "grid", gridTemplateColumns: "50px 50px", gap:"750px", marginTop: "150px", marginLeft:"150px", marginRight:"150px"}}>
        {/* Address: "Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code"
Phone: "+1 (123) 456-7890"
Email: "info@springdale.edu" #17a48b*/}
<div style={{backgroundColor:"#E7FBBE", boxShadow: "0 0 30px #bfcdbf", width: "450px", height: "350px", marginTop: "35px"}}>
    <h4 style={{marginLeft: "2px", marginBottom: "20px", marginTop: "20px"}} className='head'>Address</h4>
    <div style={{display: "flex", width: "500px" , marginTop: "45px"}}>
            <img src={location} style={{width: "30px", height: "30px", marginRight: "5px", marginLeft: "25px"}} alt='school-logo'/>
    <p style={{width: "350px", fontWeight: 500, textAlign: "justify", lineHeight:1.8}}>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
    <hr style={{borderBottom: "1px dotted #45b662", width: "350px", marginLeft: "-380px", marginTop: "70px"}}/>
    </div>


    <div style={{display: "flex", width: "500px", paddingTop: "7px"}}>
        <img src={call} style={{width: "30px", height: "30px", marginRight: "5px", marginLeft: "25px", marginTop: "20px", marginBottom:"20px"}} alt='phone-logo'/>
        <p style={{fontWeight:"500", marginTop: "20px", marginBottom:"20px"}}>+1 (123) 456-7890</p>
        <hr style={{borderBottom: "1px dotted #45b662", width: "350px", marginLeft: "-160px", marginTop: "60px"}}/>
    </div>
   
    <div style={{display: "flex", width: "500px", paddingTop: "7px"}}>
    <img src={Mail} style={{width: "30px", height: "30px", marginRight: "5px", marginLeft: "25px", marginTop: "20px", marginBottom:"20px"}} alt='email'/>
    <p style={{fontWeight:"500", marginTop: "25px", marginLeft: "15px"}}>info@springdale.edu</p>
</div>
</div>
<div>


    <form method='post' style={{width: "450px", height: "450px", border: "10px solid #03AED2", marginLeft: "-150px", padding: "35px", backgroundColor:"#D2E9E9", borderRadius: "40px", fontSize: "20px", boxShadow: "0 0 30px #bfcdbf"}} action="http://localhost:4001/contact">
        <h5 style={{marginBottom: "20px", fontSize: "30px", fontWeight: "700"}}>Contact Us</h5>
        Name: <input required type='text' onChange={handleName} name='myName'/><br/><br/>
        Email: <input required type='email' onChange={handleEmail} name='myEmail'/><br/><br/>
        Message:<br></br> 
        <textarea className='text' type='text' name='myMessage' onChange={handleText} required></textarea>
        <br/>
        <button onClick={handleSubmit} className='btn btn-success'>SUBMIT</button>
    </form>
</div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.7260875213988!2d79.01644348049928!3d26.784999916706763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3975e078e85c0581%3A0xd51414d7d75eb2c6!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sin!4v1722081996672!5m2!1sen!2sin" width="1350" height="600" style={{border:0, marginTop: "-580px", marginLeft: "-50px"}} allowfullscreen="" title="google map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.7260875213988!2d79.01644348049928!3d26.784999916706763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3975e078e85c0581%3A0xd51414d7d75eb2c6!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sin!4v1722081996672!5m2!1sen!2sin" width="1350" height="600" style={{border:0, marginTop: "-100px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>   */}

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.7260875213988!2d79.01644348049928!3d26.784999916706763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3975e078e85c0581%3A0xd51414d7d75eb2c6!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sin!4v1722079526158!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    */}
</div> 
  )
}

export default Contact