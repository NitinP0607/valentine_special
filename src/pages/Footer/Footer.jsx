import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <h2>Praniti</h2>
          <p>
            Built with love, memories, and countless beautiful moments.
            This little space on the internet belongs to us forever.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="#about-section">About</a>
          <a href="/memories">Memories</a>
          <a href="/explore">Our Trips</a>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3>Made For </h3>
          <p>
            My Forever Valentine 💖  
            Thank you for being my happiness, my peace, my everything.
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} N & P | Made with ❤️
      </div>
    </footer>
  );
};

export default Footer;
