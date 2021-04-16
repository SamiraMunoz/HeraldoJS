import React from 'react';
import { Nav, Navbar, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';

function NavbarB() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Noticias</Nav.Link>
          <Nav.Link href="#home">Judiciales</Nav.Link>
          <Nav.Link href="#home">Sociales</Nav.Link>
          <Nav.Link href="#home">Clasificados</Nav.Link>
          <Nav.Link href="#home">Cultura</Nav.Link>
          <Nav.Link href="#home">Entretenimiento</Nav.Link>
          <NavDropdown title="Otras" id="basic-nav-dropdown">
            <NavDropdown.Item href="#home">Rincón Juniorista</NavDropdown.Item>
            <NavDropdown.Item href="#home">Región</NavDropdown.Item>
            <NavDropdown.Item href="#home">Mundo</NavDropdown.Item>
            <NavDropdown.Item href="#home">Pais</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-danger">Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarB;
