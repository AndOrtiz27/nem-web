import React, { useState} from 'react';
import { FiAlignRight, FiX } from "react-icons/fi";
import logo from '../../assets/NewLogo.png.png';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href='#inicio'>Inicio</a></p>
    <p><a href='#cambio'>Cambio de moneda</a></p>
    <p><a href='#donde'>Dónde estamos</a></p>
    <p><a href='#contacto'>Contáctenos</a></p>
  </>
);

const Navbar = () => {
  //navbar close 
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='nem_navbar'>
      <div className='nem_navbar-links'>
        <div className='nem_navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='nem_navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='nem_navbar-menu'>
        {toggleMenu
         ? <FiX color='#546B13' size={27} onClick={() => setToggleMenu(false)}/>
         : <FiAlignRight color='#546B13' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='nem_navbar-menu_container scale-up-tr'>
            <div className='nem_navbar-menu_container_links'>
            <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;