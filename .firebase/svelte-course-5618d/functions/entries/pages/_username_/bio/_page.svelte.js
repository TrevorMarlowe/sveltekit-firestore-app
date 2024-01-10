import { v as validate_store, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import "devalue";
import { u as userData } from "../../../../chunks/firebase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $userData, $$unsubscribe_userData;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  $$unsubscribe_userData();
  return `<main class="max-w-lg prose text-center mx-auto my-6"><p>Current Bio: <span class="text-info">${escape(data.bio)}</span></p> <p>Status Code: ${escape($page.status)}</p> <p class="text-error">${escape($page.form?.problem ?? "")}</p> <form method="POST"><div class="form-control"><label for="bio" class="label"><span class="label-text" data-svelte-h="svelte-270kv4">Your bio</span></label> <textarea name="bio" class="textarea textarea-bordered textarea-accent">${escape(data.bio, false)}</textarea></div> <button class="btn btn-outline btn-info block mx-auto my-4" data-svelte-h="svelte-ubuy9h">Update Bio</button></form> ${$userData?.username ? `<a href="${"/" + escape($userData.username, true)}" class="btn btn-primary">Return to Profile</a>` : ``}</main>`;
});
export {
  Page as default
};
