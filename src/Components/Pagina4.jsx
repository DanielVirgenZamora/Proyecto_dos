import React from 'react';
import Foote from '../Footer';

function Pagina4() {
  return (
    <div>
      <div className='p4'>
        <h2>Contact</h2>
        <div>
          <form className='for' action="">
            <label htmlFor="email">Email</label>
            <input placeholder='Introduce tu email' name='email' type="text" />
            <label htmlFor="mensaje">Mensaje</label>
            <input name='mensaje' placeholder='Escribe tu mensaje' type="text" />
            <button>Enviar</button>
          </form>
        </div>
      </div>
      <Foote></Foote>
    </div>
  );
};

export default Pagina4;