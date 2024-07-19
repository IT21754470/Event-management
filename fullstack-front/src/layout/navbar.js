import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="navbar">
      <h1 className="logo">Event Managment</h1>


      <div onClick={handleNav} className="hamburger">
        {navOpen ? (
          <AiOutlineClose size={24} />
        ) : (
          <AiOutlineMenu size={24} />
        )}
      </div>

 
      <ul className="nav-links">
        <li>
          <Link to="/addEvent">Add Event</Link>
        </li>
        <li>
          <Link to="/displayEvent">All Events</Link>
        </li>
        <li>
          <Link to="/getEvents">Event Description</Link>
        </li>
        <li>
          <Link to="/DeleteEvents">update Events</Link>
        </li>
       
      </ul>

      <div
        className={
          navOpen
            ? 'mobile-nav open'
            : 'mobile-nav'
        }
      >
        <ul className="mobile-nav-links">
          <li>
            <Link to="/addEvent" onClick={handleNav}>
            Add Event
            </Link>
          </li>
          <li>
            <Link to="/displayEvents" onClick={handleNav}>
            All Events
            </Link>
          </li>
          <li>
            <Link to="/getEvents" onClick={handleNav}>
          Events description
          </Link>
          </li>
         
         
         
        </ul>
      </div>
      <div className="right-corner">
        <button className="custom-button">Add User</button>
      </div>
    </div>
  );
};

export default Navbar;
