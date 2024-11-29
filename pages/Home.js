import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiHtml5, SiAdobephotoshop, SiNextdotjs,  } from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function HomePage() {
  const [text] = useTypewriter({
    words: ["Front End Developer.", "React Developer.", "UI Designer."],
    loop:true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="Main">
      <section id="Home">
        <Container>
          <Row>
            <Col md={12} sm={12} lg={6}>
            <div id="Br">
              <br className="br-home" /> <br className="br-home" /> <br className="br-home" />
              <br className="br-home" />
              <br  className="br-home"/>
              </div>
              <div>WELCOME TO MY WORLD</div>
              <h1 className="text-decoration-none">
                Hi, I&#39;m <span id="name">Eswar K</span>
              </h1>
              <h2 className="text-4xl font-bold text-white">
                a <span>{text}</span>
                <Cursor
                  cursorBlinking="true"
                  cursorStyle="|"
                  cursorColor="#ff014f"
                />
              </h2>
              <div>
                An as a motivated front-end developer, I am eager to build
                engaging and responsive websites. With a solid foundation in
                HTML, CSS, JavaScript, and React, I focus on turning designs
                into smooth, interactive user experiences.
              </div>
              <br />
              <br />
              <div className="flex-2">
                <Row>
                  <Col md={12}>FIND ME IN</Col>

                  <Col md={12}>
                    <div className="d-flex all-icons">
                      <a href="https://github.com/Eswarkanakaraj" target="blank">
                        <div className="bannerIcon  ">
                          <FaGithub className="icon" />
                        </div>
                      </a>
                      <a href="https://www.linkedin.com/in/eswarkanakaraj/" target="blank">
                        <div className="bannerIcon">
                          <FaLinkedinIn className="icon" />
                        </div>
                      </a>
                      <a href="" target="blank">
                        <div className="bannerIcon">
                          <FaTwitter className="icon" />
                        </div>
                      </a>
                      <a href="https://www.instagram.com/eswar._02?igsh=bHlzc2Z4Mms4eXZ2" target="blank">
                        <div className="bannerIcon">
                          <FaInstagram className="icon" />
                        </div>
                      </a>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>BEST SKILLS IN</Col>
                  <Col md={12}>
                    <div className="d-flex all-icons">
                      <div className="bannerIcon">
                        <FaReact className="icon" />
                      </div>

                      <div className="bannerIcon">
                        <SiHtml5 className="icon" />
                      </div>

                      <div className="bannerIcon">
                        <SiNextdotjs className="icon" />
                      </div>

                      <div className="bannerIcon">
                        <SiAdobephotoshop className="icon" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col md={12} sm={10} lg={6}>
              <div id="con1">
                <br />
                <div className="border"></div>
                <img
                  className="img-responsive my-img"
                  width={"500"}
                  height={"auto"}
                  src="eswar1.png"
                  alt="myimg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
