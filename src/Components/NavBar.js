import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import githubIcon from "../assets/img/github-mark.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {[
              ["home", "Home"],
              ["about", "About"],
              ["experience", "Experience"],
              ["projects", "Projects"],
            ].map(([key, label]) => (
              <Nav.Link
                key={key}
                href={`#${key}`}
                className={
                  activeLink === key ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink(key)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <div className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/JosafathSosa" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" className="gh" />
              </a>

              <a href="https://www.linkedin.com/in/josafath-sosa-jimenez-7970b2267/">
                <img src={navIcon1} alt="" />
              </a>

              <a href="https://www.instagram.com/josafucksos/">
                <img src={navIcon3} alt="" />
              </a>
            </div>

            <a href="#contact">
              <button className="vvd">
                <span>Contact</span>
              </button>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
