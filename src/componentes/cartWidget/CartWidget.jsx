/* eslint-disable no-unused-vars */
import { BiSolidCart } from "react-icons/bi";
import { CartContext} from "../../context/CartContext";
import { useContext } from "react";
import './cartWidget.css';
import { Link } from "react-router-dom";

const CartWidget=()=>{
    const{totalProductos}=useContext(CartContext)
    return(
        <> 
            <Link to={"/carrito"} className="estiloCart">
                <BiSolidCart className="estiloCart"/> 
                <span className="estiloCart">{totalProductos()}</span>
            </Link>
        </>
          
    )
}
export default CartWidget;

