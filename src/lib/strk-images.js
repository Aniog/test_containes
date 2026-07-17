import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

/**
 * Scans a container for data-strk-img / data-strk-bg elements and loads them.
 * Pass deps to re-scan when conditional images appear.
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

export const IMG_PLACEHOLDER = PLACEHOLDER

/**
 * Resolve an image ID to its picked URL from the strk-img config at runtime.
 * Used for runtime-state images (e.g. cart line items) that cannot be
 * statically inlined at build time. Returns the first available result URL.
 */
export function resolveImgUrl(imgId) {
  if (!imgId) return ""
  const entry = strkImgConfig[imgId]
  const results = entry?.results
  if (!Array.isArray(results) || results.length === 0) return ""
  if (entry?.picked) {
    const picked = results.find((r) => String(r.id) === String(entry.picked))
    if (picked?.url) return picked.url
  }
  return results[0]?.url || ""
}
