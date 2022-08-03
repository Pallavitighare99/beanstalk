import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <>
  <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand style={{color:"white"}}>Beanstalk Edu</Navbar.Brand>

        
      </Container>
    </Navbar>
    </>
  )
}

export default Header