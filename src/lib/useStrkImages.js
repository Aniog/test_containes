import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

// Scans a container for data-strk-img / data-strk-bg elements and loads them.
// Re-runs whenever any of the provided deps change (e.g. active tab, filter).
export function useStrkImages(deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
