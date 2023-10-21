<script lang="ts">
  import type { PageData } from "./$types";
  import PokeCard from "$lib/components/PokeCard.svelte";

  export let data: PageData

  const generations = [
    "Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos"
  ]

  let { pokemons } = data

  let pokeSearch = "";

  $: filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.includes(pokeSearch.toLowerCase())
  })
</script>


<main class="container">
  <section class="search">
    <label for="pokeSearch">
      Search:
      <input bind:value={pokeSearch} name="pokeSearch" type="text" />
    </label>
  </section>
  <section class="generations">
    <ul class="gen-list">
      {#each generations as gen, id}
        <li class="gen-item">Gen {id + 1}<!--<br>{gen}--></li>
      {/each}
    </ul>
  </section>
  <ul class="poke-list">
    {#each filteredPokemons as pokemon (pokemon.id) }
      <PokeCard {pokemon} />
    {/each}
  </ul>
</main>

<style>
  main {
    padding-block: 1rem;
  }

  .search {
    padding-block: 1rem;
    text-align: center;
  }

  .generations {
    padding-block: 1rem;
  }

  .gen-list {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
  }

  .gen-item {
    background: var(--bg-color-300);
    padding: 0.25rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: filter 100ms ease-in-out;
  }

  .gen-item:hover {
    filter: brightness(1.35);
    /* background: var(--blue-color-400); */
    /* color: var(--bg-color-500); */
  }

  .poke-list {
    display: grid;
    padding-block: 1rem;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    gap: 2rem;
  }

  @media (max-width: 767px) {
    ul {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
