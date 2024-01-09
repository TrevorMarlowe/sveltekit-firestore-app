

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.15ca9551.js","_app/immutable/chunks/scheduler.279f2f81.js","_app/immutable/chunks/index.6fb06d1b.js","_app/immutable/chunks/stores.e7c951f3.js","_app/immutable/chunks/singletons.dd443d08.js","_app/immutable/chunks/index.e90833d3.js"];
export const stylesheets = [];
export const fonts = [];
