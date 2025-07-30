import React from "react";
import image from "../../images/avataaars.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./Home.css";

export default function Home() {
  return (
    <div className="parent">
      <div>
        <img src={image} alt="" />
        <h1>start Framework</h1>
        <div className="shape-parent">
          <div className="shape">
            <span className="line"></span>
            <FontAwesomeIcon icon={faStar} />
            <span className="line"></span>
          </div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
}
