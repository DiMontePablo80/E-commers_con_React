import { useState } from 'react';
import './itemCount.css';
import Button from 'react-bootstrap/Button';
// eslint-disable-next-line react/prop-types
const ItemCount = ({inicial,cantidad,onAdd}) => {

    let [sumador,setsumador]= useState(inicial)
    let [stock,setstock]= useState(cantidad)

    
    function agregarProducto(){
        if(stock>1){
            setstock(stock-1)
           setsumador(sumador+1) 
        }
        
    }
    function quitarProducto(){
        if(sumador>1){
            setstock(stock+1)
           setsumador(sumador-1) 
        }
        
    }
   
    return (
        <div className='cuenta'>
            <Button variant="secondary" onClick={agregarProducto}>Agregar</Button>
            <Button variant="secondary"onClick={quitarProducto}>Quitar</Button>
            <p>Cantidad: {sumador}</p>
            <hr/>
            <p>stock: {stock}</p>
            <div>
            <Button variant="primary"onClick={()=>onAdd(sumador)}>Agregar al carrito</Button>
            </div>
        </div>
        
    );
};

export default ItemCount;