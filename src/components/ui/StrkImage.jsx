import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { resolveStrkImgUrl } from "@/lib/utils"

/**
 * Content image backed by the strk-img stock system.
 * `query` should reference DOM element IDs via [id] tokens.
 */
export function StrkImage({
  imgId,
  query,
  ratio = "4x3",
  width = 600,
  alt = "",
  className = "",
  ...rest
}) {
  return (
    <img
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src={resolveStrkImgUrl(imgId) || ""}
      alt={alt}
      className={className}
      {...rest}
    />
  )
}

/**
 * Background image div backed by the strk-img stock system.
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
      data-strk-bg-width={String(width)}
      className={className}
      {...rest}
    >
      {children}
    </div>
  )
}

/**
 * Hook that scans a container for strk-img slots and loads them.
 * Pass the state values that control which slots are rendered.
 */
export function useStrkImages(deps = []) {
  const ref = useRef(null)
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        return ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return ref
}
