import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

/**
 * Scans a container for strk-img / strk-bg elements and loads images.
 * Returns the cleanup function.
 */
export function useStrkImages(containerRef, deps = []) {
  useEffect(() => {
    if (!containerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

/**
 * Content image using the strk-img tagging system.
 * `query` should reference element IDs, e.g. "[product-name] [product-desc]".
 */
export function StrkImage({
  imgId,
  query,
  ratio = "4x3",
  width = 600,
  alt = "",
  className = "",
  src = PLACEHOLDER,
  ...rest
}) {
  return (
    <img
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={src}
      alt={alt}
      className={className}
      {...rest}
    />
  )
}

/**
 * Background image element using the strk-bg tagging system.
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
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      className={className}
      {...rest}
    >
      {children}
    </div>
  )
}

export { PLACEHOLDER }
