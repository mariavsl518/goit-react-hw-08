import React from 'react'
import { selectUser } from '../../redux/auth/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../../redux/auth/operations'
import css from './UserMenu.module.css'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  
  const handleClick = () => {
    dispatch(logout())
  }

  return (
    <div className={css.userMenu}>
      <div className={css.navMenu}>
        <NavLink to='/' className={css.navlink}>
          Homepage
        </NavLink>
        <NavLink to='/contacts' className={css.navlink}>
          Contacts
        </NavLink>
      </div>

      <div className={css.welcomeLogout}>
        <h3>Welcome, {user.name}</h3>
        <button type='button' onClick={handleClick} 
        className={css.logoutBtn}>
          Logout
        </button>
      </div>

    </div>
  )
}