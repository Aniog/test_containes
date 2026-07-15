import { useEffect, useRef, useState } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import StrkImage from "@/components/ui/StrkImage"
import { cn } from "@/lib/utils"

/**
 * ProductGallery
 * - Vertical thumbnail strip on the left (desktop) or horizontal strip on mobile.
 * - Click a thumbnail to swap the main image.
 * - Each image is a slightly different editorial framing of the same piece.
 */
export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [active, product.id])

  const mainRatio = "4x5"
  const thumbs = product.images.map((imgId, i) => ({
    id: imgId,
    index: i,
    query: `[${
      product.titleId
    }] [${
      product.descId
    }] editorial gold ${product.name.toLowerCase()} view ${i + 1} on dark warm background`,
  }))

  return (
    <div ref={ref} className="flex flex-col-reverse gap-4 md:flex-row">
      {/* Thumbnails */}
      <div className="flex flex-row gap-3 overflow-x-auto md:w-20 md:flex-col md:gap-3 md:overflow-visible">
        {thumbs.map((thumb, i) => (
          <button
            key={thumb.id}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "relative block aspect-[4/5] w-20 flex-shrink-0 overflow-hidden border transition-colors duration-300",
              active === i ? "border-ink" : "border-transparent hover:border-hairline",
            )}
            aria-label={`View image ${i + 1} of ${thumbs.length}`}
          >
            <StrkImage
              id={`${product.id}-thumb-${i}`}
              query={thumb.query}
              ratio="4x5"
              width={240}
              alt={`${product.name} thumbnail ${i + 1}`}
              fallback="bg-hairline/60"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1">
        <div className="relative">
          <StrkImage
            id={`${product.id}-main-${active}`}
            query={
              thumbs[active]?.query ||
              `[${product.descId}] [${product.titleId}] editorial gold ${product.name}`
            }
            ratio={mainRatio}
            width={1100}
            eager
            alt={`${product.name} — view ${active + 1}`}
            fallback="bg-hairline/60"
          />
          {product.badge && (
            <span className="absolute left-4 top-4 z-10 inline-flex items-center bg-canvas/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink">
              {product.badge}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
