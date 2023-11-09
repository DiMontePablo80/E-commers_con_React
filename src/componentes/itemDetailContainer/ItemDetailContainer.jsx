/* eslint-disable react/prop-types */
import { useState,useEffect } from "react";
import ItemDescription from "../itemDescription/ItemDescription";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto,setProducto]=useState(null)
    const{prodId}=useParams()

    useEffect(()=>{
        fetch('/simuladorAPI.json')
        .then((respuesta)=>respuesta.json())
        .then((respuesta)=>{
            const found =respuesta.find((item)=>item.id==prodId)
            setProducto(found)
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