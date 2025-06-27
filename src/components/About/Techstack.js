import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiTensorflow,
  SiScipy,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiMysql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango title="Django" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi title="FastAPI" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn title="Scikit-Learn" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy title="NumPy" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas title="Pandas" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPlotly title="Matplotlib (via Plotly)" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow title="TensorFlow" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScipy title="SciPy" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql title="PostgreSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 title="HTML5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 title="CSS3" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql title="MySQL" />
      </Col>
    </Row>
  );
}

export default Techstack;
