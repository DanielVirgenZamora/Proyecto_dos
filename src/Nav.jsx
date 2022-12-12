import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    
      <nav className='navi2'>
        <div className='logo'>
          <NavLink className={"botoav"} to={"/"}></NavLink>
        </div>
        <div className='navi'>
          <NavLink id='partnavi' className={
            ({isActive})=>(isActive ? "activado" : null)} to ="/">Home</NavLink>
        <NavLink className={
            ({isActive})=>(isActive ? "activado" : null)} to="Pagina2">About me</NavLink>
        <NavLink className={
            ({isActive})=>(isActive ? "activado" : null)}to="Pagina3">Portfolio</NavLink>
        <NavLink className={
            ({isActive})=>(isActive ? "activado" : null)}to="Pagina4">Contact</NavLink>
        </div>
        
    </nav>
    
    
  );
};

export default Nav;