import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer-container ">
      <div className="footer-content container">
        <div className="child">
          <h3>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>

        <div className="child">
          <h3>AROUND THE WEB</h3>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
            <FontAwesomeIcon icon={faTwitter} className="icon" />
            <FontAwesomeIcon icon={faGoogle} className="icon" />
          </div>
        </div>

        <div className="child">
          <h3>ABOUT FREELANCER</h3>
          <p>
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>

      <div className="footer-bottom">Copyright © Your Website 2021</div>
    </footer>
  );
}

export default Footer;
