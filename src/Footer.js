import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-col">
            <div className="footer-logo">
              <img src="/Logo.png" alt="WebDevSoft Logo" className="logo-img" loading="lazy" />
              <p className="logo-heading">WebDevSoft</p>
            </div>
            <br />
            <p className="footer-about">
              Smart digital solutions to grow your business. We build websites, apps, marketing tools, and software tailored to your success.
            </p>
            <p>
              <strong>NCS ID:</strong> E20F76-0942223937219<br />
              <strong>DIIPT ID:</strong> IN-0625-9228QA
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#internships">Internships</a></li>
              <li><a href="/verify.html">Verify Certificate</a></li>
            </ul>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:webdevsoftit@gmail.com">webdevsoftit@gmail.com</a></li>
              <li><a href="tel:+917255990852">+91 7255990852</a></li>
              <li>Patna, Bihar</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>My Pages</h4>
            <ul>
              <li><a href="/all-pages">All Pages</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/disclaimer">Disclaimer</a></li>
              <li><a href="/dmca">DMCA</a></li>
              <li><a href="/refund-policy">Refund Policy</a></li>
              <li><a href="/sitemap">Sitemap</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/WebDevsoft/" target="_blank" rel="noopener noreferrer">
                <img src="/facebook.png" alt="Facebook" className="social-icon" loading="lazy" />
              </a>
              <a href="https://twitter.com/WebDevSoft" target="_blank" rel="noopener noreferrer">
                <img src="/twitter.png" alt="Twitter" className="social-icon" loading="lazy" />
              </a>
              <a href="https://www.instagram.com/webdevsoftit" target="_blank" rel="noopener noreferrer">
                <img src="/instagram.png" alt="Instagram" className="social-icon" loading="lazy" />
              </a>
              <a href="https://www.linkedin.com/company/webdevsoft-it/" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.jpg" alt="LinkedIn" className="social-icon" loading="lazy" />
              </a>
            </div>
            <div className="footer-partners">
              <h4 className="partner-heading">Supported By</h4>
              <div className="partner-logos">
                <div className="logo-box">
                  <img src="/msme-seeklogo.svg" alt="MSME Logo" className="footer-logo" loading="lazy" />
                </div>
                <div className="logo-box">
                  <img src="/startup-india-hub-logo-vector.svg" alt="Startup India" className="footer-logo" loading="lazy" />
                </div>
                <div className="logo-box">
                  <img src="/skill-india-seeklogo.png" alt="SkillUp Trainer" className="footer-logo" loading="lazy" />
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2024 WebDevSoft. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
