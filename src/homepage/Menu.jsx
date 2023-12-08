import React from 'react'
import Subtitle from "./Subtitle" 
import images from '../constants/images';
import data from "../constants/data"


const Menu = () => {
  return (
    <div className='main-menu-container'> 
    <div className='today-special-heading'>
    <Subtitle title={"Menu that fits you palatte"}/>
   
    <h2 >Today’s Special</h2>
    </div>
    <div className='menu'>
    <div className='wine-and-bear'>
      <div>
      <h1>Wine & Beer</h1><br />
      </div>
      {data.wines.map((wines,index)=>(
        <>

        <div key={index} className='wines'>

<div><p>{wines.title}</p>
<small>{wines.tags}</small>
</div>

<div className='dash'>
</div>

<div><p>{wines.price}</p>
</div>
</div>
<br /><br /></>
      ))}
      


    </div>
    <div className='menu-img'> <img src={images.menu} alt="" /></div>
    <div className='wine-and-bear'>
    <div>
    <h1>Cocktails</h1><br />
      </div>
      
      {data.cocktails.map((cocktails,index)=>(
      <>  <div key={index} className='wines'>

<div><p>{cocktails.title}</p>

</div>


<div className='dash'>
</div>

<div><p>{cocktails.price}</p>
</div>
</div><small className='wines'>{cocktails.tags}</small> <br /><br /></>
      ))}
      
      </div>
      
      </div>
      <div style={{marginTop:"30px",textAlign:"center"}}>
  <button className='custom__button'>View More</button>
</div>

    </div>
  

  
  
  )
}

export default Menu