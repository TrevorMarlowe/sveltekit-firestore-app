

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.b6c23c01.js","_app/immutable/chunks/scheduler.279f2f81.js","_app/immutable/chunks/index.dfd36af1.js","_app/immutable/chunks/firebase.441e80f6.js","_app/immutable/chunks/index.e90833d3.js"];
export const stylesheets = [];
export const fonts = [];
