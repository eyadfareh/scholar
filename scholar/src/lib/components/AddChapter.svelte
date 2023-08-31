<script>
	import pb from "$lib/db.ts"
	import {afterUpdate} from "svelte";
	import { invalidateAll } from '$app/navigation';
	export let courseId;
	let isAdding = false;
	let input;
	function clickHandler(e){
		console.log("Editing");
		isAdding = true;
	}
	afterUpdate(() => {
		console.log("Updating");
		if(isAdding)
			input.focus();
	});
	async function submitHandler(e){
		console.log(e.target.title.value);
		const data = {
			"number": 123,
			"title": e.target.title.value,
			"course": courseId
		};

		const record = await pb.collection('chapters').create(data);
		isAdding = false;
		invalidateAll();
	}
	function blur(){
		isAdding = false;
	}
	function keydownHandler(e){
		if(e.key == "Escape"){
			blur();
		}
	}
</script>
<div class={"add-chapter " + (isAdding ? "adding": "") } on:click={clickHandler}>
	{#if isAdding}
		Add Chapter
		<form on:submit|preventDefault={submitHandler}>
			<input name="title" on:keydown={keydownHandler} on:blur={blur} bind:this={input}/>
		</form>
	{:else}
		Add Chapter
	{/if}
</div>
<style>
	.add-chapter{
		border: 2px dashed white;
		margin-bottom: 20px;
		padding: 20px;
		cursor: pointer;
		position: relative;
	}
	.add-chapter:hover{
		border-color: #8A2BE2;
		color: #8A2BE2;
	}
	.add-chapter.adding {
		border-style: solid;
		border-color: #8A2BE2;
		color: #8A2BE2;
	}
	input {
		position: absolute;
		outline: 0;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		border: none;
		background: black;
		color: white;
		display: block;
		padding: 20px;
	}
</style>
