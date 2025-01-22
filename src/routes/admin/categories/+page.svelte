<script>
	import { enhance } from '$app/forms';
	import Warning from '$lib/components/Warning.svelte';
	import { slide } from 'svelte/transition';
	let { data, form } = $props();
</script>

<header>
	<h1>New Category</h1>
	<a href="/admin/categories/new">Add Category</a>
</header>

{#if form && !form.success}
	<Warning message={form.message} />
{/if}

{#each data.categories as category (category.id)}
	<div class="box">
		<p>{category.name}</p>

		<form action="?/deleteCategory" method="POST">
			<input type="hidden" name="id" value={category.id} />
			<button type="submit">Delete</button>
		</form>
	</div>
{/each}

<style>
	.box {
		border: 1px solid #ccc;
		padding: 10px;
		margin: 5px 0;
	}
	a {
		background-color: antiquewhite;
	}
	h1 {
		background-color: antiquewhite;
	}
</style>
