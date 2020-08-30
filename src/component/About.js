import React from 'react';
import Experience from './Experience';
import { Accordion, Card } from 'react-bootstrap'
import Skills from './Skills';
import Education from './Education';

function About(props) {
	return (

        <div className="alert border vh-80">
		<div >
        A Software Engineer with 18+ years' experience building web applications. 
        Full Stack developer  
        Led the design of the flagship educational product for Socketworks Limited. Joined as a web developer and over the years, rose to lead the company's technology team!

		</div>
        <div>
        
<Accordion >
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0" >
    => Work Experience
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body><Experience /></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
    => Skills
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body><Skills/></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
    => Education
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body><Education/></Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
        </div>
        
        
        </div>
	);
}

export default About;
