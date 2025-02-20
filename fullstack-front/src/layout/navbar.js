import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate=useNavigate();

  const handleNav = () => {
    setNavOpen(!navOpen);
  };
  const handlechange = () => {
    navigate('/addAttendee')
 
   }
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
          <Link to="/">Home</Link>
        </li>
      
        <li>
          <Link to="/addEvent">Add Events</Link>
        </li>
        <li>
          <Link to="/getEvents">Event List</Link>
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
          <Link to="/"onClick={handleNav}>Home</Link>
        </li>
         
          <li>
            <Link to="/addEvent" onClick={handleNav}>
            Add Events
            </Link>
          </li>
          <li>
            <Link to="/getEvents" onClick={handleNav}>
          Events List
          </Link>
          </li>
         
         
         
        </ul>
      </div>
      <div className="right-corner">
        
      </div>
    </div>
  );
};

export default Navbar;
