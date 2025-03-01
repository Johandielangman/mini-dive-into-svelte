<script lang="ts">
	let { data } = $props();
</script>

<h1>blog posts</h1>

<ul>
	{#each data.summaries as { slug, title, emoji }}
		<li><a href="/blog/{slug}">{emoji} {title}</a></li>
	{/each}
</ul>
