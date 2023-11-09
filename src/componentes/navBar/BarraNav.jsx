import "./BarraNav.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ModalCarrito from '../modalCarrito/ModalCarrito';
import { Link } from 'react-router-dom';

function BarraNav() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className="estiloLI" to={"/"}><Navbar.Brand>Lino Stile</Navbar.Brand></Link>
        <Link className="estiloLI" to={"Ubicacion"}>Ubicacion</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
             <Nav.Link><Link className="estiloLI" to={"Acerca"}>Sobre Lino Stile</Link></Nav.Link>
            <NavDropdown title="Catalogo" id="collasible-nav-dropdown">
              <Link className="estiloLI" to={"remera"}> <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>   </Link>
              <Link className="estiloLI" to={"camisa"} ><NavDropdown.Item href="#action/3.2">Camisas</NavDropdown.Item> </Link>
              <Link className="estiloLI" to={"pantalon"} ><NavDropdown.Item href="#action/3.3">Pantalones</NavDropdown.Item></Link>
              <Link className="estiloLI" to={"calzado"}><NavDropdown.Item href="#action/3.4">Calzados</NavDropdown.Item></Link>
              <Link className="estiloLI" to={"cinto"}><NavDropdown.Item href="#action/3.5">Cinto</NavDropdown.Item></Link>
              <Link className="estiloLI" to={"sombrero"} ><NavDropdown.Item href="#action/3.6">Sombreros</NavDropdown.Item></Link>
              <Link className="estiloLI" to={"/"}><NavDropdown.Item href="#action/3.7">Ver todos</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link className="estiloLI" to={"promo"}><NavDropdown.Item href="#action/3.7">Promociones</NavDropdown.Item></Link>
              
            </NavDropdown>
            
          </Nav>
          <ModalCarrito/>            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNav;