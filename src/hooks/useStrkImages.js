import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

/**
 * Loads stock images for all `data-strk-img` / `data-strk-bg` elements
 * inside the returned container ref. Re-runs whenever `deps` change so
 * dynamically rendered images (tabs, filters, route changes) are scanned.
 */
export function useStrkImages(deps = []) {
  const containerRef = useRef(null)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return containerRef
}
