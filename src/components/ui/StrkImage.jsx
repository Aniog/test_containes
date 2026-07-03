import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

/**
 * Scans a container for data-strk-img / data-strk-bg elements and loads
 * stock images. Re-runs whenever `deps` change so dynamically rendered
 * images (tabs, filters, route changes) are populated.
 */
export function useStrkImages(deps = []) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return ref
}

/**
 * Content image backed by the strk stock-image system.
 * `query` should reference neighbouring text element IDs, e.g. "[title-id] [desc-id]".
 */
export function StrkImage({
  imgId,
  query,
  ratio = "4x3",
  width = 600,
  alt = "",
  className = "",
  titleId,
  descId,
  ...rest
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
      {...rest}
    />
  )
}

/**
 * Background image element backed by the strk stock-image system.
 * Render as a div; pass children/className as needed.
 */
export function StrkBg({
  bgId,
  query,
  ratio = "16x9",
  width = 1600,
  className = "",
  children,
  ...rest
}) {
  return (
    <div
      className={className}
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      {...rest}
    >
      {children}
    </div>
  )
}

export { PLACEHOLDER }
