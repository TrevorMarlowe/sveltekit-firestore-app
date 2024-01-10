import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.bfe1c2aa.js","_app/immutable/chunks/scheduler.279f2f81.js","_app/immutable/chunks/index.dfd36af1.js","_app/immutable/chunks/stores.f8a23bcb.js","_app/immutable/chunks/singletons.ee5a621a.js","_app/immutable/chunks/index.e90833d3.js","_app/immutable/chunks/parse.bee59afc.js"];
export const stylesheets = [];
export const fonts = [];
