import React from 'react';
import { NavLink } from 'react-router-dom';
import firma from './Components/Img/Firma.png'
import emblema from './Components/Img/Enblema.png'


const Foote =() =>{
  return (
    <div className='skull'>
        <div className='fot'>
            <nav>
    
        <div className='navfot'>
          <NavLink  to ="/">Home</NavLink>
        <NavLink to="Pagina2">About me</NavLink>
        <NavLink to="Pagina3">Portfolio</NavLink>
        <NavLink to="Pagina4">Contact</NavLink>
        </div>
    </nav>
    <div className='lorefot' >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at doloribus tempora, itaque temporibus commodi blanditiis praesentium dolorem magni illum quasi explicabo quos adipisci nesciunt ad error et qui omnis.</p>
    </div>
         <div className='firmae'>

          <img  className='firma2' src={firma}  alt="" />
          <img className='firma2' src={emblema} alt="" />
         </div>
        </div>
   
    </div>
  );
};

export default Foote;