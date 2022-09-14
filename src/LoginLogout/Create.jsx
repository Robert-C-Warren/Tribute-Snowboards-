import React from 'react'
import './LoginLogout.css'
import Snowfall from 'react-snowfall'
import axios from 'axios'
import { useState } from 'react'

function Login() {
  const [success, setSuccess] = useState();
  const [error, setError] = useState('');
  const [visable, setVisable] = useState(false);
  const [successVisable, setSuccessVisable] = useState(false);

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginCredential = { firstname, lastname, email, password }

    if (firstname === undefined || lastname === undefined || email === undefined || password === undefined) {
      setError('All fields are required')
      setVisable(true)
      setTimeout(function () {
        setVisable(false);
      }, 5000)
    } else if (email !== null && !email.includes('@')) {
      setError('Please enter a valid email')
      setVisable(true)
      setTimeout(function () {
        setVisable(false);
      }, 5000)
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters')
      setVisable(true)
      setTimeout(function () {
        setVisable(false);
      }, 5000)
    } else {
      await axios.post('https://localhost:5000/createaccount', loginCredential)
        .then((response) => {
          if (!response.ok) {
            setSuccess('Account Created Successfully')
            setSuccessVisable(true)
            setFirstname('')
            setLastname('')
            setEmail('')
            setPassword('')
            setTimeout(function () {
              setSuccessVisable(false);
            }, 5000) 
          }
        })
    }

  }

  return (
    <div className='card-div'>
        <Snowfall snowflakeCount={500} style={{position: 'fixed', height: '100vh'}}/>
        <div className="card" style={{ width:"25rem" }} >
            <div className="card-body">
                <h1 className="card-title elem">Create Account</h1>
                
                <form className='form' onSubmit={handleSubmit}>
                  <input className='first-name elem' onChange={(e) => setFirstname(e.target.value)} type='name' placeholder='First Name' />
                  <input className='last-name elem' onChange={(e) => setLastname(e.target.value)} type='name' placeholder='Last Name' />
                  <input className='email elem' onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
                  <input className='password elem' onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                  <button className='btn btn-light-create' type='submit' onClick={handleSubmit}>Create Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login