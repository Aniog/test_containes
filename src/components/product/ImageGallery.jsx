import { useState } from "react"
import { makeStrkImageLoaderRef } from "@/components/ui/StrkImage"
import { cn } from "@/lib/utils"

export default function ImageGallery({ product }) {
  const [activeIdx, setActiveIdx] = useState(0)

  const galleryIds = product.galleryImgIds || []
  const galleryQueries = product.imageQueries || [
    product.imageQuery,
    `${product.imageQuery} detail`,
    `${product.imageQuery} worn`,
    `${product.imageQuery} styled`,
  ]

  return (
    <div ref={makeStrkImageLoaderRef([activeIdx])} className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-visible no-scrollbar">
        {galleryIds.map((gid, i) => (
          <button
            key={gid}
            type="button"
            onClick={() => setActiveIdx(i)}
            aria-label={`View image ${i + 1}`}
            className={cn(
              "relative w-16 md:w-20 aspect-[4/5] flex-shrink-0 overflow-hidden bg-cream-200 transition-all",
              i === activeIdx
                ? "ring-1 ring-espresso-800 ring-offset-2 ring-offset-cream-50"
                : "opacity-60 hover:opacity-100"
            )}
          >
            <img
              data-strk-img-id={gid}
              data-strk-img={galleryQueries[i] || product.imageQuery}
              data-strk-img-ratio="4x5"
              data-strk-img-width="200"
              alt={`${product.name} view ${i + 1}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 relative aspect-[4/5] md:aspect-[4/5] bg-cream-200 overflow-hidden">
        <img
          key={galleryIds[activeIdx] || activeIdx}
          data-strk-img-id={`${product.id}-gallery-main-${activeIdx}`}
          data-strk-img={galleryQueries[activeIdx] || product.imageQuery}
          data-strk-img-ratio="4x5"
          data-strk-img-width="1200"
          alt={product.name}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
