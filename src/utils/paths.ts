/** Prefix a root-relative URL with the configured Astro base path. */
export function withBase(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;

  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;
}
