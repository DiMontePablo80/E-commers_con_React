import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import CardCarrito from "../cardCarrito/CardCarrito";

const Carrito = () => {
    const{carro}=useContext(CartContext)
    
    return (
        <>
            {
            carro.length? carro.map((prod)=>
                <CardCarrito key={prod.id} producto={prod}/>
            )
            :
            <p>No hay productos en el carrito</p>
                      
            }
        </>
    );
};

export default Carrito;