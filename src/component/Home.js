import React from 'react';
import Photo from './Photo';
import ListGroup from 'react-bootstrap/ListGroup';

function Home() {
  return (
    <div>
      <h1 style={{textAlign:"center",color:"red"}}>You Are in Home Now</h1>
      <Photo />
      <ListGroup>
      <ListGroup.Item>No style</ListGroup.Item>
      <ListGroup.Item variant="primary">Primary</ListGroup.Item>
      <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
      <ListGroup.Item variant="success">Success</ListGroup.Item>
      <ListGroup.Item variant="danger">Danger</ListGroup.Item>
      <ListGroup.Item variant="warning">Warning</ListGroup.Item>
      <ListGroup.Item variant="info">Info</ListGroup.Item>
      <ListGroup.Item variant="light">Light</ListGroup.Item>
      <ListGroup.Item variant="dark">Dark</ListGroup.Item>
    </ListGroup>
    </div>
  );
}

export default Home;

