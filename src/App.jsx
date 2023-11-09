import{BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import BarraNav from './componentes/navBar/BarraNav'
import ItemListContainer from './componentes/itemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/itemDetailContainer/ItemDetailContainer'
import Acerca from './componentes/acerca/Acerca'
import Ubicacion from './componentes/ubicacion/Ubicacion'



function App() {

 

  return (
    <>

      <BrowserRouter>
          <BarraNav/>

          <Routes>

            <Route path='/' element={<div className='tarjetaProductos'><ItemListContainer/></div>}/>
            <Route path='/:categoria' element={<div className='tarjetaProductos'><ItemListContainer/></div>}/>
            <Route path='/Item/:prodId' element={<div className='tarjetaProductos'><ItemDetailContainer/></div>}/> 
            <Route path='/Acerca' element={<Acerca/>}/>
            <Route path='/Ubicacion' element={<Ubicacion/>}/>
            
          </Routes>   
        
        </BrowserRouter>
    </>
    
    
  )
}

export default App
