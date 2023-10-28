import type { PokemonSpecies, PokemonData, EvolutionChain } from "$lib/types";
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

  const evolutionData: EvolutionChain = await evolutionFetch.json();

  const evolutionChainNames: String[] = [];

  if (evolutionData.chain.evolves_to.length > 0) {
    evolutionChainNames.push(evolutionData.chain.species.name);
    evolutionData.chain.evolves_to.forEach((evol) => {
      evolutionChainNames.push(evol.species.name);
      if (evol.evolves_to.length > 0) {
        evol.evolves_to.forEach((evol) => {
          evolutionChainNames.push(evol.species.name);
        });
      }
    });
  }

  const pokemonEvolPromises = evolutionChainNames.map((pokemon) =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) =>
      response.json(),
    ),
  );

  const evolutions: PokemonData[] = await Promise.all(pokemonEvolPromises);

  return {
    pokemon,
    description: speciesData,
    evolutions,
  };
};
