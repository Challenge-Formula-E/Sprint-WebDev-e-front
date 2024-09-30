import logo from '../assets/logo.png';
import '../styles/header.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alterna entre aberto e fechado
  };

  return (
    <div className="header rectangle-2">
      <img className="logo" src={logo} alt="Logo" />
      
      {/* Ícone do Menu Hamburguer */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu de navegação */}
      <nav className={`nav-items ${isOpen ? 'open' : ''}`}>
        <NavLink to='/' className="nav-item home" onClick={toggleMenu}>Home</NavLink>
        <NavLink to='races' className="nav-item races" onClick={toggleMenu}>Races</NavLink>
        <NavLink to='about' className="nav-item about" onClick={toggleMenu}>About</NavLink>
        <NavLink to='coins' className="nav-item coins" onClick={toggleMenu}>E-Coins</NavLink>
        <NavLink to='news' className="nav-item news" onClick={toggleMenu}>News</NavLink>
      </nav>
    </div>
  );
};