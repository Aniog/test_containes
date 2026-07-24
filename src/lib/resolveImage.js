import strkImgConfig from '@/strk-img-config.json'

/**
 * Resolve a stock image URL by its data-strk-img-id.
 * Returns the first result URL from the config, or '' if not found.
 *
 * Use this for images rendered in dynamic contexts (e.g. cart drawer,
 * where the imgId is built at runtime and the static plugin can't
 * register it). For statically-rendered images, prefer the
 * data-strk-img tagging system + useImageLoader.
 */
export function resolveImageUrl(imgId) {
  const entry = strkImgConfig[imgId]
  if (!entry || !Array.isArray(entry.results) || entry.results.length === 0) {
    return ''
  }
  return entry.results[0].url || ''
}
