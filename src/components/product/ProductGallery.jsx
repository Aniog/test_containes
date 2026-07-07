import { useState } from "react"
import { ProductImage } from "@/lib/imagery"
import { cn } from "@/lib/utils"

export function ProductGallery({ product }) {
  // Build a small fake gallery: primary, secondary, third composition
  const variants = [0, 1, 0]
  const frames = [0, 1, 2]
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6">
      {/* Thumbnails */}
      <ul className="flex md:flex-col gap-3 md:gap-4">
        {frames.map((i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={cn(
                "block w-20 h-24 md:w-24 md:h-28 overflow-hidden border transition-colors duration-300",
                active === i ? "border-cocoa" : "border-line hover:border-cocoa-100"
              )}
            >
              <ProductImage
                id={product.image}
                name={product.name}
                variant={variants[i]}
                className="w-full h-full"
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Main image */}
      <div className="flex-1 relative aspect-[3/4] overflow-hidden bg-sand">
        <ProductImage
          id={product.image}
          name={product.name}
          variant={variants[active]}
          className="w-full h-full"
        />
      </div>
    </div>
  )
}
