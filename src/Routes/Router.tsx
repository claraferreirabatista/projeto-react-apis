import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { PokedexPage } from "../Pages/PokedexPage";
import { PokemonDetailsPage } from "../Pages/PokemonDetailsPage";
import { NotFoundPage } from "../Pages/NotFoundPage";


export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<HomePage />} />
        <Route path="page/:pageNumber" element={<HomePage />} />
        <Route path="pokedex" element={<PokedexPage />} />
        <Route path="pokemon/:pokemon" element={<PokemonDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
