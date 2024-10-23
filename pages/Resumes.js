import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

import { Tabs, Tab } from "react-bootstrap";
export default function Resumes() {
  function WithLabelExample({ now, label }) {
    return (
      <ProgressBar
        now={now}
        label={`${label}%`}
        className="custom-progress"
        animated
        
       
      >
        <div
          className="progress-bar custom-progress-bar"
          style={{ width: `${now}%` }}
        >
          <div className="label">
          {label}%
          </div>
        </div>
      </ProgressBar>
    );
  }

  return (
    <div>
      <section id="Resume">
        <br /> <br />
        <br />
        <br />
        <h1 align="center" id="head-resume">
          
          My Resume
        </h1>
        <br /> <br />
        <br />
        <Container>
          <Row className="row1">
            <Col className="col1">
              <Tabs
                defaultActiveKey="Educations"
                id="fill-tab-example"
                className="mb-3 tabs"
                fill
              >
                <Tab eventKey="Educations" title="Educations">
                  <div>
                    <br />
                    <h2>Education Quality</h2>

                    <br />
                    <Col lg={9} md={11}>
                      <div className="edex">
                        <h3>Front End Development</h3>
                        <p className="opacity-75">
                          Edex Tech It solution (05/2024-11/2024)
                        </p>
                        <p id="mark">4.00/5</p>
                        <p className="opacity-75">
                          I&#39;ve earned a front-end development certificate,
                          mastering HTML, CSS, JavaScript, and modern frameworks
                          to build responsive, dynamic web applications.
                        </p>
                      </div>
                    </Col>
                    <br />
                    <br />
                    <Col lg={9} md={11}>
                      <div className="edex">
                        <h3>BE in Mechanical</h3>
                        <p className="opacity-75">
                          Hindusdan College of Engineering and Tech (2019-2023)
                        </p>
                        <p id="mark">3.80/5</p>
                        <p className="opacity-75">
                          I&#39;ve completed my Bachelor&#39;s degree in Mechanical
                          Engineering with a CGPA of 7.3 and no backlogs.
                        </p>
                      </div>
                      <br />
                    </Col>
                    <br />

                    <Col lg={9} md={11}>
                      <div className="edex">
                        <h3>Higher Secondary School Education</h3>
                        <p className="opacity-75">
                          DKG Hr Sec School (2017-2019)
                        </p>
                        <p id="mark">5.00/5</p>
                        <p className="opacity-75">
                          I completed my secondary education with a
                          specialization in Bio-Maths, equipping me with a
                          strong analytical foundation in both biological
                          sciences and mathematics, essential for my academic
                          pursuits in engineering.
                        </p>
                      </div>
                      <br />
                    </Col>
                  </div>
                </Tab>
                <Tab eventKey="Skills" title="Skills">
                  <br />
                  <br />
                  <Row>
                  <Col md={12} lg={6}>
                    <h2> Development Skills</h2>
                    <br />
                    <br />
                    <div className="dev-skills">
                    <div className="skill-name">React js</div>
                    <WithLabelExample now={75} label={75} />
                    
                    <div className="skill-name">HTML 5</div>
                    <WithLabelExample now={95} label={95} />
                    <div className="skill-name">CSS 3</div>
                    <WithLabelExample now={85} label={85} />
                    <div className="skill-name">Java Script</div>
                    <WithLabelExample now={70} label={70} />
                    <div className="skill-name">Next js</div>

                    <WithLabelExample now={75} label={75} />
                    <div className="skill-name">React bootstrap</div>

<WithLabelExample now={80} label={80} />
                    </div>
                    
                  
                <br/> <br/>
                  </Col>
                  <Col md={12} lg={6}>
                    <h2 > Other Skills</h2>
                    <br />
                    <br />
                    <div className="dev-skills">
                    <div className="skill-name">Photoshop</div>
                    <WithLabelExample now={60} label={60} />
                    <div className="skill-name">Git & Github</div>

                    <WithLabelExample now={70} label={70} />
                    <div className="skill-name">MS Office</div>
                    <WithLabelExample now={75} label={75} />
                    <div className="skill-name">problem solving</div>
                    <WithLabelExample now={95} label={95} />
                  
                    </div>
                  </Col>
                  </Row>
                </Tab>
                <Tab eventKey="cv" title="cv" className="tab-content">
                  <div className="cv">
                    <div>
                      <a href="eswar.pdf">
                        <button className="btn">WATCH CV</button>
                      </a>
                    </div>
                  </div>
                    <br/> <br/> <br/>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
