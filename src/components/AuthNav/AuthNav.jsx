import React from 'react'
import css from './AuthNav.module.css'
import { NavLink } from 'react-router-dom'

export const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink 
      to='/registration'>
        Register
      </NavLink>
      <NavLink 
      to='/login'>
        Log In
      </NavLink>
    </div>
  )
}