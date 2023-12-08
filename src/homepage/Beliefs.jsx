import React from 'react'
import images from '../constants/images'
import Subtitle from './Subtitle'

const Beliefs = () => {
  return (
    <div className='main-belief'>
        <div className='chef'>
            <img src={images.chef} alt="" />


        </div>
        <div className='what-we-believe'>
            <Subtitle title={"Chef’s Word"}/>
            <h1>What we believe in</h1>
            <p className='quotes' ><img  src={images.quote} alt="" />Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
            <p>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
            <div className='Founder'>
                <p>Kevin Luo</p><br />
                <small>Chef & Founder</small>
            </div>
            <div className='sign'>
                <img src={images.sign} alt="" />
            </div>


        </div>

    </div>
  )
}

export default Beliefs