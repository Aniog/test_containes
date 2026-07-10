import { useState } from "react"
import { cn } from "../../lib/utils.js"

export default function ProductGallery({ images = [], name }) {
  const [active, setActive] = useState(0)
  if (!images.length) return null
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
      {/* Thumbnails */}
      <div className="order-2 md:order-1 md:col-span-2 flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible no-scrollbar">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            className={cn(
              "relative flex-shrink-0 w-20 md:w-full aspect-square overflow-hidden border transition-colors",
              i === active
                ? "border-champagne"
                : "border-hairline hover:border-ink/30",
            )}
          >
            <img src={src} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
          </button>
        ))}
      </div>
      {/* Main image */}
      <div className="order-1 md:order-2 md:col-span-10">
        <div className="relative aspect-[4/5] overflow-hidden bg-ivory-soft">
          <img
            src={images[active]}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
          />
        </div>
      </div>
    </div>
  )
}
