import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer pt-5">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon mb-5 mt-5">
              <a href="https://www.linkedin.com/in/josafath-sosa-jimenez-7970b2267/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/JosafathSosa">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/josafucksos/">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2023 All Right Reserved Josafath </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
