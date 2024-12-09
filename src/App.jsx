import React from "react";
import Header from "./App-components/Header";
import Footer from "./App-components/Footer"; 
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
