import logo from '../assets/logo.png';
import '../styles/header.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
      <div className="header rectangle-2">
        <img className="logo" src={logo} alt="Logo" />
        <nav className="nav-items">
          <NavLink to='/' className="nav-item home" >Home</NavLink>
          <NavLink to='races' className="nav-item races">Races</NavLink>
          <NavLink to='about' className="nav-item about">About</NavLink>
          <NavLink to='coins' className="nav-item coins">E-Coins</NavLink>
          <NavLink to='news' className="nav-item news">News</NavLink>
        </nav>
      </div>

    );
  };
  
