import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import {
  goToPokedexPage,
  goToNumberPage,
  goToPokemonDetailsPage,
} from "../Routes/coordinator";

interface Pokemon {
  name: string;
  url: string;
}

export const HomePage: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const [pagination, setPagination] = useState<number>(1);
  const [data, setData] = useState<{ results: Pokemon[] }>({ results: [] });
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async (pageNumber: number) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(pageNumber - 1) * 20}&limit=20`);
      const data = await response.json();
      setData(data);
      setLoaded(true);
    } catch (error) {
      setError(true);
    }
  };

  const handleNextPageClick = () => {
    setPagination((prevPagination) => prevPagination + 1);
    goToNumberPage(navigate, pagination);
  };

  const handlePreviousPageClick = () => {
    setPagination((prevPagination) => prevPagination - 1);
    goToNumberPage(navigate, pagination - 1);
  };

  React.useEffect(() => {
    fetchData(pagination);
  }, [pagination]);

  return (
    <Flex direction="column" flex="1">
      <Header />
      <Box as="main" flex="1">
        <h1>HomePage</h1>
        <button onClick={() => goToPokedexPage(navigate)}>Pokedex</button>
        {pagination === 2 ? (
          <button onClick={handlePreviousPageClick}>Voltar Página</button>
        ) : (
          <button onClick={handlePreviousPageClick}>Voltar Página</button>
        )}

        <button onClick={handleNextPageClick}>Próxima Página</button>
        <button onClick={() => goToPokemonDetailsPage(navigate, "pikachu")}>
          Detalhes do Pokemon
        </button>

        {error ? (
          <p>Erro de requisição, tente novamente</p>
        ) : loaded ? (
          data.results.map((pokemon) => {
            return (
              <div key={pokemon.url}>
                <h1>{pokemon.name}</h1>
                <p>Url: {pokemon.url}</p>
              </div>
            );
          })
        ) : (
          <p>Carregando</p>
        )}
      </Box>
      <Footer />
    </Flex>
  );
};
