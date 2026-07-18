import { useEffect, useRef, useState } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { PLACEHOLDER } from "@/context/CartContext"
import { cn, resolveImgUrl } from "@/lib/utils"

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [active, product])

  const thumbs = [
    {
      imgId: product.imgId,
      query: `[${product.descId}] [${product.titleId}]`,
    },
    {
      imgId: product.imgId2,
      query: `[${product.descId}] ${product.name} worn detail close up`,
    },
    {
      imgId: `${product.imgId}-detail`,
      query: `[${product.descId}] [${product.titleId}] macro detail gold texture`,
    },
    {
      imgId: `${product.imgId2}-model`,
      query: `[${product.descId}] ${product.name} worn on model editorial`,
    },
  ]

  return (
    <div ref={ref} className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 md:w-20 shrink-0">
        {thumbs.map((t, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "relative aspect-square w-16 md:w-full overflow-hidden bg-cream-100 border transition-colors",
              active === i ? "border-gold" : "border-line hover:border-muted",
            )}
            aria-label={`View image ${i + 1}`}
          >
            <img
              alt={`${product.name} view ${i + 1}`}
              src={resolveImgUrl(`gallery-thumb-${t.imgId}-${i}`) || PLACEHOLDER}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative flex-1 aspect-[4x5] overflow-hidden bg-cream-100">
        <img
          alt={product.name}
          src={resolveImgUrl(`gallery-main-${thumbs[active].imgId}`) || PLACEHOLDER}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
