import React, { useState } from "react"
import ProductImage from "@/components/ui/ProductImage"
import { cn } from "@/lib/utils"

export default function Gallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const images = product.images || []

  if (!images.length) return null

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
      {/* Thumbnails (desktop) / horizontal strip (mobile) */}
      <ul className="flex md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-visible no-scrollbar md:w-20 lg:w-24">
        {images.map((img, idx) => {
          const isActive = idx === activeIndex
          return (
            <li key={img.imgId} className="flex-shrink-0">
              <button
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`View image ${idx + 1}`}
                className={cn(
                  "block w-16 md:w-20 lg:w-24 aspect-product overflow-hidden border transition-colors",
                  isActive ? "border-espresso" : "border-taupe hover:border-mink"
                )}
              >
                <ProductImage
                  imgId={img.imgId}
                  ratio={img.ratio}
                  width={img.width}
                  query={img.query}
                  alt={`${product.name} – view ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            </li>
          )
        })}
      </ul>

      {/* Main image — uses the same imgId as the active thumbnail so the
          stock image entry from strk-img-config.json is reused, and the
          large/lightbox renders the same pick as the small thumb. */}
      <div className="flex-1 relative aspect-product overflow-hidden bg-cream-deep">
        <ProductImage
          imgId={images[activeIndex].imgId}
          ratio={images[activeIndex].ratio}
          width={Math.max(images[activeIndex].width || 0, 1200)}
          query={images[activeIndex].query}
          alt={`${product.name} – primary`}
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
