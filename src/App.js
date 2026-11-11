import {Routes, Route} from 'react-router-dom'
import BarraDeNavegacion from './componentes/BarraDeNavegacion'
import Contacto from './paginas/Contacto'

function App() {
  return (
    <div>
      <BarraDeNavegacion/>

     <Routes>
      <Route path="/contacto" element={<Contacto/>}/>
     </Routes> 
    </div>
  );
}

export default App
