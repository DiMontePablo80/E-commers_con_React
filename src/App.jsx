import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import BarraNav from './componentes/navBar/BarraNav'
import ItemListContainer from './componentes/itemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/itemDetailContainer/ItemDetailContainer'
import Acerca from './componentes/acerca/Acerca'
import Ubicacion from './componentes/ubicacion/Ubicacion'
import {CartProvider} from "./context/CartContext"
import Checkout from "./componentes/checkout/Checkout"


function App() {
  
 

  return (
    <>

      <BrowserRouter>
        <CartProvider>
          <BarraNav />

          <Routes>

            <Route path='/' element={<div className='tarjetaProductos'><ItemListContainer /></div>} />
            <Route path='/:categoria' element={<div className='tarjetaProductos'><ItemListContainer /></div>} />
            <Route path='/Item/:prodId' element={<div className='tarjetaProductos'><ItemDetailContainer /></div>} />
            <Route path='/Acerca' element={<Acerca />} />
            <Route path='/Ubicacion' element={<Ubicacion />}/>
            <Route path='/checkout' element={<Checkout/>}/>

          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>


  )
}

export default App