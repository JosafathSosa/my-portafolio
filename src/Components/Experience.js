import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const work = [
  {
    period: "Aug 2024 – Dec 2024",
    role: "Software Engineer",
    place: "Grupo Flecha Amarilla · Remote",
    points: [
      "Built a REST API in C# + MySQL for auth, registration and user profiles, with robust HTTP error handling.",
      "Implemented full observability for an Angular app with OpenTelemetry, Prometheus and Grafana, including real-time alerts.",
      "Packaged metrics collection as a reusable Angular library published to Nexus Repository via npm.",
    ],
    tags: ["C#", "Angular", "TypeScript", "Docker", "Grafana"],
  },
  {
    period: "2024",
    role: "2nd Place · Hackathon Talent Land",
    place: "Flecha Amarilla Track",
    points: [
      "Designed and built a bus-ticket platform with admin panel, Google/Apple Wallet passes and WhatsApp/email delay notifications.",
    ],
    tags: ["Web", "Wallet API", "Notifications"],
  },
];

const education = [
  {
    period: "2020 – 2025",
    role: "Artificial Intelligence Engineering",
    place: "University degree",
    points: [
      "Machine Learning, Data Science, Data Mining and Software Development.",
    ],
  },
  {
    period: "2017 – 2020",
    role: "Programming Technician",
    place: "High school",
    points: [
      "OOP, networks (Packet Tracer), Windows Server and PHP + MySQL websites.",
    ],
  },
];

const TimelineItem = ({ period, role, place, points, tags }) => (
  <div className="tl-item">
    <span className="tl-dot" />
    <span className="tl-period">{period}</span>
    <h4>{role}</h4>
    <span className="tl-place">{place}</span>
    <ul>
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
    {tags && (
      <div className="chips">
        {tags.map((t) => (
          <span className="chip" key={t}>
            {t}
          </span>
        ))}
      </div>
    )}
  </div>
);

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <div className="section-title">
          <h2>Experience & Education</h2>
          <div className="line"></div>
        </div>
        <Row className="g-5">
          <Col lg={7}>
            <h3 className="tl-heading">Experience</h3>
            <div className="timeline">
              {work.map((item) => (
                <TimelineItem key={item.role} {...item} />
              ))}
            </div>
          </Col>
          <Col lg={5}>
            <h3 className="tl-heading">Education</h3>
            <div className="timeline">
              {education.map((item) => (
                <TimelineItem key={item.role} {...item} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
