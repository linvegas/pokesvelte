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
  <section id="controls">
    <label for="pokeSearch">
      Search:
      <input bind:value={pokeSearch} name="pokeSearch" type="text" />
    </label>
    <label for="generations">
      Generation:
      <select name="generations">
        {#each generations as gen}
          <option value="{gen}">{gen}</option>
        {/each}
      </select>
    </label>
  </section>
  <section id="grid-list">
    <ul class="poke-list">
      {#each filteredPokemons as pokemon (pokemon.id) }
        <PokeCard {pokemon} />
      {/each}
    </ul>
  </section>
</main>

<style>
  main {
    padding-block: 1rem;
  }

  #controls {
    padding-block: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  #grid-list {
    padding-block: 1rem;
  }

  .poke-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
    place-items: center;
    gap: 2rem;
  }
</style>
