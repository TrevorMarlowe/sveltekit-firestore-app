

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.42cef1f4.js","_app/immutable/chunks/scheduler.279f2f81.js","_app/immutable/chunks/index.dfd36af1.js","_app/immutable/chunks/stores.d9c87f28.js","_app/immutable/chunks/singletons.5686295c.js","_app/immutable/chunks/index.e90833d3.js"];
export const stylesheets = [];
export const fonts = [];
