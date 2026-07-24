import { useEffect, useRef, useState } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function ProductGallery({ images, name, productId }) {
  const containerRef = useRef(null)
  const [active, setActive] = useState(0)
  const list = images && images.length > 0 ? images : []

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [productId, list.length])

  useEffect(() => {
    setActive(0)
  }, [productId])

  if (list.length === 0) return null
  const current = list[Math.min(active, list.length - 1)]

  return (
    <div ref={containerRef} className="grid gap-4 md:grid-cols-[80px_1fr]">
      {/* Thumbnails (desktop) */}
      <div className="order-2 hidden flex-col gap-3 md:order-1 md:flex">
        {list.map((img, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`View image ${idx + 1}`}
            onClick={() => setActive(idx)}
            className={`relative block aspect-[3/4] w-20 overflow-hidden border transition-colors ${
              active === idx
                ? "border-ink"
                : "border-line-light hover:border-ink/40"
            }`}
          >
            <img
              alt=""
              aria-hidden
              data-strk-img-id={`${productId}-thumb-${idx}`}
              data-strk-img={img.query}
              data-strk-img-ratio={img.ratio || "3x4"}
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="order-1 md:order-2">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-paper-2">
          <img
            key={active}
            alt={`${name} — view ${active + 1}`}
            data-strk-img-id={`${productId}-main-${active}`}
            data-strk-img={current.query}
            data-strk-img-ratio={current.ratio || "3x4"}
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover fade-up"
          />
        </div>
        {/* Mobile thumb strip */}
        <div className="mt-3 flex gap-2 overflow-x-auto md:hidden">
          {list.map((img, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`View image ${idx + 1}`}
              onClick={() => setActive(idx)}
              className={`relative block aspect-[3/4] w-16 flex-shrink-0 overflow-hidden border ${
                active === idx
                  ? "border-ink"
                  : "border-line-light"
              }`}
            >
              <img
                alt=""
                aria-hidden
                data-strk-img-id={`${productId}-m-thumb-${idx}`}
                data-strk-img={img.query}
                data-strk-img-ratio={img.ratio || "3x4"}
                data-strk-img-width="160"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
