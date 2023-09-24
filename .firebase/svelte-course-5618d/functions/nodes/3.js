

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.85477396.js","_app/immutable/chunks/scheduler.019f240c.js","_app/immutable/chunks/index.2a734d87.js"];
export const stylesheets = [];
export const fonts = [];
