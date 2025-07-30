import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import { useEffect } from "react";
import "./NavBar.css";

function NavBar() {
  useEffect(() => {
    const navbar = document.querySelector(".custom-nav");

    function handleScroll() {
      if (window.scrollY > 150) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Navbar expand="lg" className="custom-nav">
      <Container>
        <Navbar.Brand as={Link} to="/" className="custom-brand">
          Start Framework
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/about" className="custom-links">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio" className="custom-links">
              Portfolio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="custom-links">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
