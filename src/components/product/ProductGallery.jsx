import { useState } from "react"
import { cn } from "@/lib/utils"
import StrkImage from "@/components/StrkImage"

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0)
  const images = product.images || []
  const current = images[active] || images[0]

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6">
      {/* Thumbnails (vertical on desktop, horizontal on mobile) */}
      {images.length > 1 && (
        <div className="md:w-20 flex md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-visible no-scrollbar">
          {images.map((img, i) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "flex-shrink-0 w-20 h-24 md:w-20 md:h-24 overflow-hidden bg-surface border transition-colors duration-300",
                active === i
                  ? "border-accent"
                  : "border-line hover:border-line-strong",
              )}
              aria-label={`Show image ${i + 1}`}
              aria-pressed={active === i}
            >
              <StrkImage
                id={img.id}
                query={img.query}
                ratio="4x5"
                width={300}
                alt={img.alt}
                imgClassName="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Main image */}
      <div className="flex-1 relative aspect-[4/5] bg-surface overflow-hidden">
        {current && (
          <StrkImage
            id={current.id}
            query={current.query}
            ratio="4x5"
            width={1400}
            alt={current.alt}
            eager
            imgClassName="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  )
}
