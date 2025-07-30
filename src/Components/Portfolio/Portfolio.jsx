import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Portfolio.module.css";
import { images } from "../../data/images";
import { useState } from "react";
import { Modal } from "react-bootstrap";

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <>
      <div className={styles.parent}>
        <div className="content">
          <h1>portfolio component</h1>
          <div className={styles.parent_shape}>
            <div className={styles.shape}>
              <span className={styles.line}></span>
              <FontAwesomeIcon icon={faStar} />
              <span className={styles.line}></span>
            </div>
          </div>
          <div>
            <div className={styles.imagesContainer}>
              {images.map((img, index) => (
                <div
                  key={index}
                  className={styles.imageParent}
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} alt="" />
                  <div className={styles.overlay}>
                    <FontAwesomeIcon icon={faPlus} size="6x" />
                  </div>
                </div>
              ))}
            </div>

            {selectedImage && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "#4492ff4d",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: "1000",
                }}
                onClick={() => setSelectedImage(null)}
              >
                <img
                  src={selectedImage}
                  alt=""
                  style={{ width: "80vh", marginTop: "100px" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
