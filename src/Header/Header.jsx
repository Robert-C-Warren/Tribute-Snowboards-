import React from 'react'
import Logo from '../Assets/Assets/Transp-logo-header-white.png'
import './Header.css'

function Header() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img className='brand' src={Logo} style={{ height: '45px'}}/></a>
                <div class="navbar" id="navbarNavAltMarkup">
                    <div class="navbar-nav links">
                        <a class="nav-link active text-white" href="/">Home</a>
                        <a class="nav-link active text-white" href="/shop">Shop</a>
                        <a href={'/login'} class="btn btn-light login">Login</a>
                        <a href={'/login'} class="btn btn-light logout">Logout</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header