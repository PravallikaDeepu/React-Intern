import React from 'react'

function Faculty() {
  return (
    <div>
      <h1 className='faculty'>FACULTY</h1>
      <table class="table table-bordered table-hover" style={{width: "900px", margin: "50px 80px", backgroundColor: "#FFF6F6"}}>
  <thead>
    <tr style={{backgroundColor: "#F3D7CA", color:"#632626", fontSize:"18px"}} className='thead table-hover'>
      <th scope="col">S.NO</th>
      <th scope="col">Designation</th>
      <th scope="col">Name of the faculty</th>
      <th scope="col">Qualification</th>
      <th scope='col'>Experience</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mr.John Doe</td>
      <td>Principal</td>
      <td>M.Ed</td>
      <td>20 Years</td>
    </tr>

    <tr>
      <th scope="row">2</th>
      <td>Mr.Jane Smith</td>
      <td>Vice Principal</td>
      <td>M.Sc. in Physics</td>
      <td>15 Years</td>
    </tr>

    <tr>
      <th scope="row">2</th>
      <td>Mr.Emily Johnson</td>
      <td>English Teacher</td>
      <td>M.A. in English</td>
      <td>10 Years</td>
    </tr>

    <tr>
      <th scope="row">2</th>
      <td>Mr.Michael Brown</td>
      <td>Mathematics Teacher</td>
      <td>M.Sc. in Mathematics</td>
      <td>8 Years</td>
    </tr>

    <tr>
      <th scope="row">2</th>
      <td>Mr.Sophia Davis</td>
      <td>Science Teacher</td>
      <td>M.Sc. in Chemistry</td>
      <td>12 Years</td>
    </tr>

    <tr>
      <th scope="row">2</th>
      <td>Mr.David Wilson</td>
      <td> Computer Science Teacher</td>
      <td>B.Tech in Computer Science</td>
      <td>5 Years</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Faculty