import React from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ProjectCards } from "../Components/ProjectCards";

import ra1 from "../assets/img/bb1.PNG";
import ra2 from "../assets/img/bb2.PNG";
import ra3 from "../assets/img/bb3.PNG";

import case1 from "../assets/img/case1.PNG";
import case2 from "../assets/img/case2.PNG";
import case3 from "../assets/img/case3.PNG";

import wapi from "../assets/img/wapi.PNG";
import wapi2 from "../assets/img/wapi2.PNG";
import wapi3 from "../assets/img/wapi3.PNG";

export const Projects = () => {
  const projects = [
    {
      title: "Auth",
      descripcion: "Sign up & sing in",
      imgUrl: ra1,
    },
    {
      title: "UX Desgin",
      descripcion: "Design & Development",
      imgUrl: ra2,
    },
    {
      title: "Ideas",
      descripcion: "Brings your to life",
      imgUrl: ra3,
    },
  ];

  const projects2 = [
    {
      title: "Auth",
      descripcion: "Sign up & sing in",
      imgUrl: case1,
    },
    {
      title: "UX Desgin",
      descripcion: "Design & Development",
      imgUrl: case2,
    },
    {
      title: "Ideas",
      descripcion: "Brings your to life",
      imgUrl: case3,
    },
  ];

  const projects3 = [
    {
      title: "Auth",
      descripcion: "Sign up & sing in",
      imgUrl: wapi,
    },
    {
      title: "UX Desgin",
      descripcion: "Design & Development",
      imgUrl: wapi2,
    },
    {
      title: "Ideas",
      descripcion: "Brings your to life",
      imgUrl: wapi3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>These are my projects</p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Apps</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">E-Commerce</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Services</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row className="">
                    {projects.map((project, index) => {
                      return <ProjectCards key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects2.map((project, index) => {
                      return <ProjectCards key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects3.map((project, index) => {
                      return <ProjectCards key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
