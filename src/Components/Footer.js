import React from "react";
import { Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import githubIcon from "../assets/img/github-mark.svg";

export const Footer = () => {
  return (
    <footer className="contact" id="contact">
      <Container>
        <h2>Let's work together</h2>
        <p>
          I'm open to new opportunities and collaborations. Feel free to reach
          out on LinkedIn or check out my code on GitHub.
        </p>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/josafath-sosa-jimenez-7970b2267/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={navIcon1} alt="LinkedIn" />
          </a>
          <a href="https://github.com/JosafathSosa" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" className="gh" />
          </a>
        </div>
        <div className="copy">
          © {new Date().getFullYear()} Josafath Sosa · Aguascalientes, México
        </div>
      </Container>
    </footer>
  );
};
