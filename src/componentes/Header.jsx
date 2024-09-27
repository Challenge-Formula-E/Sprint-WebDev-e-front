import logo from '../assets/logo.png';
import '../styles/header.css';
import { Link } from 'react-router-dom';

export const Header = ({ className}) => {
    return (
      <div className="header">
        <div className="rectangle-2"></div>
        <img className="logo" src={logo} alt="Logo" />
        <nav className="nav-items">
          <Link to='/' className="nav-item home" >Home</Link>
          <Link to='/races' className="nav-item races">Races</Link>
          <Link to='/about' className="nav-item about">About</Link>
          <Link to='/about' className="nav-item coins">E-Coins</Link>
          <Link to='/about' className="nav-item news">News</Link>
        </nav>
      </div>

    );
  };
  
