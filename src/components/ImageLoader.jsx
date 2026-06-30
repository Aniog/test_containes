import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

export { PLACEHOLDER }

/**
 * Wraps children in a container ref and triggers ImageHelper.loadImages
 * whenever `deps` change (so newly mounted tagged images get scanned).
 */
export default function ImageLoader({ children, className, deps = [], as: Tag = "div", ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
