import React from 'react';
import { useContext } from 'react';
import { DatosValidacion } from './Context/Contexto';
import Login from './Login';
import Bienvenida from './Bienvenida';

function Acceso() {
const {logged} = useContext(DatosValidacion)
  return (
    <div>{logged ? <Bienvenida></Bienvenida> : <Login></Login>}</div>
  );
};

export default Acceso;