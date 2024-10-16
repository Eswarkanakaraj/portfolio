import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function Navbanner() {
  return (
    <Navbar
      expand="sm"
      className="background   p-4 border-bottom border-light "
    >
      <Container className="color ">
        <div className="flex2">
      <img 
              src="logo.png"
              width="60px"
              height="60px"
              className="align-top rounded-circle -auto mr-"
              alt="logo"

            />
            
        <Navbar.Brand href="#home" style={{ color: "rgba(196, 207, 222,0.6)" }} >
          Eswar k
        </Navbar.Brand>
        </div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav "
          className=" cursor-pointer bg-light"
          id="toggle"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" id="flex1">
            <Nav.Link href="#Home" style={{ color: "rgba(196, 207, 222,0.6)" }}>
            
              Home
            </Nav.Link>
            <Nav.Link
              href="#link"
              
              style={{ color: "rgba(196, 207, 222,0.6)" }}
            >
              Projects
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "rgba(196, 207, 222,0.6)" }}>
              Resume
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "rgba(196, 207, 222,0.6)" }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbanner;
