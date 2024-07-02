import React, { useRef } from 'react'
import css from './AuthNav.module.css'
import { NavLink } from 'react-router-dom'

export const AuthNav = () => {

  return (
    <div className={css.authNav}>
      <NavLink 
      className={css.navLink}
      to='/registration'>
        Register
      </NavLink>
      <NavLink 
      className={css.navLink}
      to='/login'>
        Log In
      </NavLink>
    </div>
  )
}