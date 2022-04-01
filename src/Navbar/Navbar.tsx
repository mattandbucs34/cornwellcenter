import React, { RefObject } from 'react'
import './navbar.css';
import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom'

type NavbarType = {
  navRef: RefObject<HTMLElement>
}

const Navbar = ({navRef}: NavbarType) => {
  return (
    <nav ref={navRef} className={styles.navbar}>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/therapists'}>Meet our Therapists</NavLink></li>
        <li><NavLink to={'/specialties'}>Specialty Areas</NavLink></li>
        <li><NavLink to={'/careers'}>Career Opportunities</NavLink></li>
        <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar