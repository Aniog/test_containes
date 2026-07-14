import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils.js"
import ProductImage from "./ProductImage.jsx"

// Product gallery renders 1 primary image plus 3 stylized detail thumbnails
// (each is a separate <img> with its own strk-img query), with the active
// main image shown larger above the row.
const detailAngles = [
  { id: "front", label: "Front" },
  { id: "side", label: "Side" },
  { id: "worn", label: "Worn" },
]

export default function ImageGallery({ product }) {
  const [active, setActive] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const mod = await import("@strikingly/sdk")
        const cfgMod = await import("@/strk-img-config.json")
        if (cancelled) return
        if (mod?.ImageHelper?.loadImages) {
          mod.ImageHelper.loadImages(cfgMod.default || cfgMod, ref.current)
        }
      } catch (e) {}
    })()
    return () => {
      cancelled = true
    }
  }, [product?.id, active])

  if (!product) return null

  return (
    <div ref={ref} className="grid grid-cols-1 gap-4 md:grid-cols-[80px_1fr]">
      {/* Thumbnails (desktop) */}
      <ul className="order-2 hidden gap-3 md:order-1 md:flex md:flex-col">
        {[0, 1, 2].map((i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "block aspect-square w-full overflow-hidden border bg-sand transition-colors",
                active === i ? "border-espresso" : "border-transparent hover:border-hairline"
              )}
              aria-label={`${detailAngles[i].label} view`}
            >
              <ProductImage
                product={product}
                ratio="1x1"
                width={200}
                imgId={`pd-${product.id}-${detailAngles[i].id}`}
                className="h-full w-full"
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Main image */}
      <div className="order-1 md:order-2">
        <div className="aspect-[4/5] overflow-hidden bg-sand">
          <ProductImage
            product={product}
            ratio="4x5"
            width={1200}
            imgId={`pd-${product.id}-main-${active}`}
            className="h-full w-full"
            showSecond={active === 0}
          />
        </div>

        {/* Mobile thumbnails */}
        <ul className="mt-4 flex gap-3 md:hidden">
          {[0, 1, 2].map((i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "block h-16 w-16 overflow-hidden border bg-sand transition-colors",
                  active === i ? "border-espresso" : "border-transparent"
                )}
                aria-label={`${detailAngles[i].label} view`}
              >
                <ProductImage
                  product={product}
                  ratio="1x1"
                  width={160}
                  imgId={`pd-m-${product.id}-${detailAngles[i].id}`}
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
