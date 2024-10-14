import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function homePage() {
  return (
    <div>
      <section id="Home">
        <Container>
          <Row>
            <Col md={12} sm={12} lg={6}>
              <br /> <br /> <br />
              <br />
              <br />
              <div>welcome to my world</div>
              <h1>
                Hi, I'm <span id="name">Eswar K</span>
              </h1>
              <h3>a Frontend developer.</h3>
              <div>
                an As a motivated front-end developer, I am eager to build
                engaging and responsive websites. With a solid foundation in
                HTML, CSS, JavaScript, and React, I focus on turning designs
                into smooth, interactive user experiences. As a fresher, I am
                dedicated to learning and improving, staying current with
                industry trends, and writing clean, efficient code to deliver
                user-friendly solutions.
              </div>
              <br />
              <br />
             
              <div className="flex-2 d-flex ">
              <Row >
                <Col md={12}  >
                  find me In
                </Col>
                <Col md={12}>
                
                  <img src="one.svg" width={"30px"} />
                  
                  <img src="two.svg" width={"30px"} />
                  <img src="three.svg" width={"30px"} />
                  <img src="four.svg" width={"30px"} />
                </Col>
              </Row>
              <Row >
                <Col md={12} >find me In</Col>
                <Col md={12}>
    
                  <img src="five.svg" width={"30px"} />
                  <img src="six.svg" width={"30px"} />
                  <img src="seven.svg" width={"30px"} />
                  <img src="eight.svg" width={"30px"} />
                </Col>
              </Row>
              </div>
            </Col>
            <Col md={12} sm={12} lg={6}>
              <div id="con1">
         
                <div className="border"></div>
                <img
                  className="img-responsive my-img"
                  width={"500"}
                  height={"auto"}
                  src="eswar1.png"
                  alt="my img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

