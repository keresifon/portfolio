import React from 'react';
import { Navbar, Nav  } from 'react-bootstrap';



function Footer(props) {
  return (
   <div  >
    <Navbar bg="dark" variant="dark"   className="footer" >
    <Nav className="mr-auto">
    <Nav.Link>This site is set up and running on AWS Amplify</Nav.Link>
    </Nav>
    <Nav className="ml-auto">
    <a className= "alert" href="http://aws3.akanchawa.com">S3 Bucket Version</a> 

    </Nav>
    
    
  </Navbar>

  </div>
  );
}

export default Footer;
