import React, { useState } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import api from "./api";
function ModalReview(props) {
  const fetchCommentsHandler = async () => {
    try {
      const id = props.asin.toString();
      console.log(id);
      const response = await fetch(api.url + `${id}/`, {
        headers: {
          Authorization: api.authKey,
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(`API ERROR : ${error.message}`);
    }
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Using Grid in Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              {props.asin}
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={fetchCommentsHandler}>Fetch</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalReview;
