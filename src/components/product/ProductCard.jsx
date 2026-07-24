import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Star, Plus } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.tones[0], 1)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1400)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      ref={ref}
      className="group block"
    >
      <div className="relative overflow-hidden bg-cream aspect-[3/4]">
        {/* Primary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry on neutral background`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out",
            priority ? "opacity-100" : "opacity-100 group-hover:opacity-0"
          )}
        />
        {/* Hover image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt=""
          aria-hidden="true"
          data-strk-img-id={product.hoverImgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry worn on model warm light`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out",
            priority ? "opacity-0 group-hover:opacity-100" : "opacity-0 group-hover:opacity-100"
          )}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-ivory/90 backdrop-blur-sm text-ink text-[10px] uppercase tracking-widest2 px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <button
            type="button"
            onClick={handleQuickAdd}
            className={cn(
              "w-full flex items-center justify-center gap-2 py-3 text-[11px] uppercase tracking-widest2 font-medium transition-colors",
              added ? "bg-ink text-white" : "bg-ivory/95 text-ink hover:bg-gold hover:text-white"
            )}
          >
            {added ? "Added" : (<><Plus className="w-3.5 h-3.5" /> Quick Add</>)}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <div className="flex items-center justify-center gap-1.5 mb-1.5">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-[11px] text-stone">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>
        <h3
          id={product.titleId}
          className="text-[12px] uppercase tracking-widest2 font-medium text-ink leading-snug"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDescription}
        </p>
        <p className="mt-1.5 text-sm text-ink-soft">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
