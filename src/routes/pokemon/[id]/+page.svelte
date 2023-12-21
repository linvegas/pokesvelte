<script lang="ts">
  import { capitalize } from "$lib/utils";
  import type { PageData } from "./$types";
  import TypeCard from "$lib/components/TypeCard.svelte";

  export let data: PageData

  const { pokemon, description, evolutions } = data
</script>

<main class="container">
  <section class="pad flex">
    <section class="poke-view">
      <img
        class="inline-auto"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt={`${pokemon.name} Sprite`}
        title={capitalize(pokemon.name)}
      />
    </section>
    <section class="section-card">
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
  </section>
  <section class="pad section-card">
    <header>
      <h2>Evolutions</h2>
    </header>
    {#if evolutions.length !== 0}
      <ul class="flex evol-chain">
        {#each evolutions as pokemon ,index }
          {#if index}
            <p>&gt;</p>
          {/if}
          <li class="flex evol-chain-item">
            <h3>
              <a href={`/pokemon/${pokemon.id}`}>
                {capitalize(pokemon.name)}
              </a>
            </h3>
            <img
              class="inline-auto"
              src={pokemon.sprites.front_default}
              alt={`${pokemon.name} sprite` }
              loading="lazy"
            />
          </li>
        {/each}
      </ul>
    {:else}
      <p>This pokemon has no evolutions</p>
    {/if}
  </section>
</main>

<style>
  .pad {
    padding-block: 2rem;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .poke-view {
    flex-grow: 1;
  }

  .inline-auto {
    margin-inline: auto;
  }

  .section-card {
    /* flex-grow: 2; */
    padding: 1rem;
    background: var(--bg-color-300);
    border-radius: 0.5rem;
  }

  .section-card > header {
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

  .evol-chain {
    gap: 2rem;
    align-items: center;
  }

  .evol-chain-item {
    /* background: slateblue; */
    flex-direction: column;
    text-align: center;
    padding: 0.5rem;
    aspect-ratio: 1;
    min-width: 150px;
    border-radius: 0.5rem;
  }
</style>
