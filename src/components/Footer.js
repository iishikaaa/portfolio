import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Ishika Maheshwari</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="tel:+918770118463"
                style={{ color: "white" }}
                rel="noopener noreferrer"
                aria-label="Call Ishika Maheshwari"
              >
                <AiFillPhone style={{ transform: "scaleX(-1)" }} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:ishikamaheshwari8989@gmail.com"
                style={{ color: "white" }}
                rel="noopener noreferrer"
                aria-label="Email Ishika Maheshwari"
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
