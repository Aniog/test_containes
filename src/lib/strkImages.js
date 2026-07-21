import strkImgConfig from '@/strk-img-config.json'

/**
 * Resolve the picked image URL for a given strk-img-id from the
 * pre-scanned config. Returns '' if not found.
 */
export function resolveStrkImage(imgId) {
  const entry = strkImgConfig?.[imgId]
  if (!entry) return ''
  const pickedId = entry.picked
  if (!pickedId) return ''
  const picked = (entry.results || []).find((r) => r.id === pickedId)
  return picked?.url || ''
}
