import React from 'react';
import { Card, CardGroup, Button} from 'react-bootstrap';
import '../component/overlay.scss'

function Portfolio(props) {
    return (
<div className="alert border">
           
 <CardGroup>
 <div className="container">
 <Card className="bg-dark text-red">
  <Card.Img src="https://res.cloudinary.com/kwesiblack/image/upload/v1599143587/portfolio/blue-3329498_640_kckgys.png" alt="Card image" className="image"/>
  <Card.ImgOverlay>
    <Card.Title>Okpogho</Card.Title>
    <Card.Text>
      An Ecommerce Demo Site built with the MERN Stack, with test payment integration
    </Card.Text>
    <Card.Text></Card.Text>
  </Card.ImgOverlay>
  <div class="overlay">
  <div className="text"><Button variant="outline-danger" href="https://mongoose-com.herokuapp.com" target="_blank" rel="noopener noreferrer">View</Button></div>
  </div>
</Card>
  </div>
  <div className="container">
 <Card className="bg-dark text-red">
  <Card.Img src="https://res.cloudinary.com/kwesiblack/image/upload/v1599143903/portfolio/robot-507811_640_my5cmy.jpg" alt="Card image" className="image fluid"/>
  <Card.ImgOverlay>
    <Card.Title>LASIMRA</Card.Title>
    <Card.Text>
    A Data collation site built with the MERN Stack
    </Card.Text>
    <Card.Text></Card.Text>
  </Card.ImgOverlay>
  <div class="overlay">
  <div className="text"><Button variant="outline-danger" href="https://lasimra.herokuapp.com/" target="_blank" rel="noopener noreferrer">View</Button></div>
  </div>
</Card>
  </div>
  </CardGroup>  
  <div className="py-2"></div>
  <CardGroup>
 <div className="container">
 <Card className="bg-dark text-red">
  <Card.Img src="https://res.cloudinary.com/kwesiblack/image/upload/v1599144607/portfolio/writing-3374234_640_xnsxz0.jpg" alt="Card image" className="image"/>
  <Card.ImgOverlay>
    <Card.Title>Akisok</Card.Title>
    <Card.Text>
    A blog built with Gatsby
    </Card.Text>
    <Card.Text></Card.Text>
  </Card.ImgOverlay>
  <div class="overlay">
  <div className="text"><br></br><Button variant="outline-danger" href="https://www.akisok.com" target="_blank" rel="noopener noreferrer">View</Button></div>
  </div>
</Card>
  </div>
  <div className="container">
 <Card className="bg-dark text-red">
  <Card.Img src="https://res.cloudinary.com/kwesiblack/image/upload/v1599145319/portfolio/IMG_7330-2_hfjmfw.jpg" alt="Card image" className="image fluid"/>
  <Card.ImgOverlay>
    <Card.Title>Kwesiblack Photography</Card.Title>
    <Card.Text>
      Photography Website built with  Gatsby
    </Card.Text>
    <Card.Text></Card.Text>
  </Card.ImgOverlay>
  <div class="overlay">
    <div className="text"><Button variant="outline-danger" href="https://www.kwesiblack.com" target="_blank" rel="noopener noreferrer">View</Button></div>
    
  </div>
</Card>
  </div>
  </CardGroup>  
  </div>   
     
    );
}

export default Portfolio;