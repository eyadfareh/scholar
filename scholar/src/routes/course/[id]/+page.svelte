<script>
	export let data;
	import Chapter from "$lib/components/Chapter.svelte";
	import AddChapter from "$lib/components/AddChapter.svelte";
</script>


<section>
	<h1>{data.course.title}</h1>
	<div class="container">
		<h2>Chapters</h2>
		<div class="chapters">
			{#each data.chapters as chapter}
				<Chapter chapter={chapter}></Chapter>
			{/each}
			<AddChapter courseId={data.id}/>
		</div>
	</div>
</section>
<style>
	h1 {
		text-align: center;
	}
	.chapters {
		display: flex;
		flex-direction: column;
	}
</style>
