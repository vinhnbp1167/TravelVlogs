import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import Dropdown from './Dropdown';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(true);
        } else {
          setDropdown(true);
        }
      };
    
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    const extendElement = () => {
        dropdown ? setDropdown(false) : setDropdown(true);
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
          <div className='navbar-container'>
              <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                TRAVEL VLOGS<i className='fa fa-plane' />
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
                  <li className='nav-item' 
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onClick={extendElement}>
                      <Link to='/review-selection' className='nav-links' onClick={closeMobileMenu}>
                          Reviews <i className='fas fa-caret-down' />
                      </Link>
                      {dropdown && <Dropdown onCloseMobileMenu={closeMobileMenu}/>}
                  </li>
                  <li className='nav-item'>
                      <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                          Sign Up
                      </Link>
                  </li>
              </ul>
              {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </div>
      </nav>
    </>
  )
}

export default Navbar;