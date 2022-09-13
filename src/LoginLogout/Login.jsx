import React from 'react'
import './LoginLogout.css'
import Snowfall from 'react-snowfall'

function Login() {
  return (
    <div className='card-div'>
        <Snowfall snowflakeCount={500} style={{position: 'fixed', height: '100vh'}}/>
        <div className="card" style={{ width:"25rem" }} >
            <div className="card-body">
                <h1 className="card-title elem">Login</h1>
                <input className='email elem' type='email' placeholder='Email' />
                <input className='password elem' type='password' placeholder='Password' />
                <a href="#" className="btn btn-light elem">Login</a>
                <h6 className='make-account elem'>Don't have an account? 
                    <a href='/createaccount' className='create' style={{ textDecoration: 'none' }}> Create</a> one!
                </h6>
            </div>
        </div>
    </div>
  )
}

export default Login