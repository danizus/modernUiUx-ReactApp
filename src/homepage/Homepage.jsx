import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Menu from './Menu'
import About from './About'
import Beliefs from './Beliefs'
import Intro from './Intro'

const homepage = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <About/>
        <Menu/>
        <Beliefs/>
        <Intro/>
        </>
    
  )
}

export default homepage