import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section archlab">
          <h3>ArchLab.</h3>
          <p>
            Far far away, behind the <br />
            word mountains, far from <br />
            the countries.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Community Section */}
        <div className="footer-section community">
          <h3>Community</h3>
          <ul>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* About Us Section */}
        <div className="footer-section about-us">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Meet the team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section company">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Have a Questions?</h3>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i> 203 Fake St. Mountain View, San Francisco, California, USA
            </li>
            <li>
              <i className="fas fa-phone"></i> +2 392 3929 210
            </li>
            <li>
              <i className="fas fa-envelope"></i> info@yourdomain.com
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          Copyright ©2024 All rights reserved | This template is made with <i className="fas fa-heart"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
