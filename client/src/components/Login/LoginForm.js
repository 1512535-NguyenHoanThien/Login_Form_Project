import React from 'react'
import ErrorView from 'components/ErrorView'
import LoadingView from 'components/LoadingView'
import Input from 'components/Input'
import './style.css'

const LoginForm = props => {
  const { formState, handleSubmit, errorMessage, currentlySending } = props

  const submitForm = event => {
    event.preventDefault()
    handleSubmit(formState.email, formState.password)
  }

  return (
  

     <div className="login-page">
        <div className="form">
        <form onSubmit={submitForm}>
        <Input type="text" name="email" model="email" label="Email:" />
        <Input type="password" name="password" model="password" label="Password:" />
        <input type="submit" value="Submit" />
        <LoadingView currentlySending={currentlySending} />
        <ErrorView message={errorMessage} />
    </form>
                </div>
            </div>
  )
}

export default LoginForm
