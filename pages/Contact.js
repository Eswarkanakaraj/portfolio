
import { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
   Name: "",
    
    email: "",
    Mobile: "",
    Message: "",
   

  });

  const [errors, setErrors] = useState({
   Name: "",
    
    email: "",
    Mobile: "",
    Message: "",
    
  });

  const [mounted, setMounted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  useEffect(() => {
    setMounted(true); // Ensures the component is mounted before rendering dynamic content
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.Name) newErrors.Name = " Name is required";
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.Mobile) {
      newErrors.Mobile = "Mobile Number is required";
    } else if (formData.Mobile.length < 10) {
      newErrors.Mobile = "Mobile Number must be at least 10 characters long";
    }
    if(!formData.Message)newErrors.Message="Meassage is empty"
  

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const successsMsg=()=>{
  return(
  <div>Thank You,Your Message has been sent Success</div>
  )
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data submitted:", formData);
      setFormData({
       Name: "",
        
        email: "",
       Mobile: "",
       Message: "",

       
      });
      setShowSuccess(true);
      
      // Optionally hide the success message after a few seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000); 
    }
  };

  // Only render after the component is mounted
  if (!mounted) return null;


  return (
    <div>
      <Container>
        <section id='Contact'>
          <br /><br /><br />
          <h1 align="center">Contact With Me</h1>
          <br /><br /><br />
          <Row>
            <Col md={12} lg={4}>
              <Card>
                <Card.Img variant="top" src="/contact.jpg" height="auto" className='p-4' />
                <Card.Body>
                  <Card.Title id='contact-name'>Eswar k</Card.Title>
                  <Card.Text>
                    <p>Jr Front End Developer</p>
                    <p>Phone: +91 9597167916</p>
                    <p>Email: eswarkanagaraj@gmail.com</p>
                    <br />
                    <p>FIND ME IN</p>
                    <div className="d-flex all-icons">
                      <div className="bannerIcon">
                        <a href="https://twitter.com" target="blank">
                          <FaTwitter className="icon" />
                        </a>
                      </div>
                      <div className="bannerIcon">
                        <a href="https://github.com/dashboard" target="blank">
                          <FaGithub className="icon" />
                        </a>
                      </div>
                      <div className="bannerIcon">
                        <a href="https://instagram.com" target="blank">
                          <FaInstagram className="icon" />
                        </a>
                      </div>
                      <div className="bannerIcon">
                        <a href="https://linkedin.com" target="blank">
                          <FaLinkedinIn className="icon" />
                        </a>
                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br /><br />
            </Col>
            <Col md={12} lg={8}>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <form id="form" className="form" onSubmit={handleSubmit}>
                      <div className="inputs">
                        <label htmlFor="Name">Name</label>
                        <input
                          type="text"
                         autoComplete='off'
                         
                          id="Name"
                          value={formData.Name}
                          onChange={handleChange}
                        />
                        {errors.Name && <p className="error">{errors.Name}</p>}

                       

                        <label htmlFor="email">EMAIL</label>
                        <input
                          type="email"
                         autoComplete='off'
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}

                        <label htmlFor="Mobile">Mobile Number</label>
                        <input
                          
                        autoComplete='off'
                          id="Mobile"
                          value={formData.Mobile}
                          onChange={handleChange}
                        />
                        {errors.Mobile && <p className="error">{errors.Mobile}</p>}

                       <label htmlFor='Message'>
                        Message
                       </label>
                       <textarea
                          autoComplete='off'
                         id='Message'
                         value={formData.Message}
                         onChange={handleChange}
                       />
                       {errors.Message && <p className="error">{errors.Message} </p>}
                     
                       
                        <button className="glow-on-hover" type="submit">
                         SEND MESSAGE
                        </button>
                        <div className='bg-danger'>{showSuccess && successsMsg()}</div>
                      </div>
                    </form>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}
