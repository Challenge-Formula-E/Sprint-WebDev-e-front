import React from 'react';
import '../styles/about.css';
import carros from '../assets/carros.png';
import carro from '../assets/carromahindra.png';
import capa from '../assets/mahindracar.png';
import logo from '../assets/logo.png';
import fundo from '../assets/fundomoedas.png'
import { BiFontSize } from 'react-icons/bi';

function About () {
  return (
    <div className="about-page">

      <section className="topo">
        <img src={logo} alt="Formula E Logo" className="logo" />
        <h1>Track revolution with a touch of electricity</h1>
      </section>



        <h2 className='titulo'>About</h2>

      <section className="about-section">
        
        <p > 
          Formula E is the world's first all-electric international single-seater championship.
          <br />
          Officially known as the ABB FIA Formula E World Championship,
          <br /> it encourages the development 
          of advanced electric mobility solutions.
        </p>
        <div className="image-container">
          <img className="carroscorrida" src={carros} alt='CARROS'/>
        </div>
      </section>



        <h2 className='benefits'>Benefits</h2>
  


      <section className="benefits-section">

        <p>
          The end goal is to promote sustainable mobility as part of efforts to combat urban <br /> air pollution 
          and lessen the effects of climate change. 
          <br />
          According to the Championship’s organizers, “Formula E is more than just a racing series <br /> 
          – it’s 
          a battle for the future.
          <br /> Our radical cars – all powered by electricity – pave the way for the road cars 
          of tomorrow, <br /> with the series acting as a competitive platform to test and develop the latest in electric technology.”

        </p>

        <div className="image-container">
          <img className="carroscorrida" src={carro} alt='CARRO'/>
        </div>
      </section>

      <div className="carromahindra">

      </div>

      <section className="history-section">
        <p>
          Since making its debut in the grounds of the Olympic Park in Beijing in 2014, Formula E has grown <br />
          into a global entertainment brand, attracting a grid full of the best racing drivers and teams around. <br />
          Now in its 9th season, Formula E features 22 drivers divided among 11 teams representing marques including 
          Maserati, <br /> Jaguar and Porsche.
        </p>
      </section>
    </div>
  );
};

export default About;
