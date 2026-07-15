import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

// Resolve the picked CDN image URL for a given data-strk-img-id from the
// build-time config. Used for images whose imgId is only known at runtime
// (e.g. cart line items sourced from localStorage), where the build plugin
// cannot statically inline the URL.
export function getStrkImageUrl(imgId, fallback = "") {
  const entry = strkImgConfig[imgId]
  const results = entry?.results
  if (!Array.isArray(results) || results.length === 0) return fallback
  if (entry?.picked) {
    const picked = results.find((r) => String(r.id) === String(entry.picked))
    if (picked?.url) return picked.url
  }
  return results[0]?.url || fallback
}

// Scans a container for data-strk-img / data-strk-bg elements and loads them.
// Pass the deps that control which tagged elements are rendered.
export function useStrkImages(deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
