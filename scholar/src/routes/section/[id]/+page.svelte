<script>
	import pb from "$lib/db";
	import DeleteButton from "$lib/components/DeleteButton.svelte";
	import {
		invalidateAll
	} from '$app/navigation';
	export let data;
	async function deleteQuestion(id){
		await pb.collection('questions').delete(id);
		await invalidateAll();
	}
</script>

<div class="container">
	<h1>{data.section.title}</h1>
	<h2>Questions</h2>
	<div class="questions">
		{#each data.questions as question}
			<a class="question" href={`/question/${question.id}`}>
				{question.text}
				<DeleteButton on:click={() => {deleteQuestion(question.id)}} />

			</a>
		{/each}
		<a href={`/section/${data.id}/add`} class="question add-question">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>
			Add a Question.
		</a>
	</div>
</div>
<style>
	h1 {
		text-align: center;
	}
	.questions {
	}
	.questions .question{
		border: 2px solid white;
		margin-bottom: 10px;
		padding: 15px;
		display: flex;
		justify-content: space-between;
	}
	.questions .question:hover {
		border-color:#8A2BE2;
	}
	.questions .add-question {
		border-style: dashed;
		border-width: 2px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.questions .add-question svg{
		width: 1.5em;
		margin-right: 5px;
	}
</style>
