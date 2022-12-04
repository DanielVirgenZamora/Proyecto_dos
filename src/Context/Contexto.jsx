import  React,{ createContext, useState } from 'react';
export const DatosValidacion = createContext();

export const Datas = ({children}) =>{
  const [token, setToken] = useState(null);
  const [logged, setLogged] = useState(false);

  return(
    <DatosValidacion.Provider value= {{token,setToken, logged, setLogged}}>{children}</DatosValidacion.Provider>
  )
}