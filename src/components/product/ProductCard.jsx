import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { tone: product.tone?.[0], quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            hovered && product.imgIdAlt ? 'opacity-0' : 'opacity-100'
          } group-hover:scale-[1.03] transition-transform duration-700`}
        />
        {/* Secondary image on hover */}
        {product.imgIdAlt && (
          <img
            alt={`${product.name} alternate view`}
            data-strk-img-id={product.imgIdAlt}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry worn`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-3 top-3 bg-ivory/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div
          className={`absolute inset-x-3 bottom-3 transition-all duration-400 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex w-full items-center justify-center gap-2 bg-ink/90 py-3 text-[11px] uppercase tracking-[0.25em] text-ivory backdrop-blur-sm transition-colors hover:bg-gold"
          >
            <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-base uppercase tracking-[0.14em] text-ink"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating value={product.rating} size={12} />
          <span className="text-[11px] text-stone">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm font-medium text-ink-soft">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
