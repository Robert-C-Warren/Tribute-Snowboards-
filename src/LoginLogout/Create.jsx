import React from 'react'
import './LoginLogout.css'
import Snowfall from 'react-snowfall'
import axios from 'axios'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function CreateAccount() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false)
  const [success, setSuccess] = useState()
  const [successVisible, setSuccessVisible] = useState(false)

  const allFieldsRequired = () => toast("All Fields Required");
  const validEmailRequired = () => toast("Please Enter Valid Email");
  const validPasswordRequired = () => toast("Password must be at least 8 characters");
  const accountCreated = () => toast("Account Created Successfully");
  
  let handleSubmit = async (e) => {
    e.preventDefault();

     const loginCredential = { 
      username: username,
      email: email, 
      password: password
    }

    if (username === undefined || email === undefined || password === undefined) {
      console.log("TRUE")
      setError(allFieldsRequired)
      setVisible(true)
      setTimeout(function () {
        setVisible(false);
      }, 5000)
    }
    else if (email !== null && !email.includes("@")) {
      console.log("TRUE")
      setError(validEmailRequired)
      setVisible(true)
      setTimeout(function () {
        setVisible(false);
      }, 5000)
    }
    else if (password.length < 8) {
      setError(validPasswordRequired)
      setVisible(true)
      setTimeout(function () {
        setVisible(false);
      }, 5000)
    }
    else {
      axios.post('http://localhost:8080/createaccount', loginCredential)
        .then((response) => {
          if (!response.ok) {
            setSuccess(accountCreated)
            setSuccessVisible(true)
            setEmail('')
            setUsername('')
            setPassword('')
            setTimeout(function () {
              setSuccessVisible(false)
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
                  <input className='user-name elem' onChange={(e) => setUsername(e.target.value)} type='name' placeholder='Username' />
                  <input className='email elem' onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
                  <input className='password elem' onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                  <button className='btn btn-light-create' type='submit'>Create Account</button>
                </form>

                <ToastContainer />
            </div>
        </div>
    </div>
  )
}

export default CreateAccount