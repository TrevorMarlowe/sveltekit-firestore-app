import * as universal from '../entries/pages/_username_/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[username]/+page.ts";
export const imports = ["_app/immutable/nodes/4.f3010911.js","_app/immutable/chunks/firebase.441e80f6.js","_app/immutable/chunks/index.e90833d3.js","_app/immutable/chunks/scheduler.279f2f81.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.dfd36af1.js","_app/immutable/chunks/UserLink.669961c9.js"];
export const stylesheets = [];
export const fonts = [];
