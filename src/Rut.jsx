import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './Nav';
import Pagina1 from './Components/Pagina1';
import Pagina2 from './Components/Pagina2';
import Pagina3 from './Components/Pagina3';
import Pagina4 from './Components/Pagina4';
import Error404 from './Components/Error404';
import Foote from './Footer';





function Rut() {

  return (
  <div className='rut'>
    <BrowserRouter>
      <Nav></Nav>
          <Routes>
            <Route path='/' element={<Pagina1/>}></Route>
            <Route path='/Pagina1' element={<Navigate to= {"/"}/>}></Route>
            <Route path='/Pagina2' element={<Pagina2/>}></Route>
            <Route path='/Pagina3' element={<Pagina3/>}></Route>
            <Route path='/Pagina4' element={<Pagina4/>}></Route>
            <Route path='/*' element={<Error404/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Rut;