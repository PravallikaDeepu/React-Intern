import React from 'react'
import image1 from '../Images/SportsDay.jpg';
import image2 from '../Images/science.jpeg';
import school from '../Images/school.jpg'
import Cultural from '../Images/Cultural fest.jpg'
import '../style/style.css'

function Card() {
  return (
    <div style={{ marginTop: "5px", height: "100px" }}>
      <div className='grid home'>
        <div style={{width: "500px"}}>
          <p style={{fontWeight: 700, fontSize: "25px", textAlign: "justify", marginLeft: "15px", marginRight: "15px",marginTop:"25px" }}> "Welcome to Springdale Public School, where we nurture young minds for a brighter future."</p>
          <p style={{fontSize: "15px", margin: "30px 20px 0px 20px", textAlign: "justify" }}>We are a part of XYZ Education Society, which has a strong presence on the education map of Pune. The Trust has been associated with Management education since 1994. The school segment has been operational since 2004.</p>

          <p style={{fontSize: "15px", margin: "10px 20px 0px 20px", textAlign: "justify" }}>Today we are a full fledged CBSE affiliated school with student strength 3821 and a total staff of 267 . We are committed to excellence in education from KG to PG.</p>


        </div>
        <div>
          <img  src={school} alt='school building' style={{width: "750px", height: "350px", marginTop: "30px" , borderRadius: "50px"}} />
        </div>
      </div>

      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={image1} alt="First slide" style={{ height: "700px" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ fontSize: "50px", fontWeight: "bold", color: "Blue" }}>Annual Sports Day - Celebrating Excellence in Sports</h5>
            </div>
          </div>
          
          <div className="carousel-item">
            <img className="d-block w-100" src={Cultural} alt="Second slide" style={{ height: "700px" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ fontSize: "50px", fontWeight: "bold", color: "Blue" }}>Cultural Fest - Embracing Diversity and Creativity</h5>
            </div>
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src={image2} alt="Second slide" style={{ height: "700px" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ fontSize: "50px", fontWeight: "bold", color: "Blue" }}>Science Exhibition - Showcasing Student Innovations</h5>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Card
