<script>
    import Header from "$lib/components/Header.svelte";
  import "$lib/styles/main.css"
</script>

<svelte:head>
	<title>PokeSvelte</title>
</svelte:head>

<Header />

<slot />
