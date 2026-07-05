import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { cn } from "@/lib/utils"

const RATIO_CLASSES = {
  "3x2": "aspect-[3/2]",
  "16x9": "aspect-video",
  "4x3": "aspect-[4/3]",
  "1x1": "aspect-square",
  "3x4": "aspect-[3/4]",
  "9x16": "aspect-[9/16]",
  "2x3": "aspect-[2/3]",
}

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function StockImage({
  imgId,
  query = "",
  ratio = "3x2",
  width = 1200,
  alt = "",
  className = "",
  imgClassName = "",
  priority = false,
  bg = false,
  children,
  ...rest
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return undefined
    const id = window.requestAnimationFrame(() => {
      try {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      } catch (err) {
        // silent — non-critical in dev
        console.warn("ImageHelper.loadImages failed", err)
      }
    })
    return () => window.cancelAnimationFrame(id)
  }, [imgId, query, priority])

  const ratioClass = RATIO_CLASSES[ratio] || RATIO_CLASSES["3x2"]

  if (bg) {
    return (
      <div
        ref={containerRef}
        data-strk-bg-id={imgId}
        data-strk-bg={query}
        data-strk-bg-ratio={ratio}
        data-strk-bg-width={width}
        className={cn(ratioClass, "bg-bone-2 overflow-hidden", className)}
        aria-label={alt}
        role={alt ? "img" : undefined}
        {...rest}
      >
        {children}
      </div>
    )
  }

  return (
    <div ref={containerRef} className={cn(ratioClass, "bg-bone-2 overflow-hidden", className)} {...rest}>
      <img
        alt={alt}
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={PLACEHOLDER}
        loading={priority ? "eager" : "lazy"}
        className={cn("w-full h-full object-cover", imgClassName)}
      />
      {children}
    </div>
  )
}
