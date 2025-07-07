import React from 'react'
import President from '../Images/12th standard.jpg';
import VicePresident from '../Images/Amy Parker.jpg'
import Secretary from '../Images/Lisawong.jpg'

function Students() {
  return (
    <div style={{ margin: "20px 10px"}}>
        <h4 className='student-heading margin head'>Life at Springdale:</h4>
        <p className='student-sub-heading' style={{lineHeight:2}}>At Springdales, education is looked upon as holistic learning experience to help children to develop qualities of head, hand and heart which will make them self-reliant individuals and fine human beings, socially aware, compassionate and kind, having pride in their country. People who are ready to work as agencies of change for building a more socially just and equitable society.

We endeavor to sow the seeds of acceptance, collaboration and empathy that will help students to deal with the challenges they face as adults. We believe that learning takes place in a variety of ways- in the community, through peers, information technology, media, literacy, life skills and well-being initiatives.</p>
<p className='student-sub-heading'style={{lineHeight:2}}>
We have opened up our learning spaces in innovative ways that seamlessly link the school with the world outside. This will help to connect the global with localized communities enabling a vision that will be based on collective good and shared interests. Affirmative action holds the power of equity, empowerment and opportunity.</p>
<h4 className='student-heading head'>Extracurricular Activities:</h4>
<p className='student-sub-heading arrange'> Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club</p>
<h4 className='student-heading'style={{lineHeight:2}}><b>Clubs and Societies: </b></h4>
<p className='student-sub-heading arrange' style={{lineHeight:2}}>Literary Society, Environmental Club, Astronomy Club, Coding Club</p>
<h2 style={{fontWeight: "700", textAlign: "left", marginTop: "20px", marginLeft: "20px"}} className='head'>Achievements</h2>
<ul className='student-heading' style={{marginTop: "10px", lineHeight: 2}} >
    <li><b>John Smith</b> - National Level Math Olympiad Winner</li>
    <li><b>Sarah Lee</b> - Gold Medalist in State Swimming Championship</li>
    <li><b>Tech Innovators Club</b> - Winners of Inter-School Robotics Competition</li>

</ul>


<h2 style={{fontWeight: "700", marginLeft: "20px"}} className='head'>Student Council:</h2>

<div className='student-council-img' >
<div>
<img src={President} className='student-council' alt='president'/>
        <figcaption className='name-props'>
            <h5 className='name'>Amy Parser</h5>
            <p className='grade'>Grade 12</p>
        </figcaption>

        
</div>
<div >
<img src={VicePresident} className='student-council' alt='Rajiv Mehta'/>
        <figcaption className='name-props'>
            <h5  className='name'>Rajiv Mehta</h5>
            <p className='grade'>Grade 11</p>
        </figcaption>
</div>
<div>
<img src={Secretary} className='student-council' alt='lisa wong'/>
        <figcaption className='name-props'>
            <h5  className='name'>Lisa Wong</h5>
            <p className='grade'>Grade 10</p>
        </figcaption>
</div>
</div>
 
</div>
    
  )
}

export default Students