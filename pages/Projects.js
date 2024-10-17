import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {FaGithub , FaGlobe} from "react-icons/fa"

function Project() {
  return (
    <div>
      <section id='projects'>
        <br/> <br/> <br/><br/>
        <h1 id='head'>My Projects</h1>
        <br/>
    <Row className="g-5 m-3 ">
      
        <Col  sm={6} md={6} lg={4}>
          <Card className="card1">
            <Card.Img src='calculator.png'  height={"auto"} />
            <Card.Body>
              <div className='tittle-flex'>
              <Card.Title className='tittle'>Calculator</Card.Title>
              <div className="card-icon  ">
              <a href="" target="blank" clas>
                <div id='circle'>
                        <FaGlobe className="icon"  />
                        </div> 
                    </a>
                    <a href="" target="blank">
                    <div id='circle'>
                        <FaGithub className="icon"  />
                        </div> 
                        
                    </a>
                      </div>
                    </div>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            
            </Card.Body>
          </Card>
         
            </Col>
          <Col  sm={6} md={6} lg={4}>
          <Card className="card1">
            <Card.Img src='weather.png' height={"auto"} />
            <Card.Body>
            <div className='tittle-flex'>
              <Card.Title className='tittle'>Weather-app</Card.Title>
              <div className="card-icon  ">
              <a href="" target="blank">
              <div id='circle'>
                        <FaGlobe className="icon"  />
                        </div> 
                    </a>
                    <a href="" target="blank">
               
                    <div id='circle'>
                        <FaGithub className="icon"  />
                        </div> 
                      
                    </a>
                      </div>
             </div>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col  sm={6} md={6} lg={4}>
          <Card className="card1">
            <Card.Img src='todo.png'  height={"auto"} />
            <Card.Body>
            <div className='tittle-flex'>
              <Card.Title className='tittle'>T0-Do app</Card.Title>
              <div className="card-icon  ">
              <a href="" target="blank">
              <div id='circle'>
                        <FaGlobe className="icon"  />
                        </div> 
                    </a>
                    <a href="" target="blank">
               
                    <div id='circle'>
                        <FaGithub className="icon"  />
                        </div> 
                      
                    </a>
                      </div>
             </div>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col  sm={6} md={6} lg={4}>
          <Card className="card1">
            <Card.Img src='form.png'  height={"auto"} />
            <Card.Body>
            <div className='tittle-flex'>
              <Card.Title className='tittle'>Signin Form</Card.Title>
              <div className="card-icon  ">
              <a href="" target="blank">
              <div id='circle'>
                        <FaGlobe className="icon"  />
                        </div> 
                    </a>
                    <a href="" target="blank">
               
                    <div id='circle'>
                        <FaGithub className="icon"  />
                        </div> 
                      
                    </a>
                      </div>
             </div>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col  sm={6} md={6} lg={4}>
          <Card className="card1">
            <Card.Img src='Maths.png'  height={"auto"} />
            <Card.Body>
            <div className='tittle-flex'>
              <Card.Title className='tittle'>OWN</Card.Title>
              <div className="card-icon  ">
              <a href="" target="blank">
              <div id='circle'>
                        <FaGlobe className="icon"  />
                        </div> 
                    </a>
                    <a href="" target="blank">
                    <div id='circle'>
                        <FaGithub className="icon"  />
                        </div> 
                      
                    </a>
                      </div>
             </div>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col  sm={6} md={6} lg={4}>
          <Card className="card1">
            <Card.Img src='triplechoco.png'  height={"auto"} />
            <Card.Body>
            <div className='tittle-flex'>
              <Card.Title className='tittle'>Triple-Choco</Card.Title>
                      <div className="card-icon  ">
              <a href="" target="blank">
              <div id='circle'>
                        <FaGlobe className="icon"  />
                        </div> 
                    </a>
                    <a href="" target="blank">
               
                    <div id='circle'>
                        <FaGithub className="icon"  />
                        </div> 
                      
                    </a>
                      </div>
             </div>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
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