import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RandomPokémonGenerator from "./App-components/Pages/RandomPokémonGenerator";
import Home from "./App-components/Pages/Home";
import PokePage from "./App-components/Pages/PokePage";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/react-pokedex/",
    element: <App />,
    children: [
      {
        path: "/react-pokedex/",
        element: <Home />,
      },
      {
        path: "/react-pokedex/random",
        element: <RandomPokémonGenerator />,
      },
      {
        path: "/react-pokedex/:id",
        element: <PokePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
