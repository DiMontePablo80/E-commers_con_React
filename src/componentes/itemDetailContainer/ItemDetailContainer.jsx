/* eslint-disable react/prop-types */
import { useState,useEffect } from "react";
import ItemDescription from "../itemDescription/ItemDescription";
import { useParams } from "react-router-dom";
import {getFirestore,doc,getDoc}from 'firebase/firestore';


const ItemDetailContainer = () => {
    const [producto,setProducto]=useState(null)
    const{prodId}=useParams()

    useEffect(()=>{
        const db = getFirestore()
        const productoDetail= doc(db,"productos",prodId)
        getDoc(productoDetail).then((res)=>{
            const data= res.data()
            const detalleProd={id:res.id,...data}
            setProducto(detalleProd)
        })
        .catch((error)=>console.log(error))

    },[prodId])
    return (
        <div>
            {
                producto?<ItemDescription producto={producto}/>
                :
                <h2>No hay más de lo que estas buscando</h2>
            }
            
        </div>
    );
};
export default ItemDetailContainer;