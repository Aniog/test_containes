import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

/**
 * Loads stock images for any data-strk-img / data-strk-bg elements
 * inside the returned container ref. Re-runs whenever `deps` change
 * (e.g. route or filter state) so newly-mounted image nodes are scanned.
 */
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
