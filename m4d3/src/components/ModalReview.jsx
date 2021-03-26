import React, { useState } from "react";
import {
  Modal,
  Container,
  Row,
  Col,
  Button,
  Form,
  ListGroup,
} from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import apiData from "./api";
function ModalReview(props) {
  const [comment, newReview1] = useState();
  const [rate, newReview2] = useState();
  const [id, newReview3] = useState();
  const [review, setReviews] = useState([]);
  const [ratee, setRate] = useState(1);
  const fetchCommentsHandler = async () => {
    try {
      const id = props.asin.toString();

      const response = await fetch(apiData.url + `${id}/`, {
        headers: {
          Authorization: apiData.authKey,
        },
      });
      const reviews = await response.json();
      setReviews(reviews);
      console.log(review);
    } catch (error) {
      console.error(`API ERROR : ${error.message}`);
    }
  };
  const postReview = (e) => {};
  const postCommentsHandler = async () => {
    const newReview = {
      comment: comment,
      rate: rate,
      elementId: id,
    };
    try {
      const id = props.asin.toString();

      const response = await fetch(apiData.url + `${id}`, {
        method: "POST",
        body: JSON.stringify(newReview),
        headers: {
          "Content-Type": "application/json",
          Authorization: apiData.authKey,
        },
      });
      const reviews = await response.json();
    } catch (error) {
      console.error(`API ERROR : ${error.message}`);
    }
  };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Form>
                <Form.Group controlId={props.asin}>
                  <Form.Label>Id :</Form.Label>
                  <Form.Control
                    onChange={(e) => newReview3(props.asin)}
                    type="text"
                    value={props.asin}
                  />
                </Form.Group>
                <div>
                  <h5>Rating : {rate}</h5>
                  <StarRatingComponent
                    name={props.title}
                    starCount={5}
                    starColor={`#ffb400`}
                    value={() => ratee}
                    onStarClick={() => setRate}
                    onChange={(e) => newReview2(e.target.value)}
                  />
                </div>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Leave a review :</Form.Label>
                  <Form.Control
                    onChange={(e) => newReview1(e.target.value)}
                    as="textarea"
                    rows={5}
                  />
                  <a
                    onClick={() => postCommentsHandler()}
                    style={{
                      color: "#ffb400",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Post your review
                  </a>
                </Form.Group>
              </Form>
            </Col>
            <Col xs={12} md={6}>
              <img height="320" src={props.img}></img>
            </Col>
          </Row>

          <Row>
            <Col xs={6}></Col>
            <Col xs={6}>
              <a
                style={{
                  marginTop: "60px",
                  marginLeft: "60px",
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => {
                  fetchCommentsHandler();
                }}
              >
                See reviews
              </a>
            </Col>
            <Container>
              <ListGroup>
                {review.length > 0
                  ? review.map((review) => (
                      <ListGroup.Item key={review._id}>
                        {review.comment}
                      </ListGroup.Item>
                    ))
                  : console.log("nothing to show in here :/")}
              </ListGroup>
            </Container>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={(() => props.onHide, () => setReviews(""))}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalReview;
