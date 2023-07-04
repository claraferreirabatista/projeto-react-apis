import { NavigateFunction } from "react-router-dom";

export const goToHomePage = (navigate:NavigateFunction) => {
  navigate("/");
};

export const goToNextPage = (navigate:NavigateFunction, pageNumber: number) => {
  navigate(`/page/${pageNumber}`);
};

export const goToPokedex = (navigate:NavigateFunction) => {
  navigate("/pokedex");
};

export const goToPokemonDetails = (navigate:NavigateFunction, pokemon: string) => {
  navigate(`/pokemon/${pokemon}`);
};
