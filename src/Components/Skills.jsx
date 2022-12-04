import React from 'react';
import Js from './Img/Js.png';
import Html from './Img/Html.png';
import Css from './Img/Css.png';
import Reac from './Img/Reac.png';

function Skills() {
  return (
    <div className='skull'>
        <h2>Skills learned</h2>
        <div className='skill'>
        <img className='skilli' src={Html} alt="" />
        <img className='skilli' src={Css} alt="" />
        <img className='skilli' src={Js} alt="" />
        <img className='skilli' src={Reac} alt="" />   
        </div>
    </div>
  );
};

export default Skills;