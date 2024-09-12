import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Ishika Maheshwari </span>
            from <span className="purple"> Indore, India.</span>
            <br />
            I am currently working as a{" "}
            <span className="purple">Senior Software Developer</span> at
            Tokamak.network.
            <br />
            <br />
            I specialize in frontend engineering for decentralized applications,
            creating user-friendly interfaces for complex Web3 and DeFi
            workflows.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building responsive React and Next.js interfaces
            </li>
            <li className="about-activity">
              <ImPointRight /> Crafting Web3 UX for wallet and transaction flows
            </li>
            <li className="about-activity">
              <ImPointRight /> Converting protocol complexity into simple product
              experiences
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
