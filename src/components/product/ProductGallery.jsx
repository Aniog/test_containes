import { useState } from "react"
import { StockImage } from "@/components/ui/StockImage"
import { cn } from "@/lib/utils"

export function ProductGallery({ product }) {
  const [active, setActive] = useState(0)
  const images = product.images || []
  const main = images[active] || images[0]

  if (!main) {
    return (
      <div className="aspect-[4/5] w-full bg-ivory-200" aria-label="Product image" />
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[88px_1fr]">
      {/* Thumbnails (desktop) */}
      <div className="order-2 hidden flex-col gap-3 md:order-1 md:flex">
        {images.map((img, idx) => (
          <button
            key={img.imgId}
            type="button"
            onClick={() => setActive(idx)}
            aria-label={`View image ${idx + 1}`}
            aria-current={active === idx ? "true" : undefined}
            className={cn(
              "block aspect-square w-full overflow-hidden bg-ivory-200 outline-none ring-offset-2 transition-all duration-300",
              active === idx
                ? "ring-1 ring-ink-500 ring-offset-ivory-100"
                : "opacity-70 hover:opacity-100",
            )}
          >
            <StockImage
              imgId={`${img.imgId}-thumb`}
              query={`prod-${product.slug}-title`}
              ratio="1x1"
              width="180"
              alt={`${product.name} thumbnail ${idx + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="order-1 overflow-hidden bg-ivory-200 md:order-2">
        <div className="aspect-[4/5] w-full md:aspect-[4/5]">
          <StockImage
            key={main.imgId}
            imgId={`${main.imgId}-main`}
            query={`prod-${product.slug}-desc prod-${product.slug}-title`}
            ratio={main.ratio}
            width={main.width}
            alt={product.name}
            eager
            className="h-full w-full object-cover animate-fade-in"
          />
        </div>
      </div>

      {/* Thumbnails (mobile strip) */}
      <div className="order-3 flex gap-3 overflow-x-auto md:hidden">
        {images.map((img, idx) => (
          <button
            key={img.imgId}
            type="button"
            onClick={() => setActive(idx)}
            aria-label={`View image ${idx + 1}`}
            className={cn(
              "block h-16 w-16 flex-shrink-0 overflow-hidden bg-ivory-200 transition-all duration-300",
              active === idx ? "ring-1 ring-ink-500" : "opacity-70",
            )}
          >
            <StockImage
              imgId={`${img.imgId}-mob`}
              query={`prod-${product.slug}-title`}
              ratio="1x1"
              width="120"
              alt={`${product.name} thumbnail ${idx + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
