import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

// Runtime resolver: looks up the picked image URL for a given strk-img-id
// from the generated config. Use this for <img> tags whose imgId comes from
// runtime state (e.g. cart items) or component props that the build-time
// static evaluator cannot trace (e.g. ProductCard receiving `product` as a prop).
// Returns the placeholder SVG if no URL is found.
const PLACEHOLDER_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export function resolveImageUrl(imgId) {
  if (!imgId) return PLACEHOLDER_SVG
  const entry = strkImgConfig[imgId]
  if (!entry) return PLACEHOLDER_SVG
  const results = entry.results || []
  if (entry.picked) {
    const picked = results.find((r) => String(r.id) === String(entry.picked))
    if (picked?.url) return picked.url
  }
  return results[0]?.url || PLACEHOLDER_SVG
}

// Reusable hook: attach the returned ref to a stable container that wraps
// all data-strk-img / data-strk-bg elements. Re-runs when `deps` change so
// dynamically rendered images (tabs, filters, modals) get scanned.
export function useStrkImages(deps = []) {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return containerRef
}

export { strkImgConfig }
