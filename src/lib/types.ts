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
