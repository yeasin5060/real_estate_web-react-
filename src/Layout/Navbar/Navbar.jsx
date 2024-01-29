import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import dreamlogo from '../../images/dream_home_logo.jpg'

const Navbar = () => {
  return (
    <section id='navbar'>
      <div className='container'>
        <div className='navbar_wrapper'>
          <div className='navbar_logo_site'>
              <div className='navbar_logo_box'>
                  <img src={dreamlogo} alt="not found" />
              </div>
              <ul className='navbar_logo_box_flex'>
                <li>
                  <NavLink to = "/">Home</NavLink>
                </li>
                <li>
                  <NavLink to = "buy">Buy</NavLink>
                </li>
                <li>
                  <NavLink to = "rent">Rent</NavLink>
                </li>
                <li>
                  <NavLink to = "mortgage">Mortgage</NavLink>
                </li>
              </ul>
          </div>
          <div className='navbar_link_site'>
              <ul className='navbar_link_site_wrapper'>
                <li>
                  <NavLink to = "savedhomes">Saved Homes</NavLink>
                </li>
                <li>
                  <NavLink to = "savedsearches">Saved Searches</NavLink>
                </li>
                <div className='navbar_link_button'>
                    <button className='navbar_link_btn'>
                      <NavLink to = "signuporlogin" className="Sign_up_or_Login">Sign up or Login</NavLink>
                    </button>
                </div>
              </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar