export type PokedexList = {
  results: {
    url: string;
  }[];
};

export type PokemonData = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
};

export type PokemonSpecies = {
  evolution_chain: {
    url: string;
  };
  flavor_text_entries: {
    flavor_text: string;
  }[];
};

type Chain = {
  evolves_to?: [];
  species: {
    name: string;
  };
};

export type EvolutionChain = {
  chain: {
    evolves_to: {
      evolves_to: {
        species: {
          name: string;
        };
      }[];
      species: {
        name: string;
      };
    }[];
    species: {
      name: string;
    };
  };
};
