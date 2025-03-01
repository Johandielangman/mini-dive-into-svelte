<script>
	let { data } = $props();
</script>

<div class="centered">
	<h1>todos</h1>

    <form method="POST">
        <label>
            add a todo:
            <input
                name="description"
                autocomplete="off"
            />
        </label>
    </form>
    
	<ul class="todos">
		{#each data.todos as todo (todo.id)}
			<li>
				{todo.description}
			</li>
		{/each}
	</ul>
</div>

<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	label {
		width: 100%;
	}

	input {
		flex: 1;
	}
</style>
