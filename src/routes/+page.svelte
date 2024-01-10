<script>
	import { userData } from "$lib/firebase";

</script>

<svelte:head>
	<title>tipi.media - your links to the world</title>
	<meta name="description" content="Demo project showcasing SvelteKit" />
</svelte:head>

<main class="flex w-full min-h-screen">

	<div class="hero bg-base-200">
		<div class="hero-content text-center">
			<div class="w-full">
				<h1 class="text-7xl font-bold">tipi.media</h1>
				<p class="py-6 text-2xl">Your links to the world!</p>
				{#if $userData?.username}
					<a href="/{$userData.username}" class="btn btn-primary">View Profile</a>
				{:else}
					<a href="/login" class="btn btn-primary">Get Started</a>
					<a href="/TJOPepsi" class="btn btn-secondary">Example Profile</a>
				{/if}
			</div>
		</div>
	</div>
	
</main>
