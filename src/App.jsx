import { Routes, Route } from 'react-router'
// import { fetchContacts } from './redux/contacts/operations'
// import { useDispatch } from 'react-redux'
import { lazy, useEffect } from 'react'
import Layout from './components/Layout/Layout'
// const HomePage = lazy(()=>import('./pages/HomePage/HomePage'))
const RegistrationPage = lazy(()=>import('./pages/RegistrationPage/RegistrationPage'))
const LoginPage = lazy(()=>import('./pages/LoginPage/LoginPage'))
// const ContactsPage = lazy(()=>import('./pages/ContactsPage/ContactsPage'))
import './App.css'

export default function App () {

  // const dispatch = useDispatch()

  // useEffect(()=>{
  //   // dispatch(fetchContacts())
  // },
  // [dispatch])

  return (
    <Layout>
      <Routes>
        {/* <Route path='/' element={<HomePage/>}/> */}
        <Route path='/registration' element={<RegistrationPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        {/* <Route path='/contacts' element={<ContactsPage/>}/> */}
      </Routes>
    </Layout>
  )
}
