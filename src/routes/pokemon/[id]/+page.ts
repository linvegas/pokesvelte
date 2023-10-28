import type { PokemonSpecies, PokemonData } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params, fetch }) => {
  const pokemonFetch = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`,
  );
  const pokemon: PokemonData = await pokemonFetch.json();

  const speciesFetch = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${params.id}`,
  );

  const speciesData: PokemonSpecies = await speciesFetch.json();

  const evolutionFetch = await fetch(speciesData.evolution_chain.url);

  const evolutions = await evolutionFetch.json();

  return {
    pokemon,
    description: speciesData,
    evolutions,
  };
};
