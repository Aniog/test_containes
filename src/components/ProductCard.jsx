import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)
  const titleId = `pc-${product.id}-title`
  const descId = `pc-${product.id}-desc`

  const quickAdd = (e) => {
    e.preventDefault()
    addItem(product, { variant: product.variants[0], quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-sand/30 aspect-[3x4] border border-sand/40">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={`pc-${product.id}-a`}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-700',
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          )}
        />
        {/* Secondary image (revealed on hover) */}
        <img
          alt={`${product.name} worn`}
          data-strk-img-id={`pc-${product.id}-b`}
          data-strk-img={`model wearing ${product.name} gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-700',
            hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          )}
        />

        {/* Quick add */}
        <div
          className={cn(
            'absolute inset-x-3 bottom-3 transition-all duration-400',
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          )}
        >
          <button
            onClick={quickAdd}
            className="w-full bg-ivory/95 backdrop-blur-sm text-ink py-3 text-[10px] uppercase tracking-[0.25em] font-medium hover:bg-ink hover:text-ivory transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-3.5 h-3.5" /> Quick Add
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-taupe mb-1">{product.category}</p>
        <h3
          id={titleId}
          className="font-serif text-lg text-ink tracking-wide leading-tight group-hover:text-gold transition-colors"
        >
          {product.name}
        </h3>
        <p id={descId} className="sr-only">{product.short}</p>
        <div className="flex items-center justify-center gap-1.5 mt-1.5">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-xs text-taupe">{product.rating.toFixed(1)}</span>
        </div>
        <p className="text-sm text-ink mt-1.5 font-medium">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
