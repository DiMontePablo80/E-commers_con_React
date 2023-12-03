/* eslint-disable react/prop-types */
import './cardCheckout.css'

const CardCheckout = ({producto}) => {
    return (
        <div style={{ width: '10 rem' }}>
            <img className="imagenCarrito" src={producto.producto.img} />
            <p>{producto.producto.nombre}</p>
            <p>Precio:${producto.producto.precio} x Cantidad:{producto.cantidad}</p>
        </div>
    )
}

export default CardCheckout;