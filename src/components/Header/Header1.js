import React from 'react'
import './Header1.css'

function Header1() {
  return (
    <div className='header1'>
        
        <div className='header1_left'>
            <img className='header1_left_img' src='https://static.abhibus.com/img/abhilogos/logo1.png' alt='abhibus'/>
        </div>
        <div className='header1_right'>
            <button>Offers</button>
            <button>Get Free Rides</button>
            <button>My Bookings</button>
            <button>Login / Register</button>
        </div>
        
        </div>
  )
}

export default Header1