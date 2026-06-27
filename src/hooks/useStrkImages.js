import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

// Loads all strk-img / strk-bg slots inside the container.
// Re-runs whenever `deps` change (e.g. tab/filter/route state that mounts new images).
export function useStrkImages(deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
