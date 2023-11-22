/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../itemCount/ItemCount';
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDescription = ({producto}) => {
    const[cantidad,setcantidad]=useState(0)
    const{addToCard,estaEnCarrito }=useContext(CartContext)

    const onAdd=(sumador)=>{
        setcantidad(sumador)
        addToCard(producto,sumador)
        estaEnCarrito(producto.id)
        
    }

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.img} />
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>{producto.descripcion}</Card.Text>
                    <Card.Text>Precio:${producto.precio}</Card.Text>
                    <hr />
                    {cantidad==0 ?<ItemCount inicial={1} cantidad={producto.stock} onAdd={onAdd} />
                    :
                    <Link to={'/'}><Button>Seguir comprando</Button></Link>
                    }
                    
                    
                </Card.Body>
            </Card>
        </div>
        
    );
};

export default ItemDescription;