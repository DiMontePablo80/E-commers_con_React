/* eslint-disable react/prop-types */
import {Card} from 'react-bootstrap'

const CardCheckout = ({producto}) => {
    return (
        <Card className='estiloCard' style={{ width: '7rem' }}>
            <Card.Img variant="top" src={producto.producto.img} />
            <Card.Body >
                <Card.Title>{producto.producto.nombre}</Card.Title>
                <Card.Text>Precio:${producto.producto.precio} x Cantidad:{producto.cantidad}</Card.Text>
            </Card.Body>

        </Card>
    )
}

export default CardCheckout;