import React from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";

import navIcon3 from "../assets/img/icons8-github.svg";

export const Footer = () => {
  return (
    <footer className="footer pt-5">
      <div className="social-icon d-flex justify-content-evenly">
        <a href="https://www.linkedin.com/in/josafath-sosa-jimenez-7970b2267/">
          <img src={navIcon1} alt="" />
        </a>
        <a href="https://github.com/JosafathSosa">
          <img src={navIcon3} alt="" />
        </a>
      </div>
    </footer>
  );
};
