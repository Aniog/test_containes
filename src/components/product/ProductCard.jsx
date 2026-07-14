import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { tone: product.tone, qty: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-700',
            hovered && product.hoverImgId ? 'opacity-0' : 'opacity-100'
          )}
        />
        {/* Hover image */}
        {product.hoverImgId && (
          <img
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn on model`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src={PLACEHOLDER}
            alt=""
            aria-hidden="true"
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-opacity duration-700',
              hovered ? 'opacity-100' : 'opacity-0'
            )}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-ivory/90 text-ink text-[10px] uppercase tracking-[0.15em] font-medium px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div
          className={cn(
            'absolute bottom-0 inset-x-0 transition-all duration-500',
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          )}
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-ivory/95 backdrop-blur-sm text-ink text-xs uppercase tracking-[0.15em] font-medium py-3.5 flex items-center justify-center gap-2 hover:bg-ink hover:text-ivory transition-colors duration-300"
          >
            <Plus className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 text-center">
        <div className="flex items-center justify-center gap-1 mb-1.5">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-xs text-stone">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>
        <h3
          id={product.titleId}
          className="text-xs uppercase tracking-[0.2em] font-medium text-ink mb-1.5"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <p className="font-serif text-lg text-ink">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
