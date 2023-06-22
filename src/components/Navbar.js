import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Logo from "../assets/New-logo.png";
import "./Navbar.css";


function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(true);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <div className="navbar">
      <div className="top-bar">
        <p>FREE Shipping & FREE Returns.</p>
      </div>
      <div>
        <Link to="/" className="navbar-logo">
          <img src={Logo} className="logo" alt="Logo" />
        </Link>
      </div>
      <div className="navbar-container">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="menu-item">
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/product" className="nav-link" onClick={closeMobileMenu}>Diamonds</Link>
          </li>
          <li>
            <Link to="/shop" className="nav-link" onClick={closeMobileMenu}>Shop</Link>
          </li>
          <li>
            <Link to="/product" className="nav-link" onClick={closeMobileMenu}>Products</Link>
          </li>
          <li>
            <Link to="/services" className="nav-link" onClick={closeMobileMenu}>Jewelry</Link>
          </li>
          <li>
            <Link to="/services" className="nav-link" onClick={closeMobileMenu}>About Us</Link>
          </li>
          <li>
            <Link to="/career" className="nav-link" onClick={closeMobileMenu}>Engagement</Link>
          </li>
          <li>
            <Link to="/login" className="nav-link" onClick={closeMobileMenu}>Collection</Link>
          </li>
        </ul>

        <div className="nav-icon">
          {button && <Button buttonStyle='btn__outline'><i className="fa-solid fa-heart"></i></Button>}
          {button && <Button buttonStyle='btn__outline'><i className="fa-solid fa-user"></i></Button>}
          {button && <Button buttonStyle='btn__outline'><i className="fa-solid fa-cart-shopping"></i></Button>}
        </div>
      </div>
    </div>
  );
}

export default Navbar;