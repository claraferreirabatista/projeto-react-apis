import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { PokedexPage } from "../Pages/PokedexPage";
import { PokemonDetailsPage } from "../Pages/PokemonDetailsPage";
import { ErrorPage } from "../Pages/ErrorPage";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="page/:pageNumber" element={<HomePage />} />
        <Route path="pokedex" element={<PokedexPage />} />
        <Route path="pokemon/:pokemon" element={<PokemonDetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
