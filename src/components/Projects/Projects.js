import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bingo from "../../Assets/Projects/bingo.png";
import blog from "../../Assets/Projects/blog.png";
import chatify from "../../Assets/Projects/chatify.png";
import codeEditor from "../../Assets/Projects/codeEditor.png";
import emotion from "../../Assets/Projects/emotion.png";
import ethSendAndSwap from "../../Assets/Projects/eth-send-and-swap.png";
import leaf from "../../Assets/Projects/leaf.png";
import qodehr from "../../Assets/Projects/qodehr.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experience Highlights </strong>
        </h1>
        <p style={{ color: "white" }}>
          Frontend-focused highlights from Tokamak.network and InstaBit.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ethSendAndSwap}
              isBlog={false}
              title="Frontend Architecture for Web3 Products"
              description="Built scalable frontend architecture for decentralized applications using React, TypeScript, and modular component patterns to support complex product flows."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Wallet-Integrated User Experiences"
              description="Implemented secure wallet connection and transaction-signing flows with clear state handling, improving user trust and reducing interaction friction across DApp interfaces."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeEditor}
              isBlog={false}
              title="Real-Time Trading and Dashboard UI"
              description="Developed responsive dashboards and trading interfaces that visualize protocol data in real time and keep performance consistent under high-frequency updates."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="DeFi UX Simplification"
              description="Translated advanced DeFi concepts such as AMMs, bridges, vesting, and perpetual workflows into intuitive UI patterns for broader user adoption."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Performance and Accessibility Optimization"
              description="Improved frontend load performance, component rendering efficiency, and accessibility standards to deliver faster and more inclusive product experiences."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bingo}
              isBlog={false}
              title="Cross-Functional Product Delivery"
              description="Collaborated closely with design and backend teams to deliver production-ready features end-to-end, accelerating release cycles and improving UI quality consistency."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qodehr}
              isBlog={false}
              title="HR and Team Workflow Interfaces"
              description="Created structured workflow screens for hiring and team operations with clear forms, status views, and responsive layouts to support day-to-day productivity."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Awareness and Impact-Focused Web UI"
              description="Designed emotionally aware, content-first interfaces that balance readability and visual storytelling for educational and community-focused product experiences."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Content and Blog Platform UI"
              description="Implemented article and blog presentation components with reusable layouts, better content hierarchy, and responsive behavior across devices."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
