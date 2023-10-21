import type { PokedexList, PokemonData } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data: PokedexList = await response.json();
  const pokemonResults = data.results;

  const pokemonPromises = pokemonResults.map((pokemon) =>
    fetch(pokemon.url).then((response) => response.json()),
  );

  const pokemons: PokemonData[] = await Promise.all(pokemonPromises);

  return { pokemons };
};
