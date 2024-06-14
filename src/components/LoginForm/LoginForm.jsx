import React from 'react'
import { Formik } from 'formik'

export const LoginForm = () => {
  return (
    <div>
        <Formik
        initialValues={{ email: '', password: '' }}
        />
    </div>
  )
}
