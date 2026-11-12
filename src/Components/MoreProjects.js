import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const projects = [
  {
    title: "Rancho Mezquite",
    type: "Mobile App",
    desc: "Horse management: pregnancies, genealogy trees, vet services and calendar.",
  },
  {
    title: "Pet Adoption",
    type: "Mobile App",
    desc: "Browse pets, see their details and location, and contact owners to meet them.",
  },
  {
    title: "Restaurants App",
    type: "Mobile App",
    desc: "Share and discover restaurants with photos, reviews, location and filters.",
  },
  {
    title: "Brain Breaker",
    type: "Mobile Game",
    desc: "Educational word-matching game that helps kids learn history, math and geography.",
  },
  {
    title: "E-Commerce Clothes",
    type: "Web Platform",
    desc: "Clothing store with admin dashboard for inventory, users, transactions and revenue.",
  },
  {
    title: "Cybercafe Manager",
    type: "Desktop System",
    desc: "Real-time control of computers in use, remaining session time and billing.",
  },
];

export const MoreProjects = () => {
  return (
    <section className="more-projects">
      <Container>
        <h3>Other things I've built</h3>
        <Row className="g-4">
          {projects.map((p) => (
            <Col sm={6} lg={4} key={p.title}>
              <div className="mp-card">
                <span className="mp-type">{p.type}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
