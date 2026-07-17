import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

// Scans a container for data-strk-img / data-strk-bg elements and loads them.
// Pass the state values that control which tagged elements are rendered.
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

export const STRK_PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

// Mirrors the buildSharpUrl logic from the strk image plugin so we can resolve
// a configured image URL directly from the config without relying on the DOM
// or ImageHelper having run on a particular container.
function buildSharpUrl(rawUrl, targetWidth, dpr = 2) {
  if (!rawUrl) return rawUrl
  let url
  try {
    url = new URL(rawUrl)
  } catch {
    return rawUrl
  }
  const width = Math.max(800, Math.round((Number(targetWidth) || 1600) * dpr))
  url.searchParams.set('w', String(width))
  url.searchParams.set('q', '90')
  url.searchParams.set('fit', 'max')
  url.searchParams.set('fm', 'jpg')
  return url.toString()
}

function selectedConfigImageUrl(entry) {
  const results = entry?.results
  if (!Array.isArray(results) || results.length === 0) return null
  if (entry?.picked) {
    const picked = results.find((r) => String(r.id) === String(entry.picked))
    if (picked?.url) return picked.url
  }
  return results[0]?.url || null
}

// Resolves the final image URL for a given strk imgId from the config.
export function resolveStrkImageUrl(imgId, config = strkImgConfig) {
  if (!imgId) return null
  const entry = config[imgId]
  if (!entry) return null
  const rawUrl = selectedConfigImageUrl(entry)
  if (!rawUrl) return null
  return buildSharpUrl(rawUrl, entry?.width, 2)
}
