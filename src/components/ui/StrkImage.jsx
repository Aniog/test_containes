import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

/**
 * StrkImage — content image using the strk-img tagging system.
 * `query` should reference DOM ids, e.g. "[item-title] [item-desc]".
 */
export default function StrkImage({
  imgId,
  query,
  ratio = "4x3",
  width = 600,
  alt = "",
  className = "",
  containerRef,
}) {
  return (
    <img
      alt={alt}
      className={className}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={PLACEHOLDER}
    />
  )
}

/**
 * useStrkImages — call ImageHelper.loadImages on a container whenever deps change.
 */
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
