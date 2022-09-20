import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';

function Navb() {
  return (
    
    <BrowserRouter>
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
           <Nav className="me-auto">
            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    <div>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default Navb;