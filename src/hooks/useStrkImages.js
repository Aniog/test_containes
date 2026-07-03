import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

// Convenience hook: scans a container for data-strk-img / data-strk-bg
// elements and loads their stock images. Re-runs whenever `deps` change so
// dynamically rendered images (tabs, filters, route changes) are picked up.
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
