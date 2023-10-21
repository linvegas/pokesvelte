<script lang="ts">
  import { capitalize } from "$lib/utils";
  import type { PageData } from "./$types";
  import TypeCard from "$lib/components/TypeCard.svelte";

  export let data: PageData

  const { pokemon, description } = data
</script>

<main class="container flex">
  <section class="poke-view">
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
      alt={`${pokemon.name} Sprite`}
      title={capitalize(pokemon.name)}
    />
  </section>
  <section class="poke-info">
    <header>
      <h2>{capitalize(pokemon.name)}</h2>
      <span>#{pokemon.id}</span>
    </header>
    <p class="poke-desc">{description.flavor_text_entries[0].flavor_text}</p>
    <div class="card-types">
      {#each pokemon.types as type }
        <TypeCard type={type.type.name} />
      {/each}
    </div>
    <article>
      {#each pokemon.stats as stat}
        <p>{stat.stat.name}: {stat.base_stat}</p>
        <meter value={stat.base_stat} min="0" max="125"></meter>
      {/each}
    </article>
  </section>
</main>

<style>
  main {
    padding-block: 2rem;
  }

  .flex {
    /* display: grid; */
    /* grid-template-columns: 60% 40%; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .poke-view {
    flex-grow: 1;
  }

  .poke-view img {
    margin-inline: auto;
  }

  .poke-info {
    /* flex-grow: 2; */
    padding: 1rem;
    background: var(--bg-color-300);
    border-radius: 0.5rem;
  }

  .poke-info > header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .poke-desc {
    inline-size: 45ch;
  }

  .card-types {
    padding-block: 0.5rem;
    display: flex;
    gap: 0.5rem;
  }
</style>
