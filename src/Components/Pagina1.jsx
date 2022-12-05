import React from 'react';
import Foote from '../Footer';
import Banner from './Img/Banner.jpg';
import Skills from './Skills';

const Pagina1 = () => {
  return (
    <div>
        <div className='banner'>
          <img className='banni' src={Banner} alt="" />
          <div className='textb'><h2>I'm Daniel. a developer passionnate on front-end</h2></div>
        </div>
        <Skills></Skills>
        <Foote></Foote>
    </div>
  );
};

export default Pagina1;