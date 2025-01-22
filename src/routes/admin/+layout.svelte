<script>
	let { children } = $props();
</script>

<nav>
	<a href="/admin/events">Events</a>
	<a href="/admin/locations">Locations</a>
	<a href="/admin/categories">Category</a>
</nav>

{@render children()}

<style>
	nav {
		background-color: rgb(255, 154, 201);
	}
</style>
