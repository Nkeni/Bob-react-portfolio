import "./About.scss";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container className="about-wrapper">
      <Row className="about">
        <h2>About me</h2>
        <p>
          I am a nano sciensist with a goal of gaining fundamental experience in
          physics of materials through research activities. Bridging the gap
          between Industry and scientific research as a pivotal ingredient
          towards next generation technological advancement.
        </p>
      </Row>

      <Row className="about1">
        <Col xl="7" className="about-intro">
          <h2>What I do</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore a
            quaerat sapiente earum inventore quos modi culpa animi quas,
            quibusdam sed aliquid reprehenderit quasi optio, ipsa cupiditate
            maiores delectus neque, corporis iusto tempora? Architecto
            voluptates reiciendis praesentium temporibus! Libero, eaque
            laboriosam neque delectus mollitia placeat autem adipisci laudantium
            sint labore.
          </p>
        </Col>
        <Col xl="5" className="about-pic"></Col>
      </Row>
    </Container>
  );
}

export default About;
