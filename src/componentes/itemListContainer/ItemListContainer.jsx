import { useEffect,useState } from "react";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [listaProductos,setlistaProductos]= useState([])
    const {categoria}=useParams()

    useEffect(()=>{
        fetch('/simuladorAPI.json')
        .then((res)=> res.json())
        .then((res)=>{
            if(categoria){
                const filtrado= res.filter((productos)=>productos.categoria==categoria)
                setlistaProductos(filtrado)
            }
            else{
                setlistaProductos(res)
            }
        })
        
        .catch((error)=>console.log(error))

    },[categoria])


    return (
        <div>
            {
            listaProductos.length==0?
                <p>no hay el producto que estas buscando</p>
                
            
            :listaProductos.map((productos)=>
                <ItemList key={productos.id} producto={productos}/>
            )
            }
            
        </div>
    );
};

export default ItemListContainer;