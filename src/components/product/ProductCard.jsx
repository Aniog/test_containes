import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { resolveImageUrl } from '@/lib/useStrkImages'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { tone: product.tones[0], qty: 1 })
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] bg-sand overflow-hidden">
        {/* Primary image */}
        <img
          alt={product.name}
          src={resolveImageUrl(product.imgId)}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image (revealed on hover) */}
        <img
          alt={`${product.name} alternate view`}
          src={resolveImageUrl(product.imgId2)}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream/90 text-ink text-[10px] uppercase tracking-widest2 px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-ink/90 text-cream text-xs uppercase tracking-widest2 py-3 flex items-center justify-center gap-2 hover:bg-ink transition-colors"
          >
            {added ? (
              'Added'
            ) : (
              <>
                <Plus size={14} /> Quick Add
              </>
            )}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="product-name text-sm md:text-base"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-center gap-1.5 mt-1.5">
          <Star size={12} className="fill-gold text-gold" />
          <span className="text-xs text-stone">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>
        <p className="text-sm text-ink mt-1.5">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
