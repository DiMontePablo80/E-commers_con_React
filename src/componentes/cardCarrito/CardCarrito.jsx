/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './cardCarrito.css';
import {CartContext} from "../../context/CartContext"
import { useContext } from 'react';

function CardCarrito({producto}) {

    const{eliminarProducto}= useContext(CartContext)
  return (
    
    <Card className='estiloCard' style={{ width: '10rem' }}>
      <Card.Img variant="top" src={producto.producto.img} />
      <Card.Body >
        <Card.Title>{producto.producto.nombre}</Card.Title>
        <Card.Text>Precio:${producto.producto.precio}</Card.Text>
        <Card.Text>Cantidad:{producto.cantidad}</Card.Text>
        <hr/>
        <Card.Text className='totalProducto'>total: {producto.producto.precio * producto.cantidad}</Card.Text>
      </Card.Body>
      <Button onClick={()=>eliminarProducto(producto.id)} >quitar</Button>
    </Card>
  );
}

export default CardCarrito;