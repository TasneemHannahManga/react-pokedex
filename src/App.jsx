import React from "react";
import Header from "./App-components/Header";
import Footer from "./App-components/Footer"; 
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Link to="/react-pokedex/:id">PokePage</Link>

      <Outlet />
      <Footer />
    </>
  );
}

export default App;
