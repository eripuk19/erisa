<script>
	let { data } = $props();
</script>

<h1>Create a new event</h1>

<form method="POST" action="?/createEvent">
	<label for="title">Title</label>
	<input type="text" placeholder="Title" name="title" />

	<label for="description">Description</label>
	<textarea placeholder="Description" name="description"></textarea>

	<label for="url">URL</label>
	<input type="text" placeholder="URL" name="url" />

	<label for="startDate">Start Date</label>
	<input type="date" name="startDate" />

	<label for="endDate">End Date</label>
	<input type="date" name="endDate" />

	<label for="startTime">Start Time</label>
	<input type="time" name="startTime" />

	<label for="location">Location</label>
	<select name="locationId">
		{#each data.locations as location (location.id)}
			<option value={location.id}>{location.name}</option>
		{/each}
    </select>

		<label for="category">Category</label>
		<select name="categoryId">
			{#each data.categories as category (category.id)}
				<option value={category.id}>{category.name}</option>
			{/each}
		</select>


        <button type="submit">
            CREATE
        </button>
	
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}
	h1 {
		background-color: antiquewhite;
	}
</style>
