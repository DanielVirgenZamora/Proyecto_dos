import React from 'react';
import Foote from '../Footer';
import Skills from './Skills';

const Pagina1 = () => {
  return (
    <div>
        <div  className='banner'>
          <div className='banni' >
              <div className='textb'>
                <h2 className='letrasb'>I'm Daniel. a developer</h2>
                  <h2 className='letrasb'>passionnate on  design</h2>
                </div>
          </div>
          
        </div>
        <Skills></Skills>
        <Foote></Foote>
    </div>
  );
};

export default Pagina1;