import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState, useEffect } from "react";

import logo from '../assets/aradragon.png';
import Pol from '../assets/pol.svg';
import Posr from '../assets/posr.svg';



function Navbar() {

  const dragon =
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgw7TErGnelkXNgEWZJS0mwFrO0LkwXVamzUQS0TQPUEwbnNgDINDaIGrZZBlzLHpzS9p5grDQ3ScuY0O5VABf4cdTfk3fRvV1SGKmqCO6EggRjOQQliBIkBQsiU5A5LlEzMsIM73wBawMniK1yZ2aJcFEyROwVYo3vElekn179NejOjjZpkIUuQsTGtdw/s320/pulikyalik.png';

    // use el tema del almacenamiento local si está disponible o configure un tema claro______inicio_____
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  // actualizar estado al alternar
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  // establezca el estado del tema en el almacenamiento local en el montaje y también actualice el almacenamiento local en el cambio de estado
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // agregue un atributo de tema de datos personalizado a la etiqueta html requerida para actualizar el tema usando DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  // use el tema del almacenamiento local si está disponible o configure un tema claro______ fin _____
  
  return (
    <>
    <div className="navbar bg-base-100 fixed z-10">
    <div className="navbar-start">
        <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 4 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li className="font-bold"><Link to="/inicio">SEDE  CONCETRACIÓN ESCOLAR MISAK</Link></li>
          
        </ul>
        </div>
        <img src={dragon} style={{ width: '170px',height: '60px'}}/>
    </div>
    {/* _______________________________________ pcs _________________________________________________________ */}
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li className="font-bold"><Link to="/inicio">SEDE  CONCETRACIÓN ESCOLAR MISAK</Link></li>          
        </ul>
    </div>
    
    <div className="navbar-end">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        : :
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <li><Link to="https://portafolio-arandom.vercel.app/">Info Desarrollador</Link></li>
        
        <li>
          <a className="justify-between">
            Seleccionar Tema
          </a>
          {/* Toggle button here */}
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-9 h-9">
            <input type="checkbox" onChange={handleToggle}/>
            {/* light theme sun image */}
            <img src={Posr} alt="light" className="w-8 h-8 swap-on" />
            {/* dark theme moon image */}
            <img src={Pol} alt="dark" className="w-8 h-8 swap-off" />
          </label>
        </button>
        </li>
        
      </ul>
    </div>
    
    </div>  
    </div>   
    </>
  )
}
export default Navbar