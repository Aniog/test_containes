import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Star, Plus } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { tone: product.tones[0], quantity: 1 })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1400)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-ivory-deep">
        {/* Primary image */}
        <img
          src={PLACEHOLDER}
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-elegant ${
            priority ? "opacity-100" : "opacity-100 group-hover:opacity-0"
          }`}
        />
        {/* Hover image */}
        <img
          src={PLACEHOLDER}
          alt=""
          aria-hidden="true"
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`[${product.descId}] ${product.name} worn on model gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-700 ease-elegant group-hover:scale-100 group-hover:opacity-100"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-4 top-4 bg-ivory-soft/90 px-3 py-1 font-sans text-[10px] uppercase tracking-widest text-ink backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-all duration-400 ease-elegant group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={handleAdd}
            className="flex w-full items-center justify-center gap-2 bg-ink/90 px-4 py-3 font-sans text-[11px] uppercase tracking-widest text-ivory backdrop-blur-sm transition-colors hover:bg-gold"
          >
            {added ? (
              "Added to Cart"
            ) : (
              <>
                <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                Quick Add
              </>
            )}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 text-center">
        <p className="product-name text-ink">{product.name}</p>
        <div className="mt-1.5 flex items-center justify-center gap-1.5">
          <Star className="h-3 w-3 fill-gold text-gold" strokeWidth={0} />
          <span className="font-sans text-xs text-stone">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>
        <p className="mt-2 font-serif text-lg text-ink">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
