import logo from '../assets/logo.png';
import '../styles/header.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
      <div className="header rectangle-2">
        <img className="logo" src={logo} alt="Logo" />
        </div>

    );
  };
  