import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Alert, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Prob = () => {
  const [comment, setComment] = useState("Enter required info");
  const [comment2, setComment2] = useState("");
  const [atleast, setAtleast] = useState("");
  

  const [imgsrc, setimgsrc] = useState("");
  const [imgsrc2, setimgsrc2] = useState("");

  const [subject, setSubject] = useState("");
  const [prep, setPrep] = useState("");
  const [marks, setMarks] = useState("");

  const postData = () => {
    if (subject !== "" && prep !== "" && marks !== "") {
        const data = JSON.stringify({score: marks, subject, prep})
      fetch("http://localhost:5000/Probability", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",

          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
      })
        .then((res) => {
          //setresStatus(res.status);
          if (res.status === 200) return res.json();
          else throw new Error(res.status);
        })
        .then((resBody) => {
          let value = parseFloat (resBody.Message);

          setComment(
            `Probabilty of getting upto ${marks} in ${subject ==="r"? "reading": subject ==="m"? "math": subject ==="w"? "writng":null} with prep ${prep === "n" ? "not completed": "completed"} is ${resBody.Message}`
          );
          setComment2(
            `Probabilty of getting atleast ${marks} in ${subject ==="r"? "reading": subject ==="m"? "math": subject ==="w"? "writng":null} with prep ${prep === "n" ? "not completed": "completed"} is `
          );
          setimgsrc("http://localhost:5000/ProbPartHist.jpeg");
            setAtleast(1.0000-value)

          
        })
        .catch((err) => {})
        .finally(() => {});
    }
  };


  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="mt-1">Probability Portion</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                to="/prediction"
                className="text-decoration-none mt-2 ms-5 fs-5 fw-bold"
              >
                Prediction Portion
              </Link>
              <Link
                to="/"
                className="text-decoration-none mt-2 ms-5 fs-5 fw-bold"
              >
                Statistic Portion
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="my-3">
        <Alert key="s" variant="secondary">
          <Row>
            <Col md={2}>
              <Form.Select
                style={{ width: "200px" }}
                onChange={(e) => {
                  console.log(e.target.value);
                  setSubject(e.target.value);
                }}
                aria-label="Default select example"
              >
                <option>Subject</option>
                <option value="m">math</option>
                <option value="r">reading</option>
                <option value="w">writing</option>
              </Form.Select>
            </Col>
            <Col md={2}>
              <Form.Select
                style={{ width: "200px" }}
                onChange={(e) => {
                  console.log(e.target.value);
                  setPrep(e.target.value);
                }}
                aria-label="Default select example"
              >
                <option>Prepearation</option>
                <option value="n">none</option>
                <option value="c">completed</option>
              </Form.Select>
            </Col>
            <Col md={2}>
              <Form.Control
                type="number"
                onChange={(e) =>{ console.log(e.target.value);setMarks(e.target.value)}}
                placeholder="marks"
              />
            </Col>
            <Col md={3}>
              <Button onClick={postData} variant="secondary">
                Submit
              </Button>{" "}
            </Col>
          </Row>
          {comment}
          <br />
          {comment2}{atleast}
          <Container className="p-5 d-flex justify-content-center">
            <img src={imgsrc} alt="" />
          </Container>
        </Alert>
      </Container>
    </div>
  );
};

export default Prob;
;