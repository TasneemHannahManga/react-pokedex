import React from "react";
import Header from "./App-components/Header";
import RandomPokémonGenerator from "./App-components/Pages/RandomPokémonGenerator";
import Home from "./App-components/Pages/Home";
import PokePage from "./App-components/Pages/PokePage";
import Footer from "./App-components/footer"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/random" element={<RandomPokémonGenerator />} />
          <Route exact path="/pokemon/:id" element={<PokePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
