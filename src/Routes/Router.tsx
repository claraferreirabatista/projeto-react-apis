import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage"
import { PokedexPage } from "../Pages/PokedexPage";
import { PokemonDetailsPage } from "../Pages/PokemonDetailsPage";
import { ErrorPage } from "../Pages/ErrorPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="page/:pageNumber" element={<HomePage />} />
        <Route path="pokedex" element={<PokedexPage />} />
        <Route
          path="pokemon/:pokemon"
          element={<PokemonDetailsPage></PokemonDetailsPage>}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};