/* eslint-disable no-unused-vars */
import './Checkout.css';
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {collection,addDoc,updateDoc,doc,getDoc, getFirestore}from 'firebase/firestore'
import CardCheckout from "../cardCheckout/CardCheckout";

const Checkout = () => {
    const{carro,calcularTotal,vaciarCarro}=useContext(CartContext)

    const[nombre,setNombre]=useState("")
    const[apellido,setApellido]=useState("")
    const[telefono,setTelefono]=useState("")
    const[email,setEmail]=useState("")
    const[emailConfirmacion,setEmailConfirmacion]=useState("")
    const[ordenId,setOrdenId]=useState("")
    const[error,setError]=useState("")


    const manejoDeFormulario= (e)=>{
        e.preventDefault()

        if( !nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("no ingreso los datos requeridos")
            return
        }
        if( email !== emailConfirmacion){
            setError("los email no coinciden")
            return
        }

        const db= getFirestore()
        const orden={
            items:carro.map((prod)=>({
                id:prod.producto.id,
                nombre:prod.producto.nombre,
                precio:prod.producto.precio,
                cantidad:prod.cantidad
            })),
            total:calcularTotal(),
            fecha:new Date(),
            nombre:nombre,
            apellido:apellido,
            telefono:telefono,
            email:email
        }
        Promise.all(
            orden.items.map(async(productoOrden)=>{
                const productoRef= doc(db,"productos",productoOrden.id);
                const productoDoc= await getDoc(productoRef);
                const stockActual=productoDoc.data().stock;

                await updateDoc(productoRef,{
                    stock:stockActual - productoOrden.cantidad
                })
            })
        )
        .then(()=>{
            addDoc(collection(db,"ordenCompra"),orden)
            .then((docRef)=>{
                setOrdenId(docRef.id);
                vaciarCarro();
            })
            .catch((error)=>{
                setError("error al crear orden de compra")
            })
            
        })
        .catch((error)=>{
            setError("No se pudo actualizar el stock del producto. Vuelva a inentarlo")
        })
        
    }
    return (
        <>
            <h1 style={{textAlign:"center"}}>Finalizar Compra</h1>
            <hr/>
            <p>Detalle de la compra:</p>
            <div className="listaCheckout">
                {
                    carro.map((p)=>(
                        <CardCheckout key={p.producto.id} producto={p}/>    
                    ))
                }
            </div>
            <hr />
            <p className='total'>total de la compra: $ {calcularTotal()}</p>
            <hr />
            <h3 style={{textAlign:"center"}}>formulario de contacto: </h3>
            <div className="formulario">
                <form onSubmit={manejoDeFormulario}>
                <div>
                    <label htmlFor="">Nombre:</label>
                    <input type="text" onChange={(e)=>setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Apellido:</label>
                    <input type="text" onChange={(e)=>setApellido(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Telefono:</label>
                    <input type="number" onChange={(e)=>setTelefono(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Confirmar Email:</label>
                    <input type="email" onChange={(e)=>setEmailConfirmacion(e.target.value)} />
                </div>
                
                { error && <p style={{color:"red"}}>{error}</p>}

                <button type="submit">finalizar compra</button>

                { ordenId && (
                    <p style={{color:"green"}}>¡ gracias por tu compra!. Numero de orden: {ordenId} </p>
                )}
                

                
            </form>
            </div>
            

        </>
    );
};

export default Checkout;