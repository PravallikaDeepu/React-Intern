import React from 'react'
import SportsDay from '../Images/SportsDay.jpg';
import cultural from '../Images/Cultural fest.jpg';
import Science from '../Images/Science.jpg';
import room from '../Images/Classroom.jpg';
import library from '../Images/Library.jpg'
import '../style/style.css'

function Gallery() {
  return (
    <div>
        <div>
        <h4 style={{marginTop: "50px", fontSize:" 32px"}} className='head'>Photo</h4>
    <div style={{display: "flex"}}>
        <div>
        <img src={SportsDay} alt='sports day' className='gallery-photo'/>
        <figcaption className='gallery-description'>Students participating in various sports events</figcaption>
        </div>

        <div>
        <img src={cultural} alt='cultural fest'  className='gallery-photo'/>
        <figcaption className='gallery-description'>Students performing in the cultural fest</figcaption>

        </div>
        <div>
        <img src={Science} alt='science exhibition' className='gallery-photo'/>
        <figcaption className='gallery-description'>Students presenting their science projects</figcaption>

        </div>
        <div>
        <img src={room} alt='Class Room' className='gallery-photo'/>
        <figcaption className='gallery-description'>A glimpse of our interactive classrooms.</figcaption>

        </div>
        <div>
        <img src={library} alt='Library' className='gallery-photo'/>
        <figcaption className='gallery-description'>Students reading and studying in the school library.</figcaption>

        </div>

    </div>
        </div>

        <div>
        <h4 style={{marginTop: "50px", fontSize:" 32px"}} className='head'>Video</h4>
        <iframe id="schoolVideo" title='schoolVideoTour' width="1500" height="515" src="https://www.youtube.com/embed/7izHBJRGf8c" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

        <div>

       
                <iframe id='schoolAnnual' title='school Annual day' width="1500" height="515" src="https://www.youtube.com/embed/l4S2AyC_rMg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{marginTop:"35px"}}></iframe>
                </div>
        </div>
        
    </div>
  )
}

export default Gallery