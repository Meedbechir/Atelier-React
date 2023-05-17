import React from 'react';
import Logo from '../Images/sp.png'

const Header = () => {
  return (
    <header>
    <nav className="d-flex justify-content-between">
      <img src={Logo} alt="Img" className="imgLogo ms-5" />
      <div className="">
        <button className="btn text-light mx-3">Sign Up</button>
        <button className="btn btn-light me-3 bg-white">Log In</button>
      </div>
    </nav>
  </header>
  )
}

export default Header;