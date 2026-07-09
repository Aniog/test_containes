import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

// Scans a container for [data-strk-img-id] / [data-strk-bg-id] elements and
// loads their stock images. Re-runs whenever `deps` change so dynamically
// mounted images (tabs, filters, route changes) are populated too.
export function useStrkImages(deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    let cleanup = null
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        cleanup = ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === "function") cleanup()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
