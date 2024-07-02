import React from 'react'
import { Formik, Form, Field } from 'formik'
import css from './LoginForm.module.css'
import { useDispatch } from 'react-redux'
import {login} from '../../redux/auth/operations'

export const LoginForm = () => {
  const dispatch = useDispatch()

 const handleSubmit = (values, actions) =>{
  dispatch(login(values));
  actions.resetForm();
 }

  return (
    <div>
        <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form autoComplete='off' className={css.form}>
          <label htmlFor="email">
            Email
          </label>
          <Field type="email" name="email" className={css.field}/>

          <label htmlFor="password">
            Password
          </label>
          <Field type="password" name="password" className={css.field}/>

          <button type='submit' className={css.loginBtn}>
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  )
}
