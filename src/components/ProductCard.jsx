import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn, formatPrice } from '@/lib/utils'

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: product.variants[0],
      imgId: product.imgId,
      titleId: product.titleId,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn('group block', className)}
    >
      <div className="relative aspect-[4/5] bg-sand overflow-hidden">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image (revealed on hover) */}
        <img
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`[${product.descId}] ${product.name} worn on model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream/90 text-ink text-[10px] uppercase tracking-[0.2em] px-3 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <button
            type="button"
            onClick={handleQuickAdd}
            className={cn(
              'w-full text-[11px] uppercase tracking-[0.25em] py-3 transition-colors duration-300',
              added ? 'bg-ink text-cream' : 'bg-cream text-ink hover:bg-gold'
            )}
          >
            {added ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <div className="flex items-center justify-center gap-1 mb-1.5">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-[11px] text-stone">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>
        <h3
          id={product.titleId}
          className="font-serif uppercase tracking-[0.15em] text-sm md:text-[15px] text-ink group-hover:text-gold transition-colors duration-300"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDescription}
        </p>
        <p className="text-sm text-stone mt-1.5">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
