import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="foter">
      <button
        className="elevator-button"
        style={{ position: "fixed", bottom: "100px", right: "20px" }}
      >
        back to top
      </button>
      <div className="footer">
        <Row>
          <Col xs={6} sm={6} md={3}>
            this is a footer
          </Col>
          <Col xs={6} sm={6} md={3}>
            some contacts
          </Col>
          <Col xs={6} sm={6} md={3}>
            some links
          </Col>
        </Row>
      </div>
    </Container>
  );
}
export default Footer;
