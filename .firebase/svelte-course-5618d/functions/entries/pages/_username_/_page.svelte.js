import { v as validate_store, s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, a as add_attribute, b as each, v as validate_component } from "../../../chunks/ssr.js";
import { U as UserLink } from "../../../chunks/UserLink.js";
import { a as user } from "../../../chunks/firebase.js";
import "firebase/auth";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_user();
  return `${$$result.head += `<!-- HEAD_svelte-1ui6vuc_START -->${$$result.title = `<title>@${escape(data.username)} Links</title>`, ""}<meta name="description"${add_attribute("content", data.bio, 0)}><!-- HEAD_svelte-1ui6vuc_END -->`, ""} <main class="prose text-center mx-auto mt-8"><h1 class="text-5xl text-purple-500 pb-3">@${escape(data.username)}</h1> <img${add_attribute("src", data.photoURL ?? "/user.png", 0)} alt="photoURL" width="256" height="256" class="mx-auto"> <p class="text-xl my-8">${escape(data.bio ?? "no bio yet...")}</p> <ul class="list-none">${each(data.links, (item) => {
    return `<li class="my-2">${validate_component(UserLink, "UserLink").$$render($$result, Object.assign({}, item), {}, {})} </li>`;
  })}</ul> ${$user ? `<div class="my-8"><a href="${"/" + escape(data.username, true) + "/edit"}" class="btn btn-primary">Edit Profile</a> <a href="${"/" + escape(data.username, true) + "/bio"}" class="btn btn-primary">Edit Bio</a> <button class="btn btn-warning" data-svelte-h="svelte-iuh9xu">Sign out</button></div>` : ``}</main>`;
});
export {
  Page as default
};
