import "./Projects.scss";
import { Row, Container, Card, CardGroup, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import pic from "../../images/STM.png";
import pic1 from "../../images/figureAFM.png";
import pic2 from "../../images/kpfmfigure.png";
import paper1 from "../../../src/publication1.pdf";

function Projects() {
  return (
    <Container>
      <Row className="projects">
        <Col xl="9">
          <div className="project-pic">
            <img src={pic} alt="paper1" />
          </div>
        </Col>
        <Col xl="3">
          {" "}
          <div className="description">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
              aliquid?
            </p>

            <div>
              <a href={paper1} target="blank" rel="noreferrer">
                <Button variant="outline-dark">Pdf</Button>{" "}
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
      <Row className="projects">
        <Col xl="9">
          <div className="project-pic">
            <img src={pic1} alt="paper2" />
          </div>
        </Col>
        <Col xl="3">
          {" "}
          <div className="description">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
              aliquid?
            </p>

            <div>
              <Button variant="outline-dark">Pdf</Button>{" "}
            </div>
          </div>
        </Col>
      </Row>
      <hr />
      <Row className="projects">
        <Col xl="9">
          <div className="project-pic">
            <img src={pic2} alt="paper2" />
          </div>
        </Col>
        <Col xl="3">
          {" "}
          <div className="description">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
              aliquid?
            </p>

            <div>
              <Button variant="outline-dark">Pdf</Button>{" "}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
