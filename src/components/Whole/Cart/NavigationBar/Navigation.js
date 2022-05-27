import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'

const Navigation = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div>
      <Navbar fixed="top" bg="dark" expand="lg" variant="dark">
  <Container fluid>
    <Navbar.Brand href="#"></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px'  }}
        navbarScroll
      >
        <Nav.Link href="#action1" style={{fontSize: '20px'}}>Course <b style={{color: 'green'}}>Store.</b> </Nav.Link>
        <Nav.Link as={Link} to ={"/"}>Home</Nav.Link>
        <Nav.Link as={Link} to ={"/features"}>Features</Nav.Link>
        <Nav.Link as={Link} to ={"/pricing"}>Pricing</Nav.Link>
        <Nav.Link as={Link} to ={"/logout"} >Logout</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
  )
}

export default Navigation
