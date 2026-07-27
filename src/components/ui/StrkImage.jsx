import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

/**
 * Renders a stock image using the strk-img system. The image search query
 * should reference element IDs via [id] brackets (e.g. "[title] [subtitle]").
 * Loads images when the element is mounted.
 */
export function StrkImage({
  imgId,
  query,
  ratio = "4x3",
  width = 800,
  alt = "",
  className = "",
  roundedClass = "rounded-xl",
}) {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [query])

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-slate-100 ${roundedClass} ${className}`}
    >
      <img
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  )
}

/**
 * Renders a div with a background image using the strk-bg system.
 * The parent should have an explicit width/height.
 */
export function StrkBackground({
  bgId,
  query,
  ratio = "16x9",
  width = 1600,
  className = "",
  children,
}) {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [query])

  return (
    <div
      ref={ref}
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={String(width)}
      className={className}
    >
      {children}
    </div>
  )
}

export default StrkImage
