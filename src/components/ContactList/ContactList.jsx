import React from 'react'
import { useSelector } from 'react-redux'
import { Contact } from '../Contact/Contact' 
import {selectFilteredContacts} from '../../redux/contacts/slice'
import css from './ContactList.module.css'

export const ContactList = () => {

  const filteredContacts = useSelector(selectFilteredContacts)

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({id, name, number})=>
        <li key={id} className={css.listItem}>
          <Contact name={name} number={number} id={id}/>
        </li>
        )}
    </ul>
  )
}