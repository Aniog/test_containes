import { useEffect } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

/**
 * Triggers the stock-image loader on the given container.
 * Re-runs when `deps` change (e.g. route change, tab switch, etc).
 */
export function useStrkImages(containerRef, deps = []) {
  useEffect(() => {
    if (!containerRef?.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
