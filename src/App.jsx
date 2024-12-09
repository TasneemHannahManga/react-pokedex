import React from "react";
import Header from "./App-components/Header";
import Footer from "./App-components/Footer"; 
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <nav>
        <Link to="/react-pokedex/">Home</Link>
        {" | "}
        <Link to="/react-pokedex/random">RandomPokémonGenerator</Link>
        <Link to="/react-pokedex/:id">PokePage</Link>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
}

export default App;
