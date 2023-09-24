import * as universal from '../entries/pages/_username_/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[username]/+page.ts";
export const imports = ["_app/immutable/nodes/4.ee39c94c.js","_app/immutable/chunks/firebase.c89a8387.js","_app/immutable/chunks/index.9b6cdc02.js","_app/immutable/chunks/scheduler.019f240c.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.2a734d87.js","_app/immutable/chunks/UserLink.65dda833.js"];
export const stylesheets = [];
export const fonts = [];
