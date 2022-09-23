import React from 'react'
import './LoginLogout.css'
import Snowfall from 'react-snowfall'
import axios from 'axios'
import { useState } from 'react'
import 'react-notifications/lib/notifications.css';

function Login() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let handleSubmit = async (e) => {
    e.preventDefault();

     const loginCredential = { 
      username: username,
      email: email, 
      password: password
    }

    axios.post('http://localhost:8080/createaccount', loginCredential)
    
  }

  return (
    <div className='card-div'>
        <Snowfall snowflakeCount={500} style={{position: 'fixed', height: '100vh'}}/>
        <div className="card" style={{ width:"25rem" }} >
            <div className="card-body">
                <h1 className="card-title elem">Create Account</h1>
                
                <form className='form' onSubmit={handleSubmit}>
                  <input className='user-name elem' onChange={(e) => setUsername(e.target.value)} type='name' placeholder='Username' />
                  <input className='email elem' onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
                  <input className='password elem' onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                  <button className='btn btn-light-create' type='submit'>Create Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login