import { useEffect, useState } from "react";
import './itemListContainer.css';
import ItemList from '../itemList/ItemList'
import { useParams } from "react-router-dom";
import {Spinner} from 'reactstrap'
import {getFirestore,collection,getDocs,query,where} from 'firebase/firestore'
const ItemListContainer = () => {

    const [listaProductos, setlistaProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoria } = useParams()
    
    useEffect(() => {
        setLoading(true)
        // se instancia base de datos
        const db = getFirestore()
        //filtrado de los productos
        const filtro=categoria ? query (collection(db,"productos"),where("categoria","==",categoria))
        : collection(db,"productos")
        //generocion de productos filtrados
        getDocs(filtro)
        .then((res)=>{
            const listaDb = res.docs.map((p)=>{
                return {id:p.id,...p.data()}
            })
            setlistaProductos(listaDb)

        })
        .catch((error)=> console.log(error))
        .finally(setLoading(false))

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