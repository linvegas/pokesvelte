<script lang="ts">
  import type { PokemonData } from "$lib/types";
  import TypeCard from "./TypeCard.svelte";

  import { capitalize } from "$lib/utils"

  export let pokemon: PokemonData
  let {name, id, sprites, types} = pokemon

</script>

<li class="card">
  <header class="card-header">
    <h3>
      <a href={`/pokemon/${id}`} title={"Go to " + capitalize(name) + " page"}>
        {capitalize(name)}
      </a>
    </h3>
    <span class="poke-id" title="Pokedex number">#{id}</span>
  </header>
  <img
    src={sprites.front_default}
    alt={`${name} sprite` }
    loading="lazy"
  />
  <div class="card-types">
    {#each types as type }
      <TypeCard type={type.type.name} />
    {/each}
  </div>
</li>

<style>
  .card {
    background: var(--bg-color-300);
    border-radius: 0.5rem;
    padding: 0.75rem;
    width: 100%;
    aspect-ratio: 1;
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card > img {
    margin: auto;
    width: 80%;
  }

  .card-types {
    display: flex;
    gap: 0.5rem;
  }
</style>
