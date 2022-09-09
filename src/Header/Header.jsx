import React from 'react'
import Logo from '../Assets/Assets/Transp-logo-header-white.png'
import './Header.css'

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img className='brand' src={Logo}/></a>
                <div className="navbar" id="navbarNavAltMarkup">
                    <div className="navbar-nav links">
                        <a className="nav-link active text-white" href="/">Home</a>
                        <a className="nav-link active text-white" href="/shop">Shop</a>
                        <a href={'/login'} className="btn btn-light login">Login</a>
                        <a href={'/login'} className="btn btn-light logout">Logout</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header