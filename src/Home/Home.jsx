import React from 'react'
import Brand from '../Assets/Assets/Transp-logo.png'
import Intro from '../Assets/Assets/bandicam 2022-08-25 11-21-36-530.mp4'
import './Home.css'

function Home() {
  return (
    <div className='home-div'>
        <video autoPlay loop>
            <source src={Intro} type='video/mp4'/>
        </video>
    </div>
  )
}

export default Home