// import Link from 'next/link';
// import { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

// function Navbanner() {
//   const [expanded, setExpanded] = useState(false);

//   const handleNavClick = () => {
//     setExpanded(false);
//   };

//   return (
   
//     <Navbar
//       expand="sm"
//       className="background p-4 border-bottom border-light"
//       expanded={expanded} // Control the collapse state
//     >
//       <Container className="color">
//         <div className="flex2">
//           <img
//             src="logo.png"
//             width="50px"
//             height="50px"
//             className="align-top rounded-circle"
//             alt="logo"
//           />

//           <Navbar.Brand
//             href="#home"
//             style={{ color: "rgba(196, 207, 222,0.6)" } }
//           >
//             Eswar K
//           </Navbar.Brand>
//         </div>
//         <Navbar.Toggle
//           aria-controls="basic-navbar-nav"
//           className="cursor-pointer bg-light container "
//           id="toggle"
//           onClick={() => setExpanded(!expanded)} // Toggle the collapse
//         />
//         <Navbar.Collapse className="basic-navbar-nav " id='nav-contents'>
//           <Nav className="ms-auto " id="flex1">
//             <Nav.Link href="#Home"  style={{ color: "rgba(196, 207, 222,0.6)" }} onClick={handleNavClick}>
//               Home
              
//             </Nav.Link>
//             <Nav.Link as={Link} href="#my-img" style={{ color: "rgba(196, 207, 222,0.6)" }} onClick={handleNavClick}>
//               Projects
//             </Nav.Link>
//             <Nav.Link as={Link} href="/resume" style={{ color: "rgba(196, 207, 222,0.6)" }} onClick={handleNavClick}>
//               Resume
//             </Nav.Link>
//             <Nav.Link as={Link} href="/contact" style={{ color: "rgba(196, 207, 222,0.6)" }} onClick={handleNavClick}>
//               Contact
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
    
    
//   );
// }
// export default Navbanner;
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Correct import for react-scroll
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbanner() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // Collapse the menu on mobile when a link is clicked
  };

  return (
    <Navbar
      expand="sm"
      className="background p-4 border-bottom border-light"
      expanded={expanded}
    >
      <Container className="color">
        <div className="flex2">
          <img
            src="/logo.png" // Ensure the logo is in the public folder for Next.js
            width="50px"
            height="50px"
            className="align-top rounded-circle"
            alt="logo"
          />
          <Navbar.Brand href="#Home" style={{ color: "rgba(196, 207, 222,0.6)" }}>
            Eswar K
          </Navbar.Brand>
        </div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="cursor-pointer bg-light"
          id="toggle"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" id="flex1">
            {/* Use ScrollLink for smooth scrolling */}
            <ScrollLink
           
              to="Home" // Corresponding section ID
          
              offset={-220} // Adjust for navbar height
              duration={10} // Duration for scroll animation in ms
              style={{ color: "rgba(196, 207, 222,0.6)" }}
              className="nav-link"
              onClick={handleNavClick}
            >
              Home
            </ScrollLink>
            <ScrollLink
             activeClass="active"
              to="projects"
             
              offset={-20}
              duration={10}
              style={{ color: "rgba(196, 207, 222,0.6)" }}
              className="nav-link "
              onClick={handleNavClick}
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="Resume"
             
              offset={-700}
              duration={500}
              style={{ color: "rgba(196, 207, 222,0.6)" }}
              className="nav-link"
              onClick={handleNavClick}
            >
              Resume
            </ScrollLink>
            <ScrollLink
              to="Contact"
             
              offset={0}
              duration={50}
              style={{ color: "rgba(196, 207, 222,0.6)" }}
              className="nav-link"
              onClick={handleNavClick}
            >
              Contact
            </ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Navbanner;
