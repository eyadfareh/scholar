<script>
	import pb from "$lib/db.ts";
	import DeleteButton from "$lib/components/DeleteButton.svelte";
	import { invalidateAll } from '$app/navigation';
	export let section;
	async function deleteHandler(){
		await pb.collection('sections').delete(section.id);
		invalidateAll();
	}
</script>
<a href={`/section/${section.id}`}>
	<div class="section">
		<span>{section.title}</span>
		<div>
			<DeleteButton on:click={deleteHandler}></DeleteButton>
		</div>
	</div>
</a>
<style>
	.section{
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
	}
	button {

	}
</style>
