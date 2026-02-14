import React, { useState } from "react";
import "./NavbarHome.css";
import { Link } from "react-router-dom";
import assets from "../../assets/assets";

const NavbarHome = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={assets.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} alt="" />
        </Link>
      </div>

      <div
        className={`nav-links ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link>

        <a href="#about-section">About</a>

        <Link to="/memories">Memories</Link>
        <Link to="/explore">Our Trips</Link>
        <Link to="/more">More</Link>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavbarHome;
