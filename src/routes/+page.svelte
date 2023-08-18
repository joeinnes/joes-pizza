<script>
	let imgWidth = 0;
	export let data;
	const { heroImage } = data;
</script>


<div bind:clientWidth={imgWidth}>
<img src="{heroImage.blur_hash}" />
</div>
{JSON.stringify(heroImage)}
<style>
	.hero-image {
		width: 100vw;
		
	}
</style>