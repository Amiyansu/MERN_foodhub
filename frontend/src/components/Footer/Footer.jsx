import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1 className="logo">FoodHub.com</h1>
          <p>
          Delicious meals delivered swiftly to your doorstep. Experience convenience and quality with our seamless food delivery app
          </p>
          <div className="footer-social-icons">
            {/* <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" /> */}
            <a href="https://www.facebook.com/amiyansu.patra/" target="_blank" rel="noopener noreferrer">
        <img src={assets.facebook_icon} alt="Facebook" />
      </a>
      <a href="https://x.com/Amiyansu_Patra" target="_blank" rel="noopener noreferrer">
        <img src={assets.twitter_icon} alt="Twitter" />
      </a>
      <a href="https://www.linkedin.com/in/amiyansu-patra-342b27257/" target="_blank" rel="noopener noreferrer">
        <img src={assets.linkedin_icon} alt="LinkedIn" />
      </a>
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 7683 866 998</li>
            <li>patraamiyansu@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © amiyansu.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
