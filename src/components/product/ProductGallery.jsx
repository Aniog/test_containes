import { useState } from "react"
import StrkImage from "@/components/ui/StrkImage"
import { cn } from "@/lib/utils"

export default function ProductGallery({ product }) {
  const images = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { id: product.hoverImgId, query: `[${product.descId}] [${product.titleId}]` },
    { id: `${product.id}-img-3`, query: `[${product.titleId}] detail close up` },
    { id: `${product.id}-img-4`, query: `[${product.titleId}] worn on model` },
  ]
  const [activeIndex, setActiveIndex] = useState(0)
  const active = images[activeIndex]

  return (
    <div className="grid grid-cols-12 gap-3 md:gap-4">
      {/* Thumbnails (desktop) */}
      <ul className="hidden md:flex md:flex-col col-span-1 gap-3">
        {images.map((img, i) => (
          <li key={img.id}>
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              className={cn(
                "block w-full aspect-square overflow-hidden border transition-colors",
                i === activeIndex
                  ? "border-ink"
                  : "border-transparent hover:border-mist",
              )}
              aria-label={`View image ${i + 1}`}
              aria-pressed={i === activeIndex}
            >
              <StrkImage
                imgId={`${img.id}-thumb`}
                query={img.query}
                ratio="1x1"
                width={200}
                alt=""
                className="h-full w-full"
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Main image */}
      <div className="col-span-12 md:col-span-11">
        <div className="relative bg-paper-warm">
          <StrkImage
            imgId={`${active.id}-main`}
            query={active.query}
            ratio="4x5"
            width={1200}
            alt={product.name}
            className="w-full"
            style={{ aspectRatio: "4 / 5" }}
            imgClassName="duration-500"
          />
        </div>

        {/* Mobile thumbnails */}
        <ul className="flex md:hidden gap-2 mt-3 overflow-x-auto no-scrollbar">
          {images.map((img, i) => (
            <li key={`${img.id}-mob`}>
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "block w-16 h-16 flex-shrink-0 overflow-hidden border",
                  i === activeIndex
                    ? "border-ink"
                    : "border-transparent",
                )}
                aria-label={`View image ${i + 1}`}
                aria-pressed={i === activeIndex}
              >
                <StrkImage
                  imgId={`${img.id}-mob-thumb`}
                  query={img.query}
                  ratio="1x1"
                  width={120}
                  alt=""
                  className="h-full w-full"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
