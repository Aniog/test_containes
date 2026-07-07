import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn, resolveImg } from "@/lib/utils"
import Stars from "@/components/ui/Stars"

export default function ProductCard({ product, priority = false }) {
  const { addToCart } = useCart()
  const [hovered, setHovered] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, product.colors[0], 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-sand">
        {/* Primary image */}
        <img
          alt={product.name}
          src={resolveImg(product.imgId1)}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-700",
            hovered ? "opacity-0" : "opacity-100"
          )}
        />
        {/* Secondary image (hover) */}
        <img
          alt={`${product.name} alternate view`}
          src={resolveImg(product.imgId2, 1)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            hovered ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Badges */}
        {product.badges && product.badges.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-col gap-1">
            {product.badges.map((b) => (
              <span
                key={b}
                className="bg-cream/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-ink"
              >
                {b}
              </span>
            ))}
          </div>
        )}

        {/* Quick add */}
        <div
          className={cn(
            "absolute inset-x-3 bottom-3 transition-all duration-500",
            hovered ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          )}
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-cream/95 py-3 text-xs uppercase tracking-[0.15em] text-ink backdrop-blur-sm transition-colors hover:bg-ink hover:text-cream"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-lg uppercase tracking-[0.14em] text-ink"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.tagline}
        </p>
        <p className="mt-1 text-xs text-stone">{product.tagline}</p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <Stars rating={product.rating} size={12} />
          <span className="text-xs text-stone">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm text-ink">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
