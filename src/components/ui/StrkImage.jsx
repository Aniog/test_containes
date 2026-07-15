import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

/**
 * Scans a container for strk image/background tags and loads them.
 * Returns the cleanup function. Re-runs when `deps` change.
 */
export function useStrkImages(deps = []) {
  const ref = useRef(null)
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return ref
}

/**
 * A content image that uses the strk stock-image tagging system.
 * The `src` is an inline string-literal placeholder so the strk-img build
 * plugin can detect it and rewrite it to a runtime URL-resolver helper.
 */
export function StrkImage({
  imgId,
  query,
  ratio = "4x3",
  width = 600,
  alt = "",
  className = "",
}) {
  return (
    <img
      alt={alt}
      className={className}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    />
  )
}

/**
 * Resolve a stock-image URL by imgId from the build-time config.
 * Used for runtime-only image slots (e.g. cart items from localStorage)
 * that the strk-img build plugin cannot statically evaluate.
 * Returns the first cached result URL, or an empty string fallback.
 */
export function getStrkImageUrl(imgId) {
  const entry = strkImgConfig[imgId]
  if (entry && Array.isArray(entry.results) && entry.results.length > 0) {
    return entry.results[0].url
  }
  return ""
}

/**
 * A background-image div using the strk stock-image tagging system.
 */
export function StrkBg({
  bgId,
  query,
  ratio = "16x9",
  width = 1600,
  className = "",
  children,
}) {
  return (
    <div
      className={className}
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
    >
      {children}
    </div>
  )
}
