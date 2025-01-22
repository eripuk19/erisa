<script>
	import { flip } from 'svelte/animate';

	let { data } = $props();
	let filteredEvents = $state(data.events);
	let selectedCategory = $state('all');

	function filterEvents() {
		if (selectedCategory === 'all') {
			filteredEvents = data.events;
		} else {
			filteredEvents = data.events.filter((e) => e.category_id === selectedCategory.id);
		}
	}
</script>
<div>
	{#if data.user}
	<p>Welcome back, {data.user.username}</p>

	<form action="/logout?/logout" method="POST">
		<button type="submit">Logout</button>
	</form>

	<form action="/logout?/deleteAccount" method="POST">
		<button type="submit">Delete Account</button>
	</form>
	{:else}
	<p>You are not logged in. <a href="/login">Login</a></p>
	<p>
		<a href="/login">Login</a>
		or
		<a href="/register">Register</a>
	</p>
	{/if}
</div>

<h1>My Event App</h1>

<h2>Here are the current events</h2>

<select name="" id="" bind:value={selectedCategory} onchange={filterEvents}>
	<option value="all">All</option>
	{#each data.categories as category}
		<option value={category}>{category.name}</option>
	{/each}
</select>

<div class="events-container">
	{#each filteredEvents as event (event.id)}
		<div animate:flip class="event-card">
			<p class="event-details">
				<strong>ID:</strong>
				{event.id} |
				<strong>Title:</strong>
				{event.title} |
				<strong>Start Date:</strong>
				{new Date(event.start_date).toDateString()}
			</p>
		</div>
	{/each}
</div>
