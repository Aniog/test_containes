import strkImgConfig from '@/strk-img-config.json'

/**
 * Resolve a strk image slot id to a public image URL at runtime.
 *
 * The build-time vite-plugin-strk-img inlines image URLs into JSX for
 * statically-traceable image ids. Cart items, however, are hydrated from
 * localStorage at runtime, so their imgId cannot be statically traced.
 * This helper reads the resolved config directly to render a real image URL
 * instead of relying on data-strk-img-id + ImageHelper.loadImages.
 */
export function resolveStrkImageUrl(imgId) {
  if (!imgId) return ''
  const entry = strkImgConfig[imgId]
  if (!entry) return ''
  const results = entry.results
  if (!Array.isArray(results) || results.length === 0) return ''
  const picked = entry.picked
    ? results.find((r) => String(r.id) === String(entry.picked))
    : null
  return (picked && picked.url) || results[0]?.url || ''
}
