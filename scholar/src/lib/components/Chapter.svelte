<script>
	import pb from "$lib/db.ts";
	import DeleteButton from "$lib/components/DeleteButton.svelte";
	import { invalidateAll } from '$app/navigation';
	import Section from "$lib/components/Section.svelte"
	import AddSection from "$lib/components/AddSection.svelte"
	export let chapter;
	async function deleteHandler(e){
		await pb.collection('chapters').delete(chapter.id);
		invalidateAll();
	}
</script>

<div class="chapter">
	<div class="chapter-header">
		<h4>{chapter.title}</h4>
		<div>
			<DeleteButton on:click={deleteHandler}>delete</DeleteButton>
		</div>
	</div>
	<div class="sections">
		{#each chapter.sections as section}
			<Section section={section}></Section>
		{/each}
		<AddSection chapterId={chapter.id}></AddSection>
	</div>
</div>
<style>
	.chapter {
		border: 1px solid white;
		margin-bottom: 20px;
		padding: 10px;
	}
	.chapter h4 {
		margin: 0 0 5px 0;
	}
	.sections {
		display: flex;
		flex-direction: column;
	}
	.chapter-header {
		display: flex;
		justify-content: space-between;
	}
</style>
