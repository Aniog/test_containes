import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import StrkImage from '@/components/StrkImage'
import StarRating from '@/components/StarRating'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { tone: 'gold', qty: 1 })
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
        <StrkImage
          imgId={product.imgId}
          query={`[${product.descId}] [${product.titleId}]`}
          ratio="4x5"
          width={600}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        />
        {/* Hover second image */}
        <StrkImage
          imgId={product.imgIdAlt}
          query={`[${product.descId}] [${product.titleId}] gold jewelry worn`}
          ratio="4x5"
          width={600}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Badges */}
        {product.badges && product.badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.badges.map((b) => (
              <span
                key={b}
                className="bg-ivory/90 text-ink text-[10px] uppercase tracking-widest2 px-2.5 py-1"
              >
                {b}
              </span>
            ))}
          </div>
        )}

        {/* Quick add */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-500 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-espresso/95 text-ivory text-xs uppercase tracking-widest2 py-3 flex items-center justify-center gap-2 hover:bg-gold transition-colors"
          >
            <Plus className="w-4 h-4" /> Quick Add
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-base uppercase tracking-[0.18em] text-ink"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-muted">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm text-ink font-medium">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
