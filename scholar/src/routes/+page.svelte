<script>
	export let data;
</script>


<section>
	<h1>Scholar</h1>
	<div class="container">
		<h2>Courses</h2>
		<div class="courses">
			{#each data.courses as course}
				<a href={`/course/${course.id}`}>
					<div class="course">
						{course.title}
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	h1 {
		text-align: center;
	}
	.courses {
		display: flex;
	}
	.courses .course {
		margin-right: 20px;
		border: 1px solid #fff;
		padding: 20px;
		border-radius: 10px;
		cursor: pointer;
	}
	.courses .course:hover {
		border: 1px solid #8A2BE2;
		color: #8A2BE2;
	}
</style>
