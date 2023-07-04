import { NavigateFunction } from "react-router-dom";

export const goToHomePage = (navigate:NavigateFunction) => {
  navigate("/");
};

export const goToNumberPage = (navigate:NavigateFunction, pageNumber: number) => {
  navigate(`/page/${pageNumber}`);
};

export const goToPokedexPage = (navigate:NavigateFunction) => {
  navigate("/pokedex");
};

export const goToPokemonDetailsPage = (navigate:NavigateFunction, pokemon: string) => {
  navigate(`/pokemon/${pokemon}`);
};
