<script>
    import { enhance } from '$app/forms';
    let { form } = $props();
    let creating = $state(false);
    $inspect(form)
</script>

<h1>post to lambdas!</h1>

{#if form?.success}
    <p>Success! {form.success}</p>
{/if}

{#if form?.error}
    <p>Error! {form.error}</p>
{/if}

{#if creating}
	<span class="saving">saving...</span>
{/if}

<form
    method="POST"
    action="?/create"
    use:enhance={() => {
        creating = true;

        return async ({ update }) => {
            await update();
            creating = false;
        };
    }}
>
	<label>
		add a todo:
		<input
            disabled={creating}
			name="description"
			autocomplete="off"
		/>
	</label>
</form>