<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	let { data } = $props();
</script>

<h1>Admin Dashboard</h1>

<a href="/admin/events/new">Create a new event</a>

<div class="events-container">
	{#each data.events as event (event.id)}
		<div class="event-box" transition:slide>
			<p class="event-details">
				<strong>ID:</strong>
				{event.id} |
				<strong>Title:</strong>
				{event.title} |
				<strong>Url:</strong>
				{event.url}
				<strong>Start date:</strong>
				{new Date(event.start_date).toDateString()} |
				<strong>End date:</strong>
				{new Date(event.end_date).toDateString()} |
				<strong>Start time:</strong>
				{event.start_time} |
				<strong>Location:</strong>
				{event.locationName} |
				<strong>Category:</strong>
				{event.categoryName}
			</p>
			<form action="?/deleteEvent" method="POST" use:enhance class="delete-form">
				<input type="hidden" name="id" value={event.id} />
				<button type="submit" class="delete-button">Delete</button>
			</form>
		</div>
	{/each}
</div>

<style>

	h1 {
		background-color: rgb(255, 167, 199);
	}

	a {
		background-color: rgb(255, 167, 199);
	}
</style>
