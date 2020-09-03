import React from 'react';
import { Card, CardGroup, Button} from 'react-bootstrap';
import '../component/overlay.scss'

function Portfolio(props) {
    return (
<div className="alert border">
           
 <CardGroup>
 <div className="container">
 <Card className="bg-dark text-white">
  <Card.Img src="https://res.cloudinary.com/kwesiblack/image/upload/v1592311817/kwesiblack/home/14425491256_2027bce914_o_ncbxba.jpg" alt="Card image" className="image"/>
  <Card.ImgOverlay>
    <Card.Title>Okpogho</Card.Title>
    <Card.Text>
      An Ecommerce Demo Site built with the MERN Stack, with test payment integration
    </Card.Text>
    <Card.Text></Card.Text>
  </Card.ImgOverlay>
  <div class="overlay">
  <div className="text">Photography Website done in Gatsby<br></br><Button href="https://mongoose-com.herokuapp.com" target="_blank" rel="noopener noreferrer">View</Button></div>
  </div>
</Card>
  </div>
  <div className="container">
 <Card className="bg-dark text-white">
  <Card.Img src="https://res.cloudinary.com/kwesiblack/image/upload/v1592311817/kwesiblack/home/14425491256_2027bce914_o_ncbxba.jpg" alt="Card image" className="image fluid"/>
  <Card.ImgOverlay>
    <Card.Title>LASIMRA</Card.Title>
    <Card.Text>
    A Data collation site built with the MERN Stack
    </Card.Text>
    <Card.Text></Card.Text>
  </Card.ImgOverlay>
  <div class="overlay">
  <div className="text"><Button href="https://lasimra.herokuapp.com/" target="_blank" rel="noopener noreferrer">View</Button></div>
  </div>
</Card>
  </div>
  </CardGroup>  
  <div className="py-2"></div>
  <CardGroup>
 <div className="container">
 <Card className="bg-dark text-white">
  <Card.Img src="https://res.cloudinary.com/kwesiblack/image/upload/v1592311817/kwesiblack/home/14425491256_2027bce914_o_ncbxba.jpg" alt="Card image" className="image"/>
  <Card.ImgOverlay>
    <Card.Title>Akisok</Card.Title>
    <Card.Text>
    A blog built with Gatsby
    </Card.Text>
    <Card.Text></Card.Text>
  </Card.ImgOverlay>
  <div class="overlay">
  <div className="text"><br></br><Button href="https://www.akisok.com" target="_blank" rel="noopener noreferrer">View</Button></div>
  </div>
</Card>
  </div>
  <div className="container">
 <Card className="bg-dark text-white">
  <Card.Img src="https://res.cloudinary.com/kwesiblack/image/upload/v1592311817/kwesiblack/home/14425491256_2027bce914_o_ncbxba.jpg" alt="Card image" className="image fluid"/>
  <Card.ImgOverlay>
    <Card.Title>Kwesiblack Photography</Card.Title>
    <Card.Text>
      Photography Website built with  Gatsby
    </Card.Text>
    <Card.Text></Card.Text>
  </Card.ImgOverlay>
  <div class="overlay">
    <div className="text"><Button href="https://www.kwesiblack.com" target="_blank" rel="noopener noreferrer">View</Button></div>
    
  </div>
</Card>
  </div>
  </CardGroup>  
  </div>   
     
    );
}

export default Portfolio;