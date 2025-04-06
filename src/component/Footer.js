import React from 'react';
import { Navbar, Nav  } from 'react-bootstrap';


function Footer(props) {
  return (
   <div  >
    <Navbar bg="dark" variant="dark"   className="footer" >
    <Nav className="mr-auto">
    <Nav.Link>This site is hosted and accessible via Cloudflare tunneling </Nav.Link>
    </Nav>
    <Nav className="ml-auto">
    <a className= "alert" href="https://keresifon.com">© 2025. All Rights Reserved.</a> 

    </Nav>
    
  </Navbar>

  </div>
  );
}

export default Footer;
