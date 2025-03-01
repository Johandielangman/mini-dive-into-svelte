<script>
    let { data } = $props();
</script>

<h1>Integrating with AWS Lambdas!</h1>

{#await data.sayHi}
    Loading a really big Lambda...
{:then response}
    {#if response.error}
        <p>error loading comments: {response.error}</p>
    {:else}
        <p>A message from your local Lambda:</p>
        <p>{response.data.hello}</p>
    {/if}
{/await}