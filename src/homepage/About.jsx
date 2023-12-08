import React from 'react'
import images from '../constants/images'

const About = () => {
  return (
  <div className='main-about-container'>
    <div className="g-container">
        <img src={images.G} alt="" />
    </div>
    <div className='about-us'>
        <h1>About Us</h1>
        <img src={images.spoon} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className='custom__button'>Know More</button>
    </div>
    <div className='knife-img'>
        <img src={images.knife} alt="" />

    </div>
    <div className='our-history'>
    <h1>Our history</h1>
    <img src={images.spoon} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className='custom__button' >Know More</button>

    </div>





  </div>
  )
}

export default About