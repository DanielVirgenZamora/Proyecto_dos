import Acceso from './Acceso';
import './App.css';

import Login from './Login';
import Bienvenida from './Bienvenida';
import { useContext } from 'react';
import { Datas} from './Context/Contexto';


function App() {
  


  return (
    <div className="App">
    <Datas>
      <Acceso></Acceso>
    </Datas>
    </div>
  );
};

export default App;
