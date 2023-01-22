import "./Home.scss";
import { Container, Row, Col } from "react-bootstrap";
import pic from "../../images/babe.jpg";

function Home() {
  return (
    <Container className="home-wrapper">
      <Row className="home">
        <Col xl="6" className="pic"></Col>
        <Col xl="6" className="intro">
          <h3>Hi there, </h3>
          <h1>I am Bob Kyeyune</h1>
          <h2>nanoscientist</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
