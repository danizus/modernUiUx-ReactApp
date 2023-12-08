import React from 'react'
import images from '../constants/images';
import Subtitle from './Subtitle';

const Header = () => {
  return (
    <div className='main-header-container'  id="home">
      <div className='headings-subheadings'>
       <Subtitle title={"Chase the new Flavour"}/>
       <h1>The key to Fine dining</h1>
       <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
       <button className='custom__button'>Explore</button>
      </div>
      <div className='img-container-welcome'>
        <img src={images.welcome} alt="" />
      </div>
    </div>
  )
}

export default Header