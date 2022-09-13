import React from 'react'
import { useNavigate } from 'react-router-dom'
import Intro from '../Assets/Assets/bandicam 2022-08-25 11-21-36-530.mp4'
import Snowfall from 'react-snowfall'
import './Home.css'

function Home() {
  let navigate = useNavigate();
  const goToShop = () => {
    navigate('/shop')
  }
  return (
    <div className='home-div'>
      <Snowfall snowflakeCount={500} style={{position: 'fixed', height: '100vh'}}/>
        <video autoPlay loop muted>
            <source src={Intro} type='video/mp4'/>
        </video>
            <button className='bi bi-arrow-right shop-button' type='submit' onClick={goToShop}>Shop</button>
    </div>
  )
}

export default Home