import React, { useState } from 'react';
import Axios from 'axios'

function AdmissionOnline() {
    const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:4001"
    const [myFirst, setMyFirst] = useState("")
    const [myLast, setMyLast] = useState("")
    const [myDob, setMyDob] = useState("")
    const [myGender, setMyGender] = useState("")
    const [myClass, setMyClass] = useState("")
    const [myPercentage, setMyPercentage] = useState("")
    const [phone, setPhone] = useState("")
    const [myFather, setMyFather] = useState("")
    const [myEmail,setMyEmail] = useState("")

   async function handleSubmit(e)
    {
        e.preventDefault()
        const data = {
            myFirst,myLast,myDob,myGender,myClass,myPercentage,phone,myFather,myEmail
        }
        const res = await Axios.post(`${API_URL}/admission/form`,data)
        
        try{
alert(res.data.message)
setMyFirst("")
setMyLast("")
setMyClass("")
setMyDob("")
setMyEmail("")
setMyGender("")
setMyFather("")
setMyPercentage("")
window.location = "/"
        }
        catch(e)
        {
            console.log(e)
        }

    }

    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div
                    className="form-container shadow p-4 rounded bg-white"
                    style={{ minWidth: "400px", maxWidth: "500px", width: "100%", color: "#090040" }}
                >
                    <h1 className="text-center mb-4 form-title" style={{ fontSize: "35px", color: "#273F4F" }}>Online Admission Form</h1>
                    <form method="post" onSubmit={handleSubmit}>
                        {/* Student Name */}
                        <div class="row">
                            <div class="col">
                                <label>First Name</label>
                                <input type="text" class="form-control" placeholder="First name" aria-label="First name" onChange={(e) => {
                                    setMyFirst(e.target.value)}} />
                            </div>
                            <div class="col">
                                <label>Last Name</label>
                                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"  onChange={(e)=>{setMyLast(e.target.value)}}/>
                            </div>
                        </div>

                        {/* Date of Birth */}
                        <div className="mb-3">
                            <label className="form-label">Date of Birth</label>
                            <input
                                type="date"
                                className="form-control"
                                name="dob"
                                onChange={(e)=>{setMyDob(e.target.value)}}
                                required
                            />
                        </div>

                        {/*Gender*/}
                        <div className='mb-3'>
                            <label className="form-label">Gender</label>
                            <select className="form-select" style={{ marginLeft: "10px", width: "150px", border: "1px solid #748873", borderRadius: "25px 25px" }} onChange={(e)=>{setMyGender(e.target.value)}}>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        {/* Class Selection */}
                        <div className="mb-3">
                            <label className="form-label">Class he/she is enrolling into</label>
                            <select className="form-select" name="classEnrolled" style={{ marginLeft: "10px", width: "150px", border: "1px solid #748873", borderRadius: "25px 25px" }} onChange={(e)=>{setMyClass(e.target.value)}} required>
                                <option value="">Select options...</option>
                                <option value="Pre-K">Pre-K</option>
                                <option value="JK">Junior Kindergarten (JK)</option>
                                <option value="SK">Senior Kindergarten (SK)</option>
                                <option value="Grade 1">Grade 1</option>
                                <option value="Grade 2">Grade 2</option>
                                <option value="Grade 3">Grade 3</option>
                                <option value="Grade 4">Grade 4</option>
                                <option value="Grade 5">Grade 5</option>
                                <option value="Grade 6">Grade 6</option>
                                <option value="Grade 7">Grade 7</option>
                                <option value="Grade 8">Grade 8</option>
                                <option value="Grade 9">Grade 9</option>
                                <option value="Grade 10">Grade 10</option>
                                <option value="Grade 11">Grade 11</option>
                                <option value="Grade 12">Grade 12</option>
                            </select>
                        </div>

                        {/* Previous Percentage */}
                        <div className="mb-3">
                            <label className="form-label">Previous Class Percentage</label>
                            <input
                                type="number"
                                min="0"
                                max="100"
                                step="0.1"
                                className="form-control"
                                placeholder="Last year percentage"
                                name="percentage"
                                onChange={(e)=>{setMyPercentage(e.target.value)}}
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="mb-3">
                            <label className="form-label">Phone No</label>
                            <input
                                type="tel"
                                className="form-control"
                                placeholder="Enter Phone No *"
                                pattern="[0-9]{10}"
                                name="myNumber"
                                onChange={(e)=>{setPhone(e.target.value)}}
                                required
                            />
                        </div>

                        {/* Email*/ }
                         <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Email"
                                onChange={(e)=>{setMyEmail(e.target.value)}}
                                required
                            />
                        </div>

                        {/* Father's Name */}
                        <div className="mb-3">
                            <label className="form-label">Father's Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Father's name"
                                name="myFatherName"
                                onChange={(e)=>{setMyFather(e.target.value)}}
                                required
                            />
                        </div>

                        {/* Consent */}
                        <div className="form-check mb-3">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="tick"
                                required
                            />
                            <label className="form-check-label small">
                                I authorize Bloomingdale International School and its
                                representatives to contact me via Calls, SMS, WhatsApp, or Email.
                                This overrides any registry on DND/NDNC.
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-success w-100">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdmissionOnline;
