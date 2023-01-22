import "./Contact.scss";
import {
  Form,
  FormControl,
  Container,
  Row,
  Button,
  ListGroup,
} from "react-bootstrap";

function Contact() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Container className="contact">
      <h2>Contact me</h2>
      <Row className="contact-wrapper">
        <Form onSubmit={submitHandler}>
          <ListGroup className="input-container">
            <ListGroup.Item variant="dark">
              <FormControl type="text" placeholder="Your full names..." />
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="input-container">
            <ListGroup.Item variant="dark">
              <FormControl type="email" placeholder="Your email..." />
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="input-container">
            <ListGroup.Item variant="dark">
              <FormControl
                as="textarea"
                rows={3}
                type="text"
                placeholder="Your message..."
              />
            </ListGroup.Item>
          </ListGroup>
          <Button type="submit" variant="outline-dark">
            Submit
          </Button>{" "}
        </Form>
      </Row>
    </Container>
  );
}

export default Contact;
