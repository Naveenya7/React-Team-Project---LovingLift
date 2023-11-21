// Navbar.js

import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            LovingLift <i className="fas fa-hands-helping"></i>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/browsefundraisers'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Browse Fundraisers
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/startafundraiser'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Start a Fundraiser
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/howitworks'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                How it works?
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <Link to='/sign-up' className='btn-mobile' onClick={closeMobileMenu}>
              <Button buttonStyle='btn--outline contrast-button'>SIGN UP</Button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
