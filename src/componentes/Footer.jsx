// Footer.js
import "../styles/Footer.css"; 
import FundoFooter from "../assets/FundoFooter.png";
import fiap from '../assets/fiap.png';
import logo from '../assets/logo.png';
import techmahindra from '../assets/techmahindra.png'
import fia from '../assets/fia.png'


export const Footer = ({ className = "" }) => {

 
  return (
    <div className={"footer " + className}>
      <div className="footer2">
        <img className="Fundo" src={FundoFooter} alt="FundoFooter" />
        <div className="logos">
          <img className="fia" src={fia} alt="fia" />
          <img className="formulae" src={logo} alt="formulae" />
          <img className="techmahindra" src={techmahindra} alt="techmahindra" />
          <img className="fiap" src={fiap} alt="fiap" />
        </div>
        <div className="todos-os-direitos-reservados-2024">
          Todos os direitos reservados 2024®️
        </div>
      </div>
    </div>
  );
};
