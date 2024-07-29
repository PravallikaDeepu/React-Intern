import React from 'react';
import Digital from '../Images/Digital.jpg'

function Resources() {
  return (
    <div>
        <img src={Digital} className='banner-img' alt='digital-library'/>
        <p style={{fontSize: "32px", fontWeight: 800}} className='head'> Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
    </div>
  )
}

export default Resources