import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import { Tabs, Tab,} from 'react-bootstrap';
export default function Resumes() {
  return (
    <div>
      <section id="Resume">
        <br/>  <br/><br/><br/>
        <h1 align="center" >Resume</h1>
        <br/> <br/>
        <Container >
          <Row className="row1">
            <Col className="col1"   >
            <Tabs 
      defaultActiveKey="Educations"
      id="fill-tab-example"
      className="mb-3 tabs"
      fill
    > 
    
      <Tab eventKey="Educations" title="Educations">
       
       <div>
        <br/>
        <h1>Education Quality</h1>
        
       <br/>
          <Col lg={9} md={11} >
          <div className="edex">
          <h3 >
            Front End Development
          </h3>
          <p>
            Edex Tech It solution (05/2024 to 11/2024)
          </p>
          <p id="mark">4.00/5</p>
          <p>I&#39;ve earned a front-end development certificate, mastering HTML, CSS, JavaScript, and modern frameworks to build responsive, dynamic web applications.</p>

        </div>
        </Col>
        <br/>
        <br/>
          <Col lg={9} md={11}>
          <div className="edex">
          <h3 >
            Front End Development
          </h3>
          <p>
            Edex Tech It solution (05/2024 to 11/2024)
          </p>
          <p id="mark">4.00/5</p>
          <p>I&#39;ve earned a front-end development certificate, mastering HTML, CSS, JavaScript, and modern frameworks to build responsive, dynamic web applications.</p>

        </div>
        <br/>
        </Col>
        <br/>
       
          <Col lg={9} md={11}>
          <div className="edex">
          <h3 >
            Front End Development
          </h3>
          <p>
            Edex Tech It solution (05/2024 to 11/2024)
          </p>
          <p id="mark">4.00/5</p>
          <p>I&#39;ve earned a front-end development certificate, mastering HTML, CSS, JavaScript, and modern frameworks to build responsive, dynamic web applications.</p>

        </div>
        <br/>
        </Col>
        </div>
      </Tab>
      <Tab eventKey="Skills" title="Skills">
        Tab content for Profile
      </Tab>
      <Tab eventKey="Resume" title="Resume" className="tab-content">
        Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab Tab content for Loooonger Tab
      </Tab>
    
    </Tabs>
    </Col>
          
          </Row>
        </Container>
       
      </section>
    </div>
  );
}
