import { v as validate_store, s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { a as user } from "../../../chunks/firebase.js";
import "firebase/auth";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `<h2 data-svelte-h="svelte-bhb3ah">Login</h2> ${$user ? `<h2 class="card-title">Welcome, ${escape($user.displayName)}</h2> <p class="text-center text-success" data-svelte-h="svelte-1958qcl">You are logged in</p> <button class="btn btn-warning" data-svelte-h="svelte-iuh9xu">Sign out</button> <a class="btn btn-primary" href="/login/username" data-svelte-h="svelte-1fefe1d">Choose a username</a>` : `<button class="btn btn-primary" data-svelte-h="svelte-1qx8cp0">Sign in with Google</button>`}`;
});
export {
  Page as default
};
