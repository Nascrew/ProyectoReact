import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavigationBar } from './NavigationBar';
import '../assets/css/index.css'

export const CollapsibleExample  = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbarC">
      <Container>
        <Navbar.Brand href="#home"> <span> Vision Asistida </span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">M.Teams</Nav.Link>
            <NavDropdown title="SharePonit" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Subir Archivos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ver Archivos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <NavigationBar> </NavigationBar>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

