import React from 'react';
import './App.css';

import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavBar() {
  return (
    <div class="custom-navbar">
    <Navbar expand="lg">
      <Navbar.Brand><img src={require('./images/logonav.png')} id="logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/places">Places</Nav.Link>
          <Nav.Link href="/faces">Faces</Nav.Link>
          <Nav.Link href="/life">Life</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default NavBar;
