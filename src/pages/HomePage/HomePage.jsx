import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectUser } from '../../redux/auth/selectors'

export const HomePage = () => {
  const userName = useSelector(selectUser).name

  return (
    <div>
      Dear {userName}, this is your contacts manager app!
      <br />
      Please follow to the <Link to='/contacts'>Contacts</Link> page to get started.
    </div>
  )
}
