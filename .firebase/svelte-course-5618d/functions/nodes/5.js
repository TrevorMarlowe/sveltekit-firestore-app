import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.c27d086f.js","_app/immutable/chunks/scheduler.019f240c.js","_app/immutable/chunks/index.2a734d87.js","_app/immutable/chunks/stores.7a1769c2.js","_app/immutable/chunks/singletons.e15e9de5.js","_app/immutable/chunks/index.9b6cdc02.js","_app/immutable/chunks/parse.bee59afc.js"];
export const stylesheets = [];
export const fonts = [];
