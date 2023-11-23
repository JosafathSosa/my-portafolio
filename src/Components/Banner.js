import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length; //Me dice una palabra al azar
    let fullText = toRotate[i]; //Designa palabra a animar
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container className="data-container">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portafolio</span>
            <h1>
              {"Hi I`m Josafath "} <span className="wrap"> {text}</span>
            </h1>
            <p>
              ¡Welcome to my digital corner! I am a passionate student of
              Intelligent Computing dedicated to exploring the wonders of
              technology. I love bringing innovative ideas to life. My skills
              are not confined to the virtual realm alone; I am adept at
              designing and managing databases, ensuring a robust structure for
              my projects. <br></br>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
