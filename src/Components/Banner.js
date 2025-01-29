import React, { useState, useEffect } from "react";
import { Col, Container } from "react-bootstrap";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Software Engineer", "Web Developer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
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
        <Col xs={12} md={6} xl={7}>
          <p className="tagline">Hi I'm</p>
          <h1>Josafath Sosa</h1>
          <h1>
            <span className="wrap">{text}</span>
          </h1>
          <p className="description">
            I am a passionate Intelligent Computing Engineer dedicated to
            exploring the wonders of technology.
          </p>
          <div className="button">
            <p>Get in touch</p>
          </div>
        </Col>
      </Container>
    </section>
  );
};
