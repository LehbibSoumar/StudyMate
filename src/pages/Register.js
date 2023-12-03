import React from 'react'
import './LogReg.css'

const Login = () => {
  return (
        <div className="login">
            <h1>StudyMate</h1>
            <div className="auth">
                <h2>Register</h2>
                <form>
                    <input type='text' placeholder='First Name' />
                    <input type='text' placeholder='Last Name' />
                    <input type='text' placeholder='Email' />
                    <input type='password' placeholder='Password' />
                    <input type='password' placeholder='Password Confirmation' />
                    <button type='submit'>SignUp</button>
                </form>
            </div>
        </div>
    )
}

export default Login