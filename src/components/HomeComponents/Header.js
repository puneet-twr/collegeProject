import React from 'react'
import './Header.css';

function Header({logoutFunc}) {
  return (
    <div className="Header">
      <div className="HeaderName">
        Movie Ticket Reservation
      </div>
      <div className="LogoutButton" onClick={logoutFunc}>
        Logout
      </div>
    </div>
  )
}

export default Header;