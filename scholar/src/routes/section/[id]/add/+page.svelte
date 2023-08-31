<script>
	import pb from "$lib/db";
	export let data = "";
	let questionElement;
	let questionType = "exact";
	async function submitHandler(e){
		let state = {
			text:e.target.text.value,
			type: questionType,
			section: data.id
		};
		switch(questionType){
			case "exact":
			case "memory":
			state.answer = JSON.stringify(e.target.answer.value);
			break;
			case "multiple choice":
			state.answer = JSON.stringify({
				correct: e.target.answer.value,
				wrong: [
					e.target.choice1.value,
					e.target.choice2.value,
					e.target.choice3.value,
				]
			});
			break;
		}
		console.log(state);
		const record = await pb.collection('questions').create(state);
		e.target.text.value = "";
		if(questionType == "multiple choice"){
			e.target.choice1.value = "";
			e.target.choice2.value = "";
			e.target.choice3.value = "";
		}
		questionType = "exact";
		e.target.answer.value = "";
		e.target.text.focus();
	}
</script>
<div class="container">
	<h1>Add a question</h1>
	<form on:submit|preventDefault={submitHandler}>
		<input name="text" autofocus placeholder="Question"/>
		<select bind:value={questionType} id="cars" name="type">
			<option value="exact">Exact</option>
			<option value="multiple choice">Multiple choice</option>
			<option value="memory">memory</option>
		</select>
		{#if questionType == "exact" || questionType == "memory"}
			<input name="answer" placeholder="Answer"/>
		{:else if  questionType == "multiple choice"}
			<input name="answer" placeholder="Correct choice"/>
			<input name="choice1" placeholder="Incorrect choice"/>
			<input name="choice2" placeholder="Incorrect choice"/>
			<input name="choice3" placeholder="Incorrect choice"/>
		{/if}
		<button type="submit">Add</button>
	</form>
</div>
<style>
	h1 {
		text-align: center;
	}
	form {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
	}
	input {
		padding: 10px;
		border-radius: 5px;
		margin-bottom: 20px;
		color: white;
		background-color: black;
		outline: 0 !important;
		border: 1px solid white;
	}
	::placeholder {
		color: #ccc;
		opacity: 1;
	}
	select {
    background-color: #000;
    color: #fff;
    padding: 15px;
    border-radius: 5px;
		outline: 0;
		border: 1px solid white;
    appearance: none; /* Remove default appearance */
    -webkit-appearance: none; /* For Safari */
    font-size: 16px;
		margin-bottom: 20px;
  }
	button {
		background-color: black;
		cursor: pointer;
		color: #8A2BE2;
		outline: 0;
		border: 1px solid #8A2BE2;
		display: inline;
		padding: 10px;

	}
</style>
