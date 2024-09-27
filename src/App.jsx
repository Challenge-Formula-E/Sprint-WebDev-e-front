import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";   
import Races from "./pages/Races.jsx";
import About from "./pages/About.jsx";
import Coins from "./pages/Coins.jsx";
import News from "./pages/News.jsx";
import './index.css'
import { Header } from "./componentes/Header.jsx";
import { Footer } from "./componentes/Footer.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/races" element={<Races />} />
        <Route path="/about" element={<About />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


