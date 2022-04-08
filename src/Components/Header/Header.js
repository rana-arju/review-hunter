import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    

    return (
        <div>
  <Navbar bg="primary" variant="dark" expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
        </LinkContainer> 
        <LinkContainer to="/review">
            <Nav.Link>Review</Nav.Link>
        </LinkContainer> 
        <LinkContainer to="/desboard">
            <Nav.Link>Desboard</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/blog">
            <Nav.Link>Blog</Nav.Link>
        </LinkContainer>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
        
    );
};

export default Header;
