import React from "react"
import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"


export default function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const primary = product.images[0]
  const secondary = product.images[1] || product.images[0]

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { variant: product.variants[0], quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn(
        "group block bg-cream",
        className
      )}
    >
      <div className="relative overflow-hidden bg-sand/40 aspect-[4/5]">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={primary.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
        />
        {/* Secondary image (revealed on hover) */}
        <img
          alt={product.name}
          data-strk-img-id={secondary.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] worn on model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />

        {product.badge && (
          <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.2em] text-espresso backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex w-full items-center justify-center gap-2 bg-espresso/95 px-4 py-3 font-sans text-[11px] uppercase tracking-[0.18em] text-cream backdrop-blur-sm transition-colors hover:bg-gold"
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </div>

      <div className="px-1 pt-4">
        <div className="flex items-center gap-2">
          <StarRating value={product.rating} size={12} />
          <span className="font-sans text-[11px] text-muted">({product.reviews})</span>
        </div>
        <h3
          id={product.titleId}
          className="mt-2 font-serif text-lg leading-snug text-ink uppercase tracking-[0.12em]"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <p className="mt-1 font-sans text-sm text-stone">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
