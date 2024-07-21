import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import "../css/navbar.css";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  const handlechange = () => {
    navigate("/addAttendee");
  };

  return (
    <div className="navbar">
      <h1 className="logo">Event Managment</h1>

      <div onClick={handleNav} className="hamburger">
        {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      <div className={navOpen ? "mobile-nav open" : "mobile-nav"}>
        <ul className="mobile-nav-links">
          <li>
            <Link to="/" onClick={handleNav}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/addEvent" onClick={handleNav}>
              Add Event
            </Link>
          </li>
          <li>
            <Link to="/displayEvent" onClick={handleNav}>
              All Events
            </Link>
          </li>
          <li>
            <Link to="/getEvents" onClick={handleNav}>
              Events description
            </Link>
          </li>

          <li>
            <Link to="/regAtt" onClick={handleNav}>
              Register Attendees
            </Link>
          </li>
        </ul>
      </div>
      <div className="right-corner">
        <button onClick={handlechange} className="custom-button">
          Add User
        </button>
      </div>
    </div>
  );
};

export default Header;
