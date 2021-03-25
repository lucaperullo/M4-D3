import { useState, useEffect } from "react";
import NavBar from "./NavBar";

import horror from "../assets/horror.json";

import {
  Button,
  Card,
  Container,
  Row,
  Col,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import ModalReview from "./ModalReview";

function Home() {
  const [modalShow, setModalShow] = useState(false);
  const [current, setCurrent] = useState([...horror]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const currentBooksHandler = (data) => {
    setSearchTerm("");
    setCurrent(data);
  };

  const filterSearch = () => {
    setSearchResults(
      current.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  useEffect(() => {
    filterSearch();
  }, [searchTerm]);

  return (
    <>
      <NavBar currentBooksHandler={currentBooksHandler} />
      <Container className="mainContent">
        <InputGroup className="mb-3">
          <FormControl
            onChange={handleChange}
            value={searchTerm}
            placeholder="Search a book.."
            aria-label="Search a book.."
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        <h1 style={{ marginBottom: "50px", color: "white" }}>
          Just an avarage website
        </h1>
        <Row>
          {searchTerm.length > 0
            ? searchResults.map((book) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="book"
                  key={book.asin}
                >
                  <Card>
                    <Card.Img
                      className="image"
                      variant="top"
                      height="200"
                      src={book.img}
                      alt={book.title}
                    />
                    <Card.Body
                      style={{
                        height: "170px",
                      }}
                    >
                      <Card.Title
                        style={{
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {book.title}
                      </Card.Title>
                      <Card.Text>{book.price}</Card.Text>

                      <Button
                        onClick={() => setModalShow(true)}
                        variant="danger"
                      >
                        Review Me
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            : current.map((book) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="book"
                  key={book.asin}
                >
                  <Card>
                    <Card.Img
                      className="image"
                      variant="top"
                      height="200"
                      src={book.img}
                      alt={book.title}
                    />
                    <Card.Body
                      style={{
                        height: "170px",
                      }}
                    >
                      <Card.Title
                        style={{
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {book.title}
                      </Card.Title>
                      <Card.Text>{book.price}</Card.Text>

                      <Button
                        onClick={() => setModalShow(true)}
                        variant="danger"
                      >
                        Review Me
                      </Button>
                    </Card.Body>
                  </Card>
                  <ModalReview
                    asin={book.asin}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </Col>
              ))}
        </Row>
      </Container>
    </>
  );
}
export default Home;
