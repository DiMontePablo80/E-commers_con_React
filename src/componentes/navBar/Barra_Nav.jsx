import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';

function Barra_Nav() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Lino Stile</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#pricing">Sobre Lino Stile</Nav.Link>
            <NavDropdown title="Catalogo" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Camisas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pantalones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Calzados</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Nueva Colección</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Promociones</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Barra_Nav;