import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Star, Plus } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { tone: product.tone || "gold", qty: 1 })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1400)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] bg-cream overflow-hidden">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={product.imgQ}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image (revealed on hover) */}
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={product.img2Id}
          data-strk-img={product.img2Q}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-ivory/90 text-espresso text-[10px] uppercase tracking-[0.18em] px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button
            type="button"
            onClick={handleAdd}
            className="w-full bg-espresso text-ivory text-[11px] uppercase tracking-[0.18em] py-3.5 flex items-center justify-center gap-2 hover:bg-gold transition-colors"
          >
            {added ? "Added to Bag" : (
              <>
                <Plus className="w-3.5 h-3.5" /> Quick Add
              </>
            )}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <h3 className="font-serif text-lg uppercase tracking-[0.14em] text-espresso leading-tight">
          {product.name}
        </h3>
        <div className="mt-1.5 flex items-center justify-center gap-1.5">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-xs text-stone">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>
        <p className="mt-2 text-sm text-espresso">{formatPrice(product.price)}</p>
      </div>

      {/* Hidden text references for image queries */}
      <span id={product.descId} className="sr-only">{product.short}</span>
    </Link>
  )
}
