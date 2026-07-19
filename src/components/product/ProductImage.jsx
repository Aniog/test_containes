import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

/**
 * ProductImage
 * - Renders a stock-image-driven <img>.
 * - Pass a `query` (the data-strk-img search string) and a unique `imgId`.
 * - The image element participates in a `containerRef` that the parent passes
 *   to `ImageHelper.loadImages(...)` (see e.g. ProductCard).
 * - No `src` attribute on the <img>: the parent reserves the layout via
 *   `aspect-[4/5]`, so the box stays put while the stock image system
 *   resolves and sets `src` at runtime (via ImageHelper).
 */
export default function ProductImage({
  query,
  ratio = "4x5",
  width = 600,
  imgId,
  className = "",
  alt = "",
  showBadge = null,
}) {
  const localRef = useRef(null)

  // If a parent hasn't loaded images yet, run on our own ref so
  // standalone use also triggers the stock system.
  useEffect(() => {
    if (!localRef.current) return
    return ImageHelper.loadImages(strkImgConfig, localRef.current.parentElement)
  }, [query, imgId])

  return (
    <div ref={localRef} className={`relative w-full h-full ${className}`}>
      <img
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {showBadge}
    </div>
  )
}
