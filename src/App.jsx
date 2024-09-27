import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "../src/componentes/Header"; 
import Home from "./pages/Home.jsx";   
import Races from "./pages/Races.jsx";
import About from "./pages/About.jsx";
import Coins from "./pages/Coins.jsx";
import News from "./pages/News.jsx";
import './index.css'

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/races" element={<Races />} />
        <Route path="/about" element={<About />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;


