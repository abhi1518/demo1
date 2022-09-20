import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

function About() {
  return (
    <div>
      <h1 style={{textAlign:"center",color:"green"}}>You Are in About Now</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    <br/>
     <br/>
     <br/>
     <>
     {[
       'Primary',
       'Secondary',
       'Success',
       'Danger',
       'Warning',
       'Info',
       'Light',
       'Dark',
     ].map((variant) => (
       <Card
         bg={variant.toLowerCase()}
         key={variant}
         text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
         style={{ width: '18rem' }}
         className="mb-2"
       >
         <Card.Header>Header</Card.Header>
         <Card.Body>
           <Card.Title>{variant} Card Title </Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
         </Card.Body>
       </Card>
     ))}
   </>

    </div>
  );
}

export default About;
