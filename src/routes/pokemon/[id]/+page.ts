import type { PokemonData } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params, fetch }) => {
  const response1 = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`,
  );
  const pokemon: PokemonData = await response1.json();

  const response2 = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${params.id}`,
  );

  const description = await response2.json();

  return {
    pokemon,
    description,
  };
};
