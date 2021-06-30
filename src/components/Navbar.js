import React, { useState } from 'react'
// import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll'

import img from '../utils/icons/menu.png'
import style from '../styles/Navbar.module.css'

function Navbar() {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  console.log(isActive)

  return (
    <nav className={style.nav}>
      <div className={style.navContainer}>
        <LinkScroll to='/' className={style.logo}>
          JB
        </LinkScroll>

        <div
          onClick={handleClick}
          className={`${style.btn} ${
            isActive ? style.burgerActive : style.notActive
          }`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul
          className={`${style.linkContainer}  
          ${isActive ? style.active : ''}`}
        >
          <li className={style.navItem}>
            <LinkScroll
              to='/'
              className={style.linkScroll}
              onClick={handleClick}
            >
              Home
            </LinkScroll>
          </li>
          <li className={style.navItem}>
            <LinkScroll
              to='about'
              className={style.linkScroll}
              onClick={handleClick}
            >
              About
            </LinkScroll>
          </li>
          <li className={style.navItem}>
            <LinkScroll
              to='projects'
              className={style.linkScroll}
              onClick={handleClick}
            >
              Projects
            </LinkScroll>
          </li>
          <li className={style.navItem}>
            <LinkScroll
              to='contact'
              className={style.linkScroll}
              onClick={handleClick}
            >
              Contact
            </LinkScroll>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
