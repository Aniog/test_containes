import { useState } from "react"
import { cn } from "@/lib/utils"
import { getStrkImageUrl } from "@/lib/strk-images"

const FALLBACK =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"

// Gallery uses only the product's two statically-defined image IDs so the
// build-time image plugin can resolve them. All images are rendered up front
// and toggled via opacity, so no runtime re-scan is needed when switching.
const gallery = [
  { key: "primary", alt: (p) => p.name },
  { key: "secondary", alt: (p) => `${p.name} worn` },
]

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 md:w-20 shrink-0">
        {gallery.map((img, i) => {
          const id = i === 0 ? product.imgId : product.imgId2
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                "relative w-16 md:w-20 aspect-[4x5] overflow-hidden bg-cream-deep shrink-0 transition-all duration-300",
                active === i
                  ? "ring-1 ring-gold ring-offset-2 ring-offset-cream"
                  : "opacity-60 hover:opacity-100"
              )}
              aria-label={`View image ${i + 1}`}
            >
              <img
                alt={img.alt(product)}
                src={getStrkImageUrl(id) || FALLBACK}
                className="w-full h-full object-cover"
              />
            </button>
          )
        })}
      </div>

      {/* Main images — stacked, opacity-toggled */}
      <div className="relative flex-1 aspect-[4x5] overflow-hidden bg-cream-deep">
        {gallery.map((img, i) => {
          const id = i === 0 ? product.imgId : product.imgId2
          return (
            <img
              key={i}
              alt={img.alt(product)}
              src={getStrkImageUrl(id) || FALLBACK}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-luxury",
                active === i ? "opacity-100" : "opacity-0"
              )}
            />
          )
        })}
      </div>
    </div>
  )
}
