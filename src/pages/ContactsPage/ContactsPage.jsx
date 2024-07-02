import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchContacts } from '../../redux/contacts/operations'
import { ContactList } from '../../components/ContactList/ContactList'
import { ContactsForm } from '../../components/ContactsForm/ContactsForm'
import { SearchBox } from '../../components/SearchBox/SearchBox'


export const ContactsPage = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchContacts())
    },
    [dispatch])

  return (
    <div>
      <ContactsForm/>
      <SearchBox/>
      <ContactList/>
    </div>
  )
} 