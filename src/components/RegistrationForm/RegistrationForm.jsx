import React from 'react'
import { Field, Formik, Form } from 'formik'
import { useDispatch } from 'react-redux'
import {register} from '../../redux/auth/operations'
import css from '../RegistrationForm/RegistrationForm.module.css'

export const RegistrationForm = () => {

  const dispatch = useDispatch()

  const handleSubmit = (values, actions) =>{
    dispatch(register(values));
    actions.resetForm();
  }

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form autoComplete='off' className={css.form}>

          <label className={css.line} htmlFor='name'>
            Username
          </label>
          <Field type="text" name="name" className={css.field}/>
          

          <label className={css.line} htmlFor='email'>
            Email
          </label>
          <Field type="email" name="email" className={css.field}/>
          

          <label className={css.line} htmlFor='password'>
            Password
          </label>
          <Field type="password" name="password" className={css.field}/>

          <button type='submit' className={css.submitBtn}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  )
}
