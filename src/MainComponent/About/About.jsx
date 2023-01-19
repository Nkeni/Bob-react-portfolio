import "./About.scss";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import lab from "../../images/lab.jpg";

function About() {
  return (
    <Container>
      <Row className="about">
        <h2>About me</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ex
          obcaecati repudiandae maxime odit aperiam nam! Deserunt reiciendis in
          maxime fuga ex, qui beatae doloremque non neque nam magnam eveniet
          voluptatem minus blanditiis laboriosam, harum amet perferendis, sit
          rem! Corrupti reprehenderit voluptatem commodi aliquid, ad cumque
          assumenda eveniet quo officiis.
        </p>
      </Row>

      <Row className="about1">
        <h2>What I do</h2>

        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={lab} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={lab} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={lab} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default About;
