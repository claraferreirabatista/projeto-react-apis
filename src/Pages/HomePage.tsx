import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  goToPokedex,
  goToNextPage,
  goToPokemonDetails,
} from "../Routes/coordinator";

export const HomePage: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const [pagination, setPagination] = useState<number>(1);

  const handleNextPageClick = () => {
    setPagination((prevPagination) => prevPagination + 1);
    goToNextPage(navigate, pagination);
  };

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
      <button onClick={handleNextPageClick}>Próxima Página</button>
      <button onClick={() => goToPokemonDetails(navigate, "pikachu")}>
        Detalhes do Pokemon
      </button>
    </div>
  );
};
