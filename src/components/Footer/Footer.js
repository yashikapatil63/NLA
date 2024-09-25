// src/components/Footer.js
import React from 'react';
import './Footer.css';
import '../../global.css';
import { Link } from 'react-router-dom';
import facebookIcon from '../../Assets/Components/facebook.png';
import twitterIcon from '../../Assets/Components/twitter.png';
import linkedinIcon from '../../Assets/Components/linkedin.png'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section address">
          <h1>Driving tomorrow's success with today's technology.</h1>
          <p>
            <strong>Address :</strong> <br />
            5th Floor, Omega House, Hiranandani Gardens, <br />
            Powai, Mumbai, Maharashtra 400076
          </p>
          <p>
            <strong>Contact:</strong> <br />
            +91 8850941503
          </p>
          <p>
            <strong>Email:</strong> <br />
            <a href="mailto:contact@pristine-code.com" className="email-link">
              contact@pristine-code.com
            </a>
          </p>
        </div>
        <div className="footer-line"></div>
        <div className="product">
          <h3>Product</h3>
          <ul>
            <li><Link to="/SunBPM" className="email-link">SunBPM</Link></li>
            {/* <li>ERP</li> */}
          </ul>
        </div>
        <div className="more">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/About"  className="email-link">About Us</Link></li>
            <li><Link to="/Services"  className="email-link">Services</Link></li>
            <li><Link to="/Contact"  className="email-link">Contact Us</Link></li>
            <li><Link to="/Blogs"  className="email-link">Blogs</Link></li>
          </ul>
        </div>
        <div className="policies">
          <h3>Our Policies</h3>
          <ul>
            <li><Link to="/PrivacyPolicy"   className="email-link">Privacy Policies</Link></li>
            <li><Link to="/TermsConditions"  className="email-link">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
        <a href="#"><img src={facebookIcon} alt="LinkedIn" /></a>
          <a href="#"><img src={twitterIcon} alt="X" className="email-link"/></a>
          <a href="#"><img src={linkedinIcon} alt="Facebook" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;