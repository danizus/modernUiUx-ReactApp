import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../constants/images';


const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false)
  return (
  <nav className='nav-container'>
    <div className='nav-logo'>
        <img src={images.gericht} alt="" />
    </div>
    <ul className='nav-links'>
        <li className='nav-links-each p__opensans'><a href='#home'>Home</a></li>
        <li className='nav-links-each p__opensans'><a href='#Pages'>Pages</a></li>
        <li className='nav-links-each p__opensans'><a href='#Blog'>Blog</a></li>
        <li className='nav-links-each p__opensans' ><a href='#Landing'>Landing</a></li>
        
       
       

    </ul>

    <div className='login-resgister'>
   <a href="#login" className='p__opensans'>Login / register</a>
      <div></div>
        
        <a href="#Registration" className='p__opensans'>book a table</a>

    </div>
    <div className='navbar-small-screen'>
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=>{setToggleMenu(!toggleMenu)}}/>

      <div className='navbar-smallscreen-overlay slide-bottom flex-center' style={toggleMenu?{display:'flex'}:{display:"none"}}> 
      <MdOutlineRestaurantMenu fontSize={27} className='overlay-close ' onClick={()=>{setToggleMenu(!toggleMenu)}}/>
      <ul className='nav-links-small-screen'>
        <li className='nav-links-each p__opensans'><a href='#home'>Home</a></li>
        <li className='nav-links-each p__opensans'><a href='#Pages'>Pages</a></li>
        <li className='nav-links-each p__opensans'><a href='#Blog'>Blog</a></li>
        <li className='nav-links-each p__opensans' ><a href='#Landing'>Landing</a></li>
  

    </ul>
      </div>
     

    </div>

  </nav>
  )
}

export default Navbar