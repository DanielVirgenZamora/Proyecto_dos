import React from 'react';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { DatosValidacion } from './Context/Contexto';
import Bolaverde from './Img/Bolaverde.png';
import GEMIDO from './Img/GEMIDO.mp3';
import Rut from './Rut';



const Bienvenida = () => {


    const [tiempo, setTiempo] = useState(false);
    const [tiempo2, setTiempo2] = useState(false);

    const [checked, setChecked] = useState(false);
    const [data, setData] = useState(null);
    const baseUrl = "https://ms-discord-upy5mhs63a-rj.a.run.app";
    const {token} = useContext(DatosValidacion);

    async function checkToken() {
      
        axios
          .get(`${baseUrl}/auth/check`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          })
          .then((res) => {
            setData(res.data);
            setTiempo(true);

            setInterval(() => {
              setTiempo(false)
            }, 2000);


            setTimeout(() => {
              setTiempo2(true);
            }, 2000);
            

            setInterval(() => {
              setTiempo2(false);
            }, 4800);

            setTimeout(() => {
              setChecked(true);
            }, 5000);
            
            console.log(res);
          });
      }

      useEffect(() => {
        checkToken();
      }, []);

    return (
      <div><>
          {tiempo2 && <div>
            <div><audio src={GEMIDO} autoPlay></audio></div>
            <div className='bolaverde' ><img className='bolaverdeimg' src={Bolaverde} alt="verificado" /></div>
            <h2 className='saludo'>Welcome {data.username}</h2>
            </div>}
            {tiempo && <h2 className='carga'>Loading ● ● ● </h2>}

            {checked ? <Rut></Rut> : null}
        </></div>
    );
};

export default Bienvenida;