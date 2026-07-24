import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, getStrkImageUrl } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'
import { PLACEHOLDER } from '@/components/ui/StrkImage'

export default function ProductCard({ product, className = '' }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product.id, { tone: product.tones[0], quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className={`group block ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        {/* Primary image */}
        <img
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: hovered ? 0 : 1 }}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={getStrkImageUrl(product.imgId)}
        />
        {/* Secondary image on hover */}
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: hovered ? 1 : 0 }}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.descId}] [${product.titleId}] worn on model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={getStrkImageUrl(product.imgId2)}
        />

        {product.badge && (
          <span className="absolute left-3 top-3 z-10 bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-widest2 text-ink">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 translate-y-full transition-transform duration-300 group-hover:translate-y-0"
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex w-full items-center justify-center gap-2 bg-ink/90 py-3 text-[11px] uppercase tracking-widest2 text-cream backdrop-blur-sm hover:bg-ink"
          >
            <ShoppingBag width={14} height={14} />
            Quick Add
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-lg uppercase tracking-widest3 text-ink"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="mt-1 flex items-center justify-center gap-2">
          <StarRating value={product.rating} size={12} />
          <span className="text-[11px] text-stone">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm tracking-wide text-ink">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
