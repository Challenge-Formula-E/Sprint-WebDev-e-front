
import "../styles/Home.css"
import { Footer } from "../componentes/Footer";
import { Header } from "../componentes/Header"; 
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header className="custom-header-class"/>

      <div className="container">
            <section className="topo">
                <img src={logo} alt="Formula E Logo" className="logo" />
                <h1>Track revolution with a touch of electricity</h1>
            </section>
            <Link to="/coins">
                <section className="section freshness border-black" >
                    <h2>Freshness</h2>
                    <p>E-coins</p>

                </section>
            </Link>
            
            <Link to="/races">
                    <section className="section corridas">
                        <h2>Race</h2>
                        <p>Monaco E-Prix</p>
                    </section>
            </Link>

            <Link to="/news">
                <section className="section noticias">
                    <h2>News</h2>
                    <p>Latest news</p>
                </section>
            </Link>

            <Link to="/about">
                <section className="section mais">
                    <h2>About</h2>
                    <p>Find out more about Formula E</p>
                </section>
            </Link>

            <section className="section highlights">
                <h2>Highlights</h2>
                <p>Race Cut</p>
            </section>
        </div>
      
      <Footer className="custom-footer-class" />
    </div>
  );
}

export default Home;
