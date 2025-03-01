<script>
	let { data } = $props();
    $inspect(data)
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
