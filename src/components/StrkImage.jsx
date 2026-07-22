import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { cn } from "@/lib/utils"

export const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export function StrkImage({ imgId, query, ratio = "3x4", width = 800, alt = "", className }) {
  const imgRef = useRef(null)

  useEffect(() => {
    const el = imgRef.current
    if (!el) return undefined
    const container = el.closest("section, main, article, div") || el.parentElement
    return ImageHelper.loadImages(strkImgConfig, container)
  }, [])

  return (
    <img
      ref={imgRef}
      alt={alt}
      loading="lazy"
      className={cn("h-full w-full object-cover", className)}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src={SVG_PLACEHOLDER}
    />
  )
}
