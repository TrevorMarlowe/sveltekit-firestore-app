<script lang="ts">
  import UserLink from "$lib/components/UserLink.svelte";
  import { auth, user } from "$lib/firebase";
  
  import { signOut } from "firebase/auth";
  import type { PageData } from './$types';
  
  export let data: PageData;

  async function signOutSSR() {
    const res = await fetch("/api/signin", { method: "DELETE" });
    await signOut(auth);
    location.href = "/";
  }

</script>

<svelte:head>
  <title>@{data.username} Links</title>
  <meta name="description" content={data.bio} />
</svelte:head>


<main class="prose text-center mx-auto mt-8">

  <h1 class="text-5xl text-purple-500 pb-3">
    @{data.username}
  </h1>

  <img
    src={data.photoURL ?? "/user.png"}
    alt="photoURL"
    width="256"
    height="256"
    class="mx-auto"
  />

  <p class="text-xl my-8">{data.bio ?? "no bio yet..."}</p>
  <ul class="list-none">
    {#each data.links as item}
    <li class="my-2">
      <UserLink {...item} />
    </li>
    {/each}
  </ul>
  
  {#if $user}
  <div class="my-8">
    <a href="/{data.username}/edit" class="btn btn-primary">Edit Profile</a>
    <a href="/{data.username}/bio" class="btn btn-primary">Edit Bio</a>
    <button class="btn btn-warning" on:click={signOutSSR}
      >Sign out</button
    >
  </div>
  {/if}

</main>