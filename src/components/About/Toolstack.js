import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiMacos,
  SiJupyter,
  SiAnaconda,
  SiPycharm,
  SiLinux,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos title="macOS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows title="Windows" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux title="Linux" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm title="PyCharm" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter title="Jupyter Notebook" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda title="Anaconda" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel title="Vercel" />
      </Col>
    </Row>
  );
}

export default Toolstack;
