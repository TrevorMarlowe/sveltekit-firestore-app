

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b6cddbed.js","_app/immutable/chunks/scheduler.279f2f81.js","_app/immutable/chunks/index.6fb06d1b.js","_app/immutable/chunks/stores.f19e38c9.js","_app/immutable/chunks/singletons.78a22ca4.js","_app/immutable/chunks/index.e90833d3.js"];
export const stylesheets = [];
export const fonts = [];
