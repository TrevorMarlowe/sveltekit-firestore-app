

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.8ff25273.js","_app/immutable/chunks/scheduler.279f2f81.js","_app/immutable/chunks/index.dfd36af1.js","_app/immutable/chunks/stores.d9c87f28.js","_app/immutable/chunks/singletons.5686295c.js","_app/immutable/chunks/index.e90833d3.js","_app/immutable/chunks/index.40b40403.js"];
export const stylesheets = [];
export const fonts = [];
