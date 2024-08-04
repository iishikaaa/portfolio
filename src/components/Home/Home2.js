import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillPhone } from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a{" "}
              <b className="purple">Frontend-focused Blockchain Developer</b>{" "}
              with hands-on experience building polished, production-ready Web3
              interfaces.
              <br />
              <br />I design and develop
              <i>
                <b className="purple">
                  {" "}
                  responsive React/Next.js applications, wallet-integrated user
                  flows, and high-performance component-driven frontends.{" "}
                </b>
              </i>
              <br />
              <br />
              I have strong experience translating complex DeFi workflows into{" "}
              <b className="purple">
                clean UX for DEX interfaces, bridge dashboards, portfolio views,
                and real-time trading screens
              </b>
              .
              <br />
              <br />
              My focus is building fast, intuitive, and reliable frontend
              experiences that make blockchain products easier to use.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>GET IN TOUCH</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="tel:+918770118463"
                  className="icon-colour home-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
