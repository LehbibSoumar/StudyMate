import React from 'react'
import './LogReg.css'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
        <div className="login">
            <h1>StudyMate</h1>
            <div className="auth">
                <h2>Login</h2>
                <form>
                    <input type='text' placeholder='Email' />
                    <input type='password' placeholder='Password' />
                    <button type='submit'>Login</button>
                    <p>This is an error!</p>
                    <span>Don't you have an account? <NavLink to='/register'>Register</NavLink></span>
                </form>
            </div>
        </div>
    )
}

export default Login