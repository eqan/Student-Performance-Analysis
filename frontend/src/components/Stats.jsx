import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";




const Stats = () => {
    const [comment, setComment]= useState("Select any of the avaiable chart");
    const [imgsrc, setimgsrc] = useState("");
    const [imgsrc2, setimgsrc2] = useState("");

    const fetchCorealtion=()=>{
        
        fetch("http://localhost:5000/coRelation", {
            method: "post",
           //body: data,
          })
            .then((res) => {
              //setresStatus(res.status);
              if (res.status === 200) return res.json();
              else throw new Error(res.status);
            })
            .then((resBody) => {
                setComment("This shows reading and writing have very strong relation and math also have strong relation but not to that extent")
              
              setimgsrc('http://localhost:5000/corRelationPlot.jpeg');
              setimgsrc2("");
            })
            .catch((err) => {})
            .finally(() => {});
    }


    const boxplot=()=>{
        
        fetch("http://localhost:5000/boxplot", {
            method: "post",
           //body: data,
          })
            .then((res) => {
              //setresStatus(res.status);
              if (res.status === 200) return res.json();
              else throw new Error(res.status);
            })
            .then((resBody) => {
                setComment("Box plot show Female average is better than male moreover we can clearly see that there is less percentage male student at lowest end")
              
              setimgsrc('http://localhost:5000/GenderBoxPlot.jpeg');
              setimgsrc2("");

            })
            .catch((err) => {})
            .finally(() => {});
    }




    const densityPrepvsTest=()=>{
        
        fetch("http://localhost:5000/densityPrepvsTest", {
            method: "post",
           //body: data,
          })
            .then((res) => {
              //setresStatus(res.status);
              if (res.status === 200) return res.json();
              else throw new Error(res.status);
            })
            .then((resBody) => {
                setComment("Student who had prepared for exam clearly performed well")
              
              setimgsrc('http://localhost:5000/desnityTestPrep.jpeg');
              setimgsrc2("");

            })
            .catch((err) => {})
            .finally(() => {});
    }


    const GendervsGrades=()=>{
        
        fetch("http://localhost:5000/GendervsGrades", {
            method: "post",
           //body: data,
          })
            .then((res) => {
              //setresStatus(res.status);
              if (res.status === 200) return res.json();
              else throw new Error(res.status);
            })
            .then((resBody) => {
                setComment("Most students who earned A and B are female, most C’s and D’s are secured by males, and majority of students received B grade followed by C.")
              
              setimgsrc('http://localhost:5000/GendervsGradesBarChar.jpeg');
              setimgsrc2("");

            })
            .catch((err) => {})
            .finally(() => {});
    }

const pieCharts=()=>{
        
        fetch("http://localhost:5000/pieCharts", {
            method: "post",
           //body: data,
          })
            .then((res) => {
              //setresStatus(res.status);
              if (res.status === 200) return res.json();
              else throw new Error(res.status);
            })
            .then((resBody) => {
                setComment("Female are on higher side for grade A and B, and male are on the higher side for grade C, D and E. but most important female students got more F as compared to male students")
              
              setimgsrc('http://localhost:5000/femalePiechart.jpeg');
              setimgsrc2('http://localhost:5000/malePiechart.jpeg');

            })
            .catch((err) => {})
            .finally(() => {});
    }


  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="mt-1">Statistic Portion</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
           
              <NavDropdown  className="mt-1"title="Statistic Charts" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={fetchCorealtion} >Corelation b/w subjects</NavDropdown.Item>
                <NavDropdown.Item onClick={densityPrepvsTest}>Desnity Chart w.r.t prepration</NavDropdown.Item>
                <NavDropdown.Item onClick={boxplot}>Boxplot w.r.t Genders</NavDropdown.Item>
                <NavDropdown.Item onClick={GendervsGrades} >Bar Graph of Gender Grades</NavDropdown.Item>
                <NavDropdown.Item onClick={pieCharts}>Pie Chart of Both Genders Grades</NavDropdown.Item>

                
              </NavDropdown>
              <Link to="/prob" className="text-decoration-none mt-2 ms-5 fs-5 fw-bold">Probability Portion</Link>
              <Link
                to="/prediction"
                className="text-decoration-none mt-2 ms-5 fs-5 fw-bold"
              >
                Prediction Portion
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="my-3">
      <Alert key="s" variant="secondary">
          {comment}
          <Container className="p-5 d-flex justify-content-center">
            <img src={imgsrc} alt="" />
            <img src={imgsrc2} alt="" />
          </Container>
        </Alert>
      </Container>
    </div>
  );
};
export default Stats;
