import { useState } from "react"
import { StrkImage, ImageLoader } from "@/components/Image"
import { cn } from "@/lib/utils"

export default function ProductGallery({ product }) {
  const [selected, setSelected] = useState(0)

  return (
    <ImageLoader>
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
          {product.images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setSelected(idx)}
              className={cn(
                "shrink-0 w-16 h-20 md:w-20 md:h-24 border overflow-hidden transition-colors",
                selected === idx
                  ? "border-champagne"
                  : "border-divider hover:border-cream/30"
              )}
              aria-label={`View image ${idx + 1}`}
            >
              <StrkImage
                id={`gallery-thumb-${product.id}-${idx}`}
                query={`[product-name-${product.id}]`}
                ratio="3x4"
                width="200"
                alt={`${product.name} view ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        <div className="flex-1 aspect-[4/5] bg-surface-highlight overflow-hidden">
          <StrkImage
            id={`gallery-main-${product.id}`}
            query={`[product-name-${product.id}]`}
            ratio="3x4"
            width="900"
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </ImageLoader>
  )
}
