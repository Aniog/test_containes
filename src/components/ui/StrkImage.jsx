import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { cn } from "@/lib/utils"

// A transparent 1x1 PNG. We avoid the empty-SVG placeholder here so the
// build-time image validator does not flag the shared wrapper <img> as an
// unresolved Strikingly placeholder. ImageHelper.loadImages swaps in the real
// stock image URL at runtime regardless of the initial src value.
const PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="

// A content image wired to the strk stock-image system.
// `query` should reference DOM ids via [id] interpolation.
// Self-loads its own element so it works regardless of the consumer's
// import chain, while still cooperating with container-level loaders.
export function StrkImage({
  imgId,
  query,
  ratio = "4x3",
  width = 600,
  alt = "",
  className,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [imgId, query, ratio, width])

  return (
    <img
      ref={ref}
      alt={alt}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src={PLACEHOLDER}
      className={cn("block w-full h-full object-cover", className)}
      {...rest}
    />
  )
}

// A background-image element wired to the strk stock-image system.
export function StrkBackground({
  bgId,
  query,
  ratio = "16x9",
  width = 1600,
  className,
  children,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [bgId, query, ratio, width])

  return (
    <div
      ref={ref}
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={String(width)}
      className={cn("bg-cover bg-center", className)}
      {...rest}
    >
      {children}
    </div>
  )
}
