import React from 'react'
import './App.scss';
import { Col, Row, Alert } from 'react-bootstrap';
import ReactTextRotator from 'react-text-rotator';
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

function App() {
	const content = [
		{
			text: 'Full Stack Developer.',
			className: 'h1 text-center introRed',
			animation: 'fade',
		},
		{
			text: 'MERN Stack.',
			className: 'h1 text-center introRed',
			animation: 'fade',
    },
    {
			text: 'Gatsby.',
			className: 'h1 text-center introRed',
			animation: 'fade',
    },
    {
			text: 'Photographer.',
			className: 'h1 text-center introRed',
			animation: 'fade',
		},
	];

	return (
		<div className="bg vh-100">
			<Row>
				<Col md={7}>
					<Row>
						<Col className="py-5">
							<div >
              <a
									href="https://github.com/keresifon"
									target="_blank"
                  rel="noopener noreferrer"
                  className="p-3"
								>
									<FaGithub className="h1  iconColor" />
								</a>
								<a
									href="https://www.facebook.com/KwesiFBlack"
									target="_blank"
                  rel="noopener noreferrer"
                  className="p-3"
								>
									<FaFacebook className="h1  iconColor" />
								</a>
								<a
									href="https://twitter.com/kwesiblak"
									target="_blank"
                  rel="noopener noreferrer"
                  className="p-3"
								>
									<FaTwitter className="h1  iconColor" />
								</a>
								
								<a
									href="https://www.instagram.com/keresifon/?hl=en"
									target="_blank"
                  rel="noopener noreferrer"
                  className="p-3"
								>
									<FaInstagram className="h1  iconColor" />
								</a>
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<div className="container ml-5 py-5">
                <div className="welcome">Welcome</div>
								<div className="h1  introColor">Hi, I'm Kere Ekpenyong</div>
								<div>
									<ReactTextRotator content={content} time={5000} startDelay={2000} />
								</div>
							</div>
						</Col>
					</Row>
          
          <Row className="pbl-6 justify-content-between">
          <Col md={{ span: 6, offset: 3 }}> {''}
          
</Col>
            
          </Row><Row className=" justify-content-between">
          <Col md={{ span: 8, offset: 3 }} > 
          <Alert variant="outline-danger" className="alert border">
  <Alert.Heading>Credits & Dependencies</Alert.Heading>
  <p>
    The partial face in the background is Ella, one of my twin toddlers.
  </p>
  <hr />
  <p className="mb-0">
    <Row>
      <Col><div ><ul>
      <li>react</li>
      <li>react-bootstrap</li>
      <li>bootstrap</li>
     
    </ul></div></Col>
      <Col><div >
        <ul>
      <li>react-icons</li>
      <li>react-text-rotator</li>
      <li>react-icons</li>
    </ul></div>
    </Col>
    <Col><div >
        <ul>
        <li>sass</li>
      
    </ul></div>
    </Col>
    </Row>
    
    
    
  </p>
</Alert>
</Col>
            
          </Row>
				</Col>
				<Col md={1} className="m-0 p-0 d-lg-none">
					<div className="thirdColumn  pbl-5 border-left border-bottom"> </div>
					<div className="pbl-5 border-right"> </div>
					<div className="thirdColumn  pbl-5 border-left border-bottom border-top"></div>
					<div className="pbl-5 border-right border-danger"></div>
					<div className="thirdColumn  pbl-5 border-left  border-top"></div>
				</Col>
				<Col md={4} className="thirdColumn vh-100"></Col>
			</Row>
		</div>
	);
}

export default App;
