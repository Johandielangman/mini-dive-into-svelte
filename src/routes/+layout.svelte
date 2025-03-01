<script lang="ts">
	let { children } = $props();
</script>

<nav>
	<a href="/">home</a>
	<a href="/about">about</a>
	<a href="/blog">blog</a>
	<a href="/to-do">to-do</a>
	<a href="/lambda">lambda</a>
</nav>

{@render children()}
