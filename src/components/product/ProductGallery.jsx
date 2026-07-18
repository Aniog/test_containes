import { useEffect, useRef, useState } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { cn } from "@/lib/utils"

const transparentGif =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"

export function ProductGallery({ product }) {
  const ref = useRef(null)
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (!ref.current) return
    const cleanup = ImageHelper.loadImages(strkImgConfig, ref.current)
    return () => {
      if (typeof cleanup === "function") cleanup()
    }
  }, [])

  return (
    <div ref={ref} className="flex flex-col gap-4 lg:flex-row-reverse">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-muted lg:flex-1">
        {product.images.map((variant, idx) => (
          <img
            key={variant}
            data-strk-img-id={`${product.id}-gallery-${variant}-${idx}`}
            data-strk-img={`[product-detail-title] [product-detail-desc]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src={transparentGif}
            alt={`${product.name} view ${idx + 1}`}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
              selected === idx ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>

      <div className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible">
        {product.images.map((variant, idx) => (
          <button
            key={variant}
            onClick={() => setSelected(idx)}
            className={cn(
              "relative aspect-square w-20 flex-shrink-0 overflow-hidden rounded-md border bg-muted transition-colors lg:w-24",
              selected === idx
                ? "border-primary"
                : "border-border hover:border-primary/50",
            )}
          >
            <img
              data-strk-img-id={`${product.id}-gallery-${variant}-${idx}-thumb`}
              data-strk-img={`[product-detail-title] [product-detail-desc]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="200"
              src={transparentGif}
              alt={`${product.name} view ${idx + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
      <span id="product-detail-title" className="sr-only">
        {product.name}
      </span>
      <span id="product-detail-desc" className="sr-only">
        {product.description}
      </span>
    </div>
  )
}
