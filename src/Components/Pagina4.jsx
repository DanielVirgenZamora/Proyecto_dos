import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa';


function Pagina4() {
  return (
    <div className='pag4'>
      <a className='p44' href="mailto:zdaniel647@gmail.com?subject=Interesado%20en%20tus%20servicios" target={'_blank'} > <FaEnvelope></FaEnvelope> </a> 
      <a className='p44' href="https://api.whatsapp.com/send?phone=%2B523122254975&text=Hola,%20vi%20tu%20página%20web%20y%20está%20genial,%20me%20gustaría%20trabajar%20contigo%20" target={'_blank'} > <FaWhatsapp></FaWhatsapp> </a>
      <a className='p44' href="https://www.instagram.com/danie.viza/" target={'_blank'}> <FaInstagram></FaInstagram> </a>
      <a className='p44' href="https://www.facebook.com/Daniel.vizar.gawes/" target={'_blank'} > <FaFacebookF></FaFacebookF> </a>
    </div>
  );
};

export default Pagina4;