import React from 'react';
import { Navbar, Nav  } from 'react-bootstrap';


function Footer(props) {
  return (
   <div  >
    <Navbar bg="dark" variant="dark"   className="footer" >
    <Nav className="mr-auto">
    <Nav.Link>This site is set up and running on AWS S3 Bucket - to test pipeline</Nav.Link>
    </Nav>
    
    
  </Navbar>

  </div>
  );
}

export default Footer;
