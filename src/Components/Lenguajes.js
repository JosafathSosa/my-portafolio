import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import retrato from "../assets/img/retrato.jpeg";

export const Lenguajes = () => {
  return (
    <div className="info">
      <Container>
        <Row>
          <Col>
            <div className="aboutMe">
              <div className="d-flex align-items-center mb-5">
                <h2>About me</h2>
                <div className="line"></div>
              </div>

              <p>
                Hello! I'm Josafath Sosa, a software engineer based in México.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <div className="tec">
                <div>
                  <ul>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="rgb(63, 81, 181)"
                        class="bi bi-caret-right"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                      </svg>
                      <p>HTML & CSS</p>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="rgb(63, 81, 181)"
                        class="bi bi-caret-right"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                      </svg>
                      <p>PHP</p>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="rgb(63, 81, 181)"
                        class="bi bi-caret-right"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                      </svg>
                      <p>JavaScript</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="rgb(63, 81, 181)"
                        class="bi bi-caret-right"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                      </svg>
                      <p>Node.js</p>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="rgb(63, 81, 181)"
                        class="bi bi-caret-right"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                      </svg>
                      <p>React</p>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="rgb(63, 81, 181)"
                        class="bi bi-caret-right"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                      </svg>
                      <p>Python</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="imagen">
              <img src={retrato} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
