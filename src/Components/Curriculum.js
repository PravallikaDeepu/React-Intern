import React from 'react'
import Pencil from '../Images/Pencil.jpg'
function Curriculum() {
  return (
    <div>
        <img src={Pencil} className='banner-img'/>
        <div className='grid curriculum'>
            <div>
                <h3 className='description'>Primary School Curriculum (Grades 1-5)</h3>
                <p style={{marginLeft: "20px"}}>The CBSE (Central Board of Secondary Education) envisions a robust, vibrant and holistic school education that will engender excellence in every sphere of human endeavor. The Board commits itself to providing a stress-free learning environment that will develop competent, confident and enterprising citizens who will promote harmony and peace.

<p style={{marginTop: "10px"}}>The primary curriculum is based on the NCERT framework as per the CBSE syllabus. The subjects are:</p>
<ul style={{marginLeft: "40px"}}>
{/* English, Mathematics, Science, Social Studies, Art, Physical Education */}
    <li>English</li>
    <li>Mathematics</li>
    <li>Science</li>
    <li>Social Studies</li>
    <li>Art</li>
    <li>Physical Education</li>

</ul>
</p>
            </div>
            
            <div  >
                <h3 className='description'>Secondary School Curriculum (Grades 6-10)</h3>
                <p style={{marginRight: "20px"}}>For the purpose of fostering core competences in learners, the curriculum encompasses seven major learning areas, which are:  
{/* English, Mathematics, Science, Social Studies, Art, Physical Education */}
<ul>
    <li>English</li>
    <li>Mathematics</li>
    <li>Science (Physics, Chemistry, Biology),</li>
    <li>Social Studies</li>
    <li>Computer Science</li>
    <li>Physical Education</li>

</ul>
<p style={{marginTop: "15px"}}>
It refers to the content of learning, not the titles of subjects. Beyond the required core and elective courses, optional courses relevant to specific curriculum areas may also be made available in consideration of changing individual, societal and global requirements and demands.
</p>
                </p>
            </div>
        </div>

        <h3 style={{position: "relative", top: "100px"}} className='description font'>Senior Secondary (Grades 11-12):</h3>
        <div className='grid curriculum' style={{border: "5px solid #71D8BA", backgroundColor: "#D3F3EA"}}>
        
            <div>
                
                <h3 className='science description'>Science Stream</h3>
                <p style={{marginLeft: "30px"}}>The CBSE Senior Secondary curriculum for the Science stream provides a robust foundation in core scientific disciplines. Students typically study <b>Physics, Chemistry, Biology, and Mathematics</b> as compulsory subjects. These subjects form the bedrock for various scientific and technological pursuits. To complement the scientific acumen, <b>English</b> is included to enhance communication and language skills.

                <b>Computer Science</b> is often offered as an elective, providing students with exposure to the digital world and computational thinking. This combination of subjects equips students for a wide range of higher education and career options.</p>
            </div>
            <div  >
                <h3 className='science  description' style={{marginLeft: "-50px"}}>Commerce stream</h3>
        <p style={{marginRight: "30px"}}>The Commerce stream is designed to equip students with knowledge and skills related to business, trade, and economics. Core subjects typically include <b>Accountancy, Business Studies, and Economics</b>, providing a strong foundation in financial management, business operations, and economic principles. To complement these, English is a mandatory subject, fostering effective communication skills.

Students often opt for additional subjects like <b>Mathematics, Statistics, or Computer Science</b> to enhance their quantitative and analytical abilities. This combination of subjects prepares students for diverse career paths in the business world, including finance, management, marketing, and economics.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Curriculum