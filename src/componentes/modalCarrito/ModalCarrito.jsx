import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartWidget from '../cartWidget/CartWidget';
import Carrito from '../carrito/Carrito';
import './modalCarrito.css'
import { CartContext } from '../../context/CartContext';


function ModalCarrito() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {vaciarCarro,calcularTotal} =useContext(CartContext)




  return (
    <>
      <div className='cuerpo'>
      <Button variant="secondary" onClick={handleShow}>
        <CartWidget/>  
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carrito/>        
        </Modal.Body>
        <hr />
        <p className='total'><h3>Total compra: $ {calcularTotal()}</h3></p>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Finalizar Compra
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Seguir Comprando
          </Button>
          <Button variant='danger'onClick={vaciarCarro}>Vaciar Carrito</Button>
          <hr/>          
        </Modal.Footer>
      </Modal>
      </div>      
      </>
  );
}

export default ModalCarrito;