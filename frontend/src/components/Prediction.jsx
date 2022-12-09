import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Alert, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Prediction = () => {
  const [comment, setComment] = useState("Enter required info");
  const [comment2, setComment2] = useState("");
  const [atleast, setAtleast] = useState("");
  

  const [imgsrc, setimgsrc] = useState("");
  const [imgsrc2, setimgsrc2] = useState("");

  const [subject, setSubject] = useState("");
  const [prep, setPrep] = useState("");
  const [marks, setMarks] = useState("");
  const [marks2, setMarks2] = useState("");


  const postData = () => {
    if (subject !== "" && marks !== "" &&marks2 !== "") {
        setimgsrc2("");
        setimgsrc("");
        const data = JSON.stringify({opt: subject, mark1:marks, mark2:marks2})
      fetch("http://localhost:5000/prediction", {
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
         
          setComment(
            `Considering your givern marks your predicted marks are ${resBody.Message}`
          );
          
          setimgsrc("http://localhost:5000/Prediction1.jpeg");
          setimgsrc2("http://localhost:5000/Prediction2.jpeg")
          

          
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
            <Link to="/prob" className="text-decoration-none mt-2 ms-5 fs-5 fw-bold">Probability Portion</Link>
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
                <option value="math">math</option>
                <option value="reading">reading</option>
                <option value="writing">writing</option>
              </Form.Select>
            </Col>
            <Col md={4}>
            <Form.Control
                type="number"
                onChange={(e) =>{ console.log(e.target.value);setMarks(e.target.value)}}
                placeholder={subject === "math" ? "reading marks": subject === "reading" ? "math marks":subject === "writing" ? "math marks": "select the sibject first"}
              />
            </Col>
            <Col md={4}>
              <Form.Control
                type="number"
                onChange={(e) =>{ console.log(e.target.value);setMarks2(e.target.value)}}
                placeholder={subject === "math" ? "writing marks": subject === "reading" ? "writing marks":subject === "writing" ? "reading marks": "select the sibject first"}
                
              />
            </Col>
            <Col md={2}>
              <Button onClick={postData} variant="secondary">
                Submit
              </Button>{" "}
            </Col>
          </Row>
          {comment}
          <br />
    
          <Container className="p-5 d-flex justify-content-center">
            <img src={imgsrc} alt="" />
            <img src={imgsrc2} alt="" />

          </Container>
        </Alert>
      </Container>
    </div>
  );
};

export default Prediction;
;