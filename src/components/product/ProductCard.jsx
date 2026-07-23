import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import StarRating from "@/components/ui/StarRating"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        return ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.toneOptions[0], 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      ref={ref}
      className="group block"
    >
      <div className="relative overflow-hidden bg-sand">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="aspect-[4/5] w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image (revealed on hover) */}
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] worn model styling`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {product.badge && (
          <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1 font-sans text-[10px] uppercase tracking-widest2 text-ink backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex w-full items-center justify-center gap-2 bg-ink/90 px-4 py-3 font-sans text-[11px] uppercase tracking-widest2 text-cream backdrop-blur-sm transition-colors hover:bg-gold"
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-lg uppercase tracking-widest2 text-ink"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="sr-only"
        >
          {product.shortDesc}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="font-sans text-xs text-stone">({product.reviews})</span>
        </div>
        <p className="mt-2 font-sans text-sm text-ink">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
