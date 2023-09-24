

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0bc561df.js","_app/immutable/chunks/scheduler.019f240c.js","_app/immutable/chunks/index.2a734d87.js","_app/immutable/chunks/stores.7a1769c2.js","_app/immutable/chunks/singletons.e15e9de5.js","_app/immutable/chunks/index.9b6cdc02.js"];
export const stylesheets = [];
export const fonts = [];
