import { Routes, Route } from 'react-router'
import { Suspense, lazy, useEffect } from 'react'
import Layout from './components/Layout/Layout'
import RestrictedRoute from './components/RestrictedRoute'
import PrivateRoute from './components/PrivateRoute'

const HomePage = lazy(()=>import('./pages/HomePage/HomePage').then(module => ({ default: module.HomePage})))
const RegistrationPage = lazy(()=>import('./pages/RegistrationPage/RegistrationPage').then(module => ({ default: module.RegistrationPage})))
const LoginPage = lazy(()=>import('./pages/LoginPage/LoginPage').then(module => ({ default: module.LoginPage})))
const ContactsPage = lazy(()=>import('./pages/ContactsPage/ContactsPage').then(module => ({ default: module.ContactsPage})))

import { useDispatch, useSelector } from 'react-redux'
import { refreshUser } from './redux/auth/operations'
import { selectIsRefreshing } from './redux/auth/selectors'
import './App.css'

export default function App () {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(()=>{
    dispatch(refreshUser())
  }, 
  [dispatch])

  return (
    isRefreshing ? (<>Loader...</>) :
    (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>

          <Route path='/registration' element={<RestrictedRoute
              component={<RegistrationPage/>}
              />}/>

          <Route path='/login' element={<RestrictedRoute
              component={<LoginPage/>}
              />}/>
          
          <Route path='/contacts' element={<PrivateRoute
              component={<ContactsPage/>} 
              />} />

        </Routes>
      </Suspense>
    </Layout>
    )
  )
}
