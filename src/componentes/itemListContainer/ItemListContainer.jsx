import { useEffect, useState } from "react";
import './itemListContainer.css';
import ItemList from '../itemList/ItemList'
import { useParams } from "react-router-dom";
import {Spinner} from 'reactstrap'

const ItemListContainer = () => {

    const [listaProductos, setlistaProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoria } = useParams()

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
            fetch('/simuladorAPI.json') 
            .then((res) => res.json())
            .then((res) => {
                if (categoria) {
                    const filtrado = res.filter((productos) => productos.categoria === categoria)
                    setlistaProductos(filtrado)
                }
                else {
                    setlistaProductos(res)
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
        },1500)


            

    }, [categoria])


    return (
        <div>

            {
                loading ? <div className="spinner"><Spinner color= "secondary" className="spinnerReactstrap "/> </div>//spinner
                    :
                    <ItemList productos={listaProductos} />

            }

        </div>
    );
};

export default ItemListContainer;