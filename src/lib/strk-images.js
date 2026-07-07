import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

/**
 * Resolve a strk image id to its picked URL directly from the config.
 * Used by components whose image ids cannot be statically resolved at
 * build time (cross-file component props, runtime cart state, route-param
 * driven galleries). Mirrors the plugin's `selectedConfigImageUrl` logic.
 */
export function getStrkImageUrl(imgId) {
  const entry = strkImgConfig[imgId]
  const results = entry?.results
  if (!Array.isArray(results) || results.length === 0) return PLACEHOLDER
  if (entry?.picked) {
    const picked = results.find((r) => String(r.id) === String(entry.picked))
    if (picked?.url) return picked.url
  }
  return results[0]?.url || PLACEHOLDER
}

/**
 * Scans a container for data-strk-img / data-strk-bg elements and loads
 * their stock images. Re-runs whenever `deps` change so dynamically
 * rendered images (tabs, filters, route changes) are populated.
 */
export function useStrkImages(deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}

export { PLACEHOLDER }
