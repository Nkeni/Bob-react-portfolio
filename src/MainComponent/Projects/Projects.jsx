import "./Projects.scss";
import { Row, Container, Card, CardGroup, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import pic from "../../images/lab.jpg";
import pic1 from "../../images/img1.jpg";
import paper1 from "../../../src/publication1.pdf";

function Projects() {
  return (
    <Container>
      <Row className="projects">
        <Col xl="3" className="project">
          <div className="project-pic1"></div>
          <div className="description">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
              aliquid?
            </p>
          </div>
          <div>
            <a href={paper1} target="blank" rel="noreferrer">
              <Button variant="outline-dark">Pdf</Button>{" "}
            </a>
          </div>
        </Col>

        <Col xl="3" className="project">
          <div className="project-pic2"></div>
          <div className="description">
            <p>Coming soon...</p>
          </div>
          <div>
            <Button variant="outline-dark">Pdf</Button>{" "}
          </div>
        </Col>

        <Col xl="3" className="project">
          <div className="project-pic3"></div>
          <div className="description">
            <p>Coming soon...</p>
          </div>
          <div>
            <Button variant="outline-dark">Pdf</Button>{" "}
          </div>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}

export default Projects;
