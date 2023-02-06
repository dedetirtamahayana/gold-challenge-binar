import React from 'react'
import './Navbar.css'
import Imagelogo from '../../images/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar-expand-lg navbar bg-light fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href='/'>
      <img src={Imagelogo} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{width:'50%'}}>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button"  className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link text-dark" aria-current="page"href='/'>Our Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" aria-current="page"href='/'>Why Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" aria-current="page"href='/'>Testimonial</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" aria-current="page"href='/'>FAQ</a>
          </li>
        </ul>
       
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
