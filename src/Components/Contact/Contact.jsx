import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={styles.parent}>
        <div className="content">
          <h1>conatct sectiont</h1>
          <div className={styles.parent_shape}>
            <div className={styles.shape}>
              <span className={styles.line}></span>
              <FontAwesomeIcon icon={faStar} />
              <span className={styles.line}></span>
            </div>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-5 ">
              <Form.Control
                type="text"
                placeholder="User Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.customInput}
                required
              />
            </Form.Group>

            <Form.Group className="mb-5">
              <Form.Control
                type="number"
                placeholder="User Age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className={styles.customInput}
                required
              />
            </Form.Group>

            <Form.Group className="mb-5">
              <Form.Control
                type="email"
                placeholder=" User Email "
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.customInput}
                required
              />
            </Form.Group>

            <Form.Group className=" mb-4">
              <Form.Control
                type=" password"
                placeholder=" User Password "
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={styles.customInput}
                required
              />
            </Form.Group>

            <div className="text-start">
              <Button
                variant="success"
                type="submit"
                style={{ backgroundColor: "#1abc9c", border: "none" }}
              >
                Send Message
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
