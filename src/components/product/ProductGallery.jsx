import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function ProductGallery({ product }) {
  React.useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, document.body)
  }, [])

  const [activeIndex, setActiveIndex] = useState(0)
  const active = product.images[activeIndex]

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
      {/* Thumbnails (vertical on desktop, horizontal on mobile) */}
      <div className="md:w-20 flex md:flex-col gap-2 md:gap-3 md:shrink-0">
        {product.images.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`View image ${i + 1} of ${product.images.length}`}
            className={cn(
              "relative aspect-square w-full overflow-hidden bg-bone-soft border transition-colors duration-300",
              activeIndex === i
                ? "border-ink"
                : "border-line hover:border-ink/40"
            )}
          >
            <img
              alt=""
              aria-hidden="true"
              data-strk-img-id={img.id}
              data-strk-img={`[prod-${product.id}-title] [prod-${product.id}-desc] product detail thumbnail ${i}`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="160"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 relative aspect-[1/1] md:aspect-[4/5] overflow-hidden bg-bone-soft">
        <img
          alt={`${product.name} — view ${activeIndex + 1}`}
          data-strk-img-id={`${active.id}-main`}
          data-strk-img={`[prod-${product.id}-title] [prod-${product.id}-desc] ${product.name} main view`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="1000"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover"
          key={active.id}
        />
      </div>
    </div>
  )
}
