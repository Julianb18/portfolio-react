import React, { useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

import img from '../utils/icons/menu.png';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  console.log(isActive);

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <LinkRouter className={styles.logo}>JB</LinkRouter>

        <div className={styles.icon} onClick={handleClick}>
          <img src={img} alt='' />
        </div>

        <ul
          className={`${styles.linkContainer}  
          ${isActive ? styles.active : ''}`}
        >
          <li className={styles.navItem}>
            <LinkScroll className={styles.linkScroll} to='/'>
              Home
            </LinkScroll>
          </li>
          <li className={styles.navItem}>
            <LinkScroll className={styles.linkScroll} to='/about'>
              About
            </LinkScroll>
          </li>
          <li className={styles.navItem}>
            <LinkScroll className={styles.linkScroll} to='/projects'>
              Projects
            </LinkScroll>
          </li>
          <li className={styles.navItem}>
            <LinkScroll className={styles.linkScroll} to='/contact'>
              Contact
            </LinkScroll>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
