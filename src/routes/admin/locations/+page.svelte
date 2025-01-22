<script>

    import {enhance} from '$app/forms';
    import Warning from '$lib/components/warning.svelte';
    import {slide} from 'svelte/transition';
    let { data, form } = $props();
</script>
 
<header>
<h1>New Location</h1> 
<a href="/admin/locations/new">Add location</a>
</header>

{#if form && !form.success}
<div class="warning">
    {form.message}
</div>
{/if}
 
{#each data.locations as location}
    <div class="box">
    <p>{location.name} - {location.city}</p>
 
    <form action="?/deleteLocation" method="POST">
        <input type="hidden" name="id" value="{location.id}">
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
    a{
        background-color: antiquewhite;
    }
    h1{
        background-color: antiquewhite;
    }
</style>
 