import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import retrato from "../assets/img/retrato.jpeg";

const stats = [
  { value: "4+", label: "Years coding" },
  { value: "10+", label: "Projects built" },
  { value: "2nd", label: "Talent Land 2024" },
];

const stack = [
  {
    group: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C#", "Java", "C / C++", "PHP", "SQL"],
  },
  {
    group: "Frameworks",
    items: ["React", "React Native", "Angular", "Laravel", "Firebase"],
  },
  {
    group: "AI & Data",
    items: ["TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    group: "Tools & Infra",
    items: ["Docker", "Git", "MySQL", "PostgreSQL", "Grafana", "Prometheus", "OpenTelemetry"],
  },
];

export const Lenguajes = () => {
  return (
    <section className="info" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={7}>
            <div className="aboutMe">
              <div className="d-flex align-items-center mb-4">
                <h2>About me</h2>
                <div className="line"></div>
              </div>

              <p>
                Hi! I'm <strong>Josafath Sosa</strong>, a Software Engineer and
                Artificial Intelligence Engineer based in Aguascalientes, México.
              </p>
              <p>
                I started coding in 2017 as a Programming Technician and have
                been building ever since: websites, native mobile apps, desktop
                systems and AI models. I enjoy solving problems, working in
                teams and learning new technologies.
              </p>

              <div className="stats">
                {stats.map((s) => (
                  <div className="stat" key={s.label}>
                    <span className="stat-value">{s.value}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="stack">
                {stack.map((g) => (
                  <div className="stack-group" key={g.group}>
                    <h6>{g.group}</h6>
                    <div className="chips">
                      {g.items.map((item) => (
                        <span className="chip" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="imagen">
              <img src={retrato} alt="Josafath Sosa" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
