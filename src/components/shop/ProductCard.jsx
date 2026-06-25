import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product, showQuickAdd = true }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()
  const titleId = `product-title-${product.id}`

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 1, product.tone || 'gold')
  }

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-4">
        <img
          data-strk-img-id={`product-img-${product.id}`}
          data-strk-img={`[${titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            hovered && product.hover_image_url ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {product.hover_image_url && (
          <img
            src={product.hover_image_url}
            alt={`${product.name} alternate`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Quick add */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-0 left-0 right-0 bg-espresso/90 text-white py-3 text-xs uppercase tracking-[0.15em] font-medium flex items-center justify-center gap-2 transition-transform duration-300 ${
              hovered ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        )}
      </div>

      {/* Info */}
      <div className="text-center">
        <h3
          id={titleId}
          className="font-serif text-sm uppercase tracking-[0.2em] text-espresso"
        >
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mt-1.5">
          <Star className="w-3 h-3 fill-accent text-accent" />
          <span className="text-xs text-taupe">
            {product.rating?.toFixed(1)} ({product.review_count})
          </span>
        </div>
        <p className="mt-2 text-sm font-medium text-espresso">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  )
}
