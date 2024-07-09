import  Axios  from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const ForgotPassword = () => {

  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    Axios.post('http://localhost:3000/auth/forgotPassword',{
      email
    }).then(response => {
      if(response.data.status){
        alert("Check your email for reset password link")
        navigate('/login')
      }
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="sign-up-container">
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>

      <label htmlFor="email">Email : </label>
      <input
        type="email"
        autoComplete="off"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Submit</button> 
    </form>
  </div>
  )
}

export default ForgotPassword
