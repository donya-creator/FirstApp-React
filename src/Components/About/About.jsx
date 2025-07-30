import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="parent">
      <div>
        <h1>about component</h1>
        <div className="shape-parent">
          <div className="shape">
            <span className="line"></span>
            <FontAwesomeIcon icon={faStar} />
            <span className="line"></span>
          </div>
        </div>
        <div className="container d-flex justify-content-around align-items-center text-start p-2">
          <p className="content" style={{ width: "45%", fontSize: "20px" }}>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="content" style={{ width: "45%", fontSize: "20px" }}>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
}
