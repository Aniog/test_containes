import React, { useEffect, useRef, useState } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "../../strk-img-config.json"
import { cn } from "../../lib/utils"

export default function ProductGallery({ product }) {
  const images = product.images || []
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [product.id])

  if (images.length === 0) return null
  const active = images[activeIndex] || images[0]

  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row" ref={ref}>
      <div className="flex gap-3 md:flex-col md:gap-3">
        {images.map((img, idx) => (
          <button
            type="button"
            key={img.id}
            onClick={() => setActiveIndex(idx)}
            className={cn(
              "luxury-tone relative block w-16 flex-shrink-0 overflow-hidden md:w-20",
              activeIndex === idx
                ? "ring-1 ring-champagne-700 ring-offset-2 ring-offset-bone-50"
                : "opacity-70 hover:opacity-100"
            )}
            style={{ aspectRatio: "4 / 5" }}
            aria-label={`View image ${idx + 1}`}
          >
            <img
              alt=""
              aria-hidden="true"
              data-strk-img-id={`${img.id}-thumb`}
              data-strk-img={img.query}
              data-strk-img-ratio="4x5"
              data-strk-img-width="240"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
      <div
        className="luxury-tone relative flex-1 overflow-hidden"
        style={{ aspectRatio: "4 / 5" }}
      >
        <img
          alt={product.name}
          data-strk-img-id={active.id}
          data-strk-img={active.query}
          data-strk-img-ratio="4x5"
          data-strk-img-width="1100"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
