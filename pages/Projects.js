import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaGithub, FaGlobe } from "react-icons/fa";

function Project() {
  return (
    <div>
      <section id="projects">
        <br /> <br /> <br />
        <br />
        <h1 id="head" align="center">My Projects</h1>
        <br />
        <Row className="g-5 m-2 ">
          <Col sm={12} md={6} lg={4}>
            <Card className="card1">
              <Card.Img src="calculator.png" height={"auto"} className="project-img" />
              <Card.Body>
                <div className="tittle-flex">
                  <Card.Title className="tittle">Calculator</Card.Title>
                  <div className="card-icon  ">
                    <a href="" target="blank" >
                      <div id="circle">
                        <FaGlobe className="icon" />
                      </div>
                    </a>
                    <a href="" target="blank">
                      <div id="circle">
                        <FaGithub className="icon" />
                      </div>
                    </a>
                  </div>
                </div>
                <Card.Text>
                  A simple calculator built with HTML, styled using CSS, and
                  powered by JS for performing basic arithmetic operations
                  efficiently
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="card1">
              <Card.Img src="weather.png" height={"auto"} className="project-img" />
              <Card.Body>
                <div className="tittle-flex">
                  <Card.Title className="tittle">Weather-app</Card.Title>
                  <div className="card-icon  ">
                    <a href="" target="blank">
                      <div id="circle">
                        <FaGlobe className="icon" />
                      </div>
                    </a>
                    <a href="" target="blank">
                      <div id="circle">
                        <FaGithub className="icon" />
                      </div>
                    </a>
                  </div>
                </div>
                <Card.Text>
                  A stunning weather app built with React, featuring dynamic
                  functionality, beautiful CSS styling, and real-time updates
                  for a modern user experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="card1">
              <Card.Img src="todo.png" height={"auto"} className="project-img"/>
              <Card.Body>
                <div className="tittle-flex">
                  <Card.Title className="tittle">To-Do app</Card.Title>
                  <div className="card-icon  ">
                    <a href="" target="blank">
                      <div id="circle">
                        <FaGlobe className="icon" />
                      </div>
                    </a>
                    <a href="" target="blank">
                      <div id="circle">
                        <FaGithub className="icon" />
                      </div>
                    </a>
                  </div>
                </div>
                <Card.Text>
                  A sleek To-Do app built with React and React Bootstrap,
                  offering an intuitive interface for managing tasks efficiently
                  and stylishly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="card1">
              <Card.Img src="form.png" height={"auto"} className="project-img"/>
              <Card.Body>
                <div className="tittle-flex">
                  <Card.Title className="tittle">Signin Form</Card.Title>
                  <div className="card-icon  ">
                    <a href="" target="blank">
                      <div id="circle">
                        <FaGlobe className="icon" />
                      </div>
                    </a>
                    <a href="" target="blank">
                      <div id="circle">
                        <FaGithub className="icon" />
                      </div>
                    </a>
                  </div>
                </div>
                <Card.Text>
                  
A responsive form project using React, EmailJS for seamless submissions, and robust validation to ensure accurate and user-friendly input handling.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="card1">
              <Card.Img src="Maths.png" height={"auto"} className="project-img"/>
              <Card.Body>
                <div className="tittle-flex">
                  <Card.Title className="tittle">OWN</Card.Title>
                  <div className="card-icon  ">
                    <a href="" target="blank">
                      <div id="circle">
                        <FaGlobe className="icon" />
                      </div>
                    </a>
                    <a href="" target="blank">
                      <div id="circle">
                        <FaGithub className="icon" />
                      </div>
                    </a>
                  </div>
                </div>
                <Card.Text>
                  An innovative project built with Redux, React Bootstrap,Css,
                  Next.js, exploring number theories through a sleek and
                  interactive interface.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="card1">
              <Card.Img src="triplechoco.png" height={"auto"} className="project-img"/>
              <Card.Body>
                <div className="tittle-flex">
                  <Card.Title className="tittle">Triple-Choco</Card.Title>
                  <div className="card-icon  ">
                    <a href="" target="blank">
                      <div id="circle">
                        <FaGlobe className="icon" />
                      </div>
                    </a>
                    <a href="" target="blank">
                      <div id="circle">
                        <FaGithub className="icon" />
                      </div>
                    </a>
                  </div>
                </div>
                <Card.Text>
                  a delightful website showcasing my own homebaked creations,
                  built with Next.js, React Bootstrap, SASS, and Strapi for a
                  seamless experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Project;
