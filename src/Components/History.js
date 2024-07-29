import React from 'react';
import girlstudying from '../Images/girlstudying.jpg'
import '../style/style.css'

function History() {
    return (
        <div>
            <img src="https://springdale.peelschools.org/images/b82d5de2-8621-4a01-9259-2a45f8789911" className='banner-img' alt='banner-img'/>

            <div className='home grid' >
                <div>

                    <img src={girlstudying} className='history-img' alt='history-img'/>
                </div>
                <div style={{marginTop: "40px", marginBottom: "40px"}}>
                    <h3 className='head'>History</h3>
                    <p style={{textAlign: "justify", marginBottom: "250px", lineHeight: 2}}> Founded in 1994, Springdale Public School has been dedicated to providing quality education and holistic development to students.
                    Springdale Public School was established by the XYZ Foundation, a registered, not-for-profit organization that professionally manages the school. </p>
                    <p style={{marginTop: "5px"}}>Springdale Public School, one of the top schools in Vadodara, stands on a 20-acre site, with beautiful and pleasant landscapes in and around the premises of the school, surrounded with lush greenery all over, and is equipped with environment and child-friendly architecture, which is age-appropriate and suitable to the needs of the child. 
                         The school strives to be one of the top schools in Gujarat, and with this thought in mind, Springdale Public School focuses on the all-round development of the child in academics, activities, and sports.
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default History