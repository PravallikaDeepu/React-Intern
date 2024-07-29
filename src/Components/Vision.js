import React from 'react'

function Vision() {
  return (
    <div>
            <img src="https://spsranchi.com/images/s1.jpg"  className='banner-img' alt='banner-img'/>

            <div className='home grid'>
                <div>

                    <img src="http://d6vsczyu1rky0.cloudfront.net/32290_b/wp-content/uploads/2020/01/School-Vision.jpg" style={{width: "550px", marginTop:"100px", height: "400px", borderRadius: "15px"}} alt='vision-img'/>
                </div>
                <div style={{marginTop: "110px", marginBottom: "40px"}}>
                    <h3 style={{marginLeft: "-80px"}}  className='head'>Vision</h3>
                    <p style={{textAlign: "justify", marginBottom: "30px"}}> To create a learning environment that fosters academic excellence, critical thinking, and ethical values
                    </p>
                    <ul>
                        <li className='list'><span className='pencil'>✏️</span>We provide hands-on learning tools and encourage exploration and comprehension.</li>

                        <li  className='list'><span className='pencil'>✏️</span>Our nurturing environment makes learning enjoyable and integrates it into daily life.</li>
    
                        <li className='list'><span className='pencil'>✏️</span>We empower children to develop learning skills, foster motor skills, and enhance communication through diverse activities.</li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Vision