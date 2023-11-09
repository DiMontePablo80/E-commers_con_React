/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ItemList({producto}) {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <hr />
        <Link to={`/item/${producto.id}`}><Button variant="secondary">ver detalle</Button></Link>
      </Card.Body>
    </Card>
  );
}
export default ItemList;