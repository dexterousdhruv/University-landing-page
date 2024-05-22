import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menuIcon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false)
    })
  }, [sticky])
  
  const toggleMenu = () => {
    setShowMenu(prev => !prev)
  }

  

  return (
    <nav className={`container ${sticky? "dark-nav" : ''}`} >
      <img src={logo} alt="University logo" className='logo' />
      <ul className={` ${showMenu ? '' : 'hide-mobile-menu'}`}>
        <li><a href="">Home</a></li>
        <li><a href="">Programs</a></li>
        <li><a href="">About us</a></li>
        <li><a href="">Campus</a></li>
        <li><a href="">Testimonials</a></li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
      <img src={menuIcon} className='menu-icon' onClick={toggleMenu} alt="menu icon" />
     </nav>
  )
}

export default Navbar