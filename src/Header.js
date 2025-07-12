import React, { useState } from 'react';
import './Header.css';

function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="/Logo.png" alt="WebDevSoft Logo" />
          <span>Web<span className="highlight">DevSoft</span></span>
        </div>

        <nav className="nav-links">
          <a href="#home">HOME</a>
          <a href="#internships">INTERNSHIPS</a>
          <a href="#services">SERVICES</a>
          <a href="#process">PROCESS</a>
          <a href="#projects">PROJECTS</a>
          <a
            href="https://www.webdevsoft.com/verify.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            VERIFY
          </a>
          <span className="icon" onClick={toggleDarkMode}>
            {darkMode ? '⚪' : '⚫'}
          </span>
          <span className="icon" onClick={toggleMenu}>☰</span>
        </nav>
      </header>

      {menuOpen && (
        <div className="side-menu">
          <span className="close-btn" onClick={toggleMenu}>✕</span>
          <ul>
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#internships" onClick={toggleMenu}>Internships</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#process" onClick={toggleMenu}>Process</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li>
              <a
                href="https://www.webdevsoft.com/verify.html"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                Verify
              </a>
            </li>
          </ul>

          <div className="contact">
            <h4>Contact Us</h4>
            <p>webdevsoftit@gmail.com</p>
            <p>+91 7255990852</p>

            <h4>Follow Us</h4>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/WebDevsoft/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/facebook.png" alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/webdevsoftit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/instagram.png" alt="Instagram" />
              </a>
              <a
                href="https://www.linkedin.com/company/webdevsoft-it/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/linkedin.jpg" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
