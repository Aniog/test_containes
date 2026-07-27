import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export function useImageLoader(deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, deps)

  return ref
}
