import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import Stars from '@/components/Stars'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { variant: product.variants[0], quantity: 1 })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1400)
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-105"
        />
        {/* Secondary image (revealed on hover) */}
        <img
          alt={`${product.name} worn`}
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`[${product.descId}] ${product.name} worn on model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100"
        />

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-cream/95 backdrop-blur-sm text-ink text-xs uppercase tracking-widest2 py-3 hover:bg-champagne transition-colors duration-300 flex items-center justify-center gap-2"
          >
            {added ? 'Added' : 'Quick Add'}
            {!added && <Plus size={14} />}
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="eyebrow mb-1.5">{product.categoryName}</p>
        <h3
          id={product.titleId}
          className="product-name text-base md:text-lg text-ink"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.tagline}
        </p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Stars rating={product.rating} size={12} />
          <span className="text-xs text-taupe">({product.reviewCount})</span>
        </div>
        <p className="mt-2 text-sm text-espresso font-medium">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
