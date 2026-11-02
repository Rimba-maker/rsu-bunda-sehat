/** Base-path-safe URLs for files in /public (site is deployed under /rsu-bunda-sehat). */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => `${base}/${path.replace(/^\//, '')}`;
export const img = (name: string) => url(`img/${name}.jpg`);
