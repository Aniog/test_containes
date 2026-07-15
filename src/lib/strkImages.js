// Resolves a Strikingly image id to its picked CDN url from the build-time
// strk-img-config. Used for components whose image id is only known at runtime
// (e.g. cart line items loaded from localStorage), where the build scanner
// cannot statically resolve the data-strk-img-id expression.
import strkImgConfig from '@/strk-img-config.json'

const urlCache = {}

export function resolveStrkImage(imgId) {
  if (urlCache[imgId]) return urlCache[imgId]
  const entry = strkImgConfig[imgId]
  if (!entry) return null
  const picked = entry.picked
  const result = (entry.results || []).find((r) => r.id === picked)
  const url = result?.url || entry.results?.[0]?.url || null
  if (url) urlCache[imgId] = url
  return url
}
