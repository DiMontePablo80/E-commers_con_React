/* eslint-disable react/prop-types */

// creacion del contexto
import { createContext,useState } from "react";
export const CartContext=createContext()

export const CartProvider=({children})=>{
    //estado global del contexto
    const[carro,setcarro]=useState([])
    
    // funcionalidades del contexto

    const addToCard=(producto,cantidad)=>{
        if(!estaEnCarrito(producto.id)){
            setcarro((prev)=> [...prev,{producto,cantidad}])
        }
        else{
            setcarro(producto)
        }         
    }
    const estaEnCarrito=(itemId)=>{
        return carro.some((i)=>i.id===itemId)
        
    }
    const totalProductos=()=>{
        let cantProd=0
        carro.forEach((prod)=> cantProd+= prod.cantidad)
        return cantProd
    }
    const eliminarProducto=(productoEliminar)=>{
        let indice = carro.findIndex(prod => prod.id == productoEliminar)
        carro.splice(indice, 1)
        setcarro(carro)
    }
    const calcularTotal=()=> {
            return carro.reduce((acumulador, producto) => acumulador + producto.producto.precio * producto.cantidad, 0)
        }
    const vaciarCarro=()=>{
        let carro=[]
        setcarro(carro)
    }

    return(
        <CartContext.Provider value={
            {
                carro,
                setcarro,
                addToCard,
                estaEnCarrito,
                totalProductos,
                calcularTotal,
                vaciarCarro,
                eliminarProducto
            }
        }>
            {children}
        </CartContext.Provider>

    )
}
