import { useEffect, useRef, useState } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { cn } from "@/lib/utils"

export default function ProductGallery({ product }) {
  const containerRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    setActive(0)
  }, [product.id])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [product.id, active])

  const images = [
    { id: product.imgIds.main, query: `[product-${product.id}-name]` },
    { id: product.imgIds.alt, query: `[product-${product.id}-name] alternate view` },
  ]

  return (
    <div ref={containerRef} className="w-full">
      {/* Main image */}
      <div className="relative w-full aspect-[4/5] bg-umber overflow-hidden">
        <img
          key={images[active].id}
          alt={product.name}
          data-strk-img-id={images[active].id}
          data-strk-img={images[active].query}
          data-strk-img-ratio="4x5"
          data-strk-img-width="1200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700"
        />
      </div>

      {/* Thumbnails */}
      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.concat([
          { id: `${product.id}-detail-1`, query: `[product-${product.id}-name] detail close up` },
          { id: `${product.id}-detail-2`, query: `[product-${product.id}-name] on model editorial warm` },
        ]).map((img, i) => (
          <button
            type="button"
            key={`${img.id}-${i}`}
            onClick={() => setActive(i < 2 ? i : 0)}
            className={cn(
              "relative aspect-square overflow-hidden bg-umber border transition-colors",
              i === active ? "border-gold" : "border-transparent hover:border-bone/30"
            )}
            aria-label={`View image ${i + 1}`}
          >
            <img
              alt={`${product.name} view ${i + 1}`}
              data-strk-img-id={img.id}
              data-strk-img={img.query}
              data-strk-img-ratio="1x1"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
