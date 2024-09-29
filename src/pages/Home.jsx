import "../styles/Home.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="container">
      <section className="topo">
        <img src={logo} alt="Formula E Logo" className="logo" />
        <h1>Track revolution with a touch of electricity</h1>
      </section>
      <Link to="/Sprint-WebDev-e-front/coins">
        <section className="section freshness border-black">
          <h2>Freshness</h2>
          <p>E-coins</p>
        </section>
      </Link>

      <Link to="/Sprint-WebDev-e-front/races">
        <section className="section corridas">
          <h2>Race</h2>
          <p>Monaco E-Prix</p>
        </section>
      </Link>

      <Link to="/Sprint-WebDev-e-front/news">
        <section className="section noticias">
          <h2>News</h2>
          <p>Latest news</p>
        </section>
      </Link>

      <Link to="/Sprint-WebDev-e-front/about">
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
  );
}

export default Home;
