import { useState, useContext } from "react";

import axios from "axios";
import { DatosValidacion } from "./Context/Contexto";




  const Login = () =>  {
    

   const {logged} = useContext(DatosValidacion);

    const {setLogged} = useContext(DatosValidacion);
    const {setToken} = useContext(DatosValidacion);

    const baseUrl = "https://ms-discord-upy5mhs63a-rj.a.run.app";

  const [values, setValues] = useState({
    email:"zdaniel647@gmail.com",
    discordId:"835286767602237470",
  });
  

    const handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    setValues((prevValues) => ({
      ...prevValues,
      
      [e.target.name]: e.target.value,
    }));
  };

  const enviar = () => {

    axios
      .post(`${baseUrl}/auth/login`, values)
      .then((res) => {
        console.log(res);
        console.log(res.data.token);
        return res.data.token;
      })
      .then((token) => {
        setToken(token);
        setLogged(true);
      });
    };

    const submit = (e) => {
    e.preventDefault();
    enviar();
  };


  
      return (
        <>
        
<form className="form" onSubmit={submit}>
        <div className="bola1">
              <div className="bola2">
                <div className="bola3">
                  <div className="bola4">
                    <label className="letras" htmlFor="email">Email</label>
                      <input 
                        type="text" 
                        name='email'
                        id='email'
                        placeholder='Email'
                        required
                        className='impu'
                        value={values.email}
                        onChange={handleChange}
                      />
                  </div>
                </div>
              </div>
            </div>

        <div className="bola1">
              <div className="bola2">
                <div className="bola3">
                  <div className="bola4">
                    <label className="letras" htmlFor="email">Discord ID</label>
                      <input 
                        type="text" 
                        name='discordid'
                        id='discordid'
                        placeholder='Discord ID'
                        required
                        className='impu'
                        value={values.discordId}
                        onChange={handleChange}
                        
                      />
                  </div>
                </div>
              </div>
            </div>

        <div className="bola1">
              <div className="bola5">
                <div className="bola6">
                    <button className="bola7" type='submit'>Access</button>
                </div>
              </div>
            </div>
      </form>

      </>
    );
  };
  





  export default Login;