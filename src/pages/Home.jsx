import "../styles/Home.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import VideoComponent from "../componentes/Videocomponet";


function Home() {
  return (
    <div className="container w-[100vw] md:w-full">
      <section className="topo">
        <img src={logo} alt="Formula E Logo" className="logo" />
        <h1>Track revolution with a touch of electricity</h1>
      </section>
      <Link to="coins">
        <section className="section freshness border-black">
          <h2>Freshness</h2>
          <p>E-coins</p>
        </section>
      </Link>

      <Link to="races">
        <section className="section corridas">
          <h2>Race</h2>
          <p>Monaco E-Prix</p>
        </section>
      </Link>

      <Link to="news">
        <section className="section noticias">
          <h2>News</h2>
          <p>Latest news</p>
        </section>
      </Link>

      <Link to="about">
        <section className="section mais">
          <h2>About</h2>
          <p>Find out more about Formula E</p>
        </section>
      </Link>

      <section className="section highlights flex justify-center items-center">
        <h2>Highlights</h2>
        <p>Race Cut</p>

        <VideoComponent
        />


      </section>
    </div>
  );
}

export default Home;
