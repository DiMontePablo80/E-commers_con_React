/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import ItemCount from '../itemCount/ItemCount';

const ItemDescription = ({producto}) => {

    const onAdd=(contador)=>{
        alert("se agrego "+  contador +" unidades de "+ producto.nombre)
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
                    <ItemCount inicial={1} cantidad={producto.stock} onAdd={onAdd} />
                    
                </Card.Body>
            </Card>
        </div>
        
    );
};

export default ItemDescription;