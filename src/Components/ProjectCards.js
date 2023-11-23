import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCards = ({ title, descripcion, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Imagen cards" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{descripcion}</span>
        </div>
      </div>
    </Col>
  );
};
