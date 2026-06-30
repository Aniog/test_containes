import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

// One-time image loader. Mounts a MutationObserver on the body so that
// dynamically rendered <img data-strk-img-* /> and <div data-strk-bg-* />
// elements are processed as React mounts them.
export default function ImageLoader() {
  const startedRef = useRef(false)

  useEffect(() => {
    if (startedRef.current) return
    startedRef.current = true
    if (typeof document === "undefined") return
    const cleanup = ImageHelper.loadImages(strkImgConfig, document.body) || (() => {})
    return cleanup
  }, [])

  return null
}
