<script>
	import pb from "$lib/db.ts"
	import {afterUpdate} from "svelte";
	import { invalidateAll } from '$app/navigation';
	export let chapterId;
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
		const data = {
			"number": 123,
			"title": e.target.title.value,
			"notes": "",
			"chapter": chapterId
		};

		const record = await pb.collection('sections').create(data);
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
<div class={"add-section " + (isAdding ? "adding": "") } on:click={clickHandler}>
	{#if isAdding}
		Add section
		<form on:submit|preventDefault={submitHandler}>
			<input name="title" on:keydown={keydownHandler} on:blur={blur} bind:this={input}/>
		</form>
	{:else}
		Add section
	{/if}
</div>
<style>
	.add-section{
		margin-top: 20px;
		margin-bottom: 10px;
		padding: 10px 0px;
		cursor: pointer;
		position: relative;
	}
	.add-section:hover{
		border-color: #8A2BE2;
		color: #8A2BE2;
	}
	.add-section.adding {
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
	}
</style>
