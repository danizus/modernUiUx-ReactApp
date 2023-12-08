import React from 'react';
import images from '../constants/images';

const Subtitle = ({title}) => {
  return (
    <div className='subtitle-container'>
        <p>{title}</p>
        <img src={images.spoon} alt="" />
    </div>
  )
}

export default Subtitle