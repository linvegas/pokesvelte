<script lang="ts">
  export let type: string = "normal"
</script>

<span class={type}>
  {type}
</span>

<style>
  span {
    color: black;
    padding: 0.25rem;
    border-radius: 0.5rem;
    line-height: 1em;
  }

  .steel    {background: var(--text-color-400);}
  .normal   {background: var(--text-color-600);}
  .grass    {background: var(--green-color);}
  .dragon   {background: var(--red-color-300);}
  .fire     {background: var(--red-color-400);}
  .fighting {background: var(--red-color-600);}
  .ice      {background: var(--blue-color-200);}
  .flying   {background: var(--blue-color-300);}
  .water    {background: var(--blue-color-400);}
  .ghost    {background: var(--blue-color-600);}
  .poison   {background: var(--magenta-color-400);}
  .fairy    {background: var(--magenta-color-500);}
  .psychic  {background: var(--cyan-color);}
  .bug      {background: var(--yellow-color-300);}
  .electric {background: var(--yellow-color-400);}
  .ground   {background: var(--yellow-color-500);}
  .rock     {background: var(--yellow-color-600);}
</style>
