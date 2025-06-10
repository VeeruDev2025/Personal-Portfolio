// Footer.jsx
import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contaxct</a>
      </nav>

      <div className="social-links">
        <a href="#" className="social-link" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="#" className="social-link" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="#" className="social-link" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="#" className="social-link" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
      </div>

      <p className="copyright">Copyright ©2025, Designed by VEERESH B</p>
    </footer>
  );
};

export default Footer;
