import "./Home.scss";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import About from "../About/About.jsx";
import resume from "../../../src/resume.pdf";

function Home() {
  return (
    <Container className="home-wrapper">
      <Row className="home">
        <Col sm={7} className="pic"></Col>
        <Col sm={5} className="intro">
          <h3>Hi there, </h3>
          <h1>I am Bob Kyeyune</h1>
          <h2>nanoscientist</h2>
          <div>
            <a href={resume} target="blank" rel="noreferrer">
              <Button variant="light">Resume</Button>{" "}
            </a>
          </div>
        </Col>
      </Row>

      <Row>
        <Card className="text-center my-5">
          <Card.Body>
            <h2>Who am I?</h2>
          </Card.Body>
        </Card>
      </Row>

      <Row>
        <About />
      </Row>
    </Container>
  );
}

export default Home;
