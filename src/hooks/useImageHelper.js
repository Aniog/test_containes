import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

// React hook around the strk ImageHelper.loadImages runtime.
// Scans the DOM subtree inside the provided ref's element each time
// `deps` change, so newly mounted images get loaded too.
export function useImageHelper(ref, deps = []) {
  const lastRef = useRef(null)

  useEffect(() => {
    const target = ref?.current
    if (!target) return undefined
    if (lastRef.current && lastRef.current !== target) {
      ImageHelper.disconnect(lastRef.current)
    }
    lastRef.current = target

    const frameId = window.requestAnimationFrame(() => {
      return ImageHelper.loadImages(strkImgConfig, target)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      ImageHelper.disconnect(target)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
