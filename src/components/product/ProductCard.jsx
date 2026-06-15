import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0], 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg bg-parchment aspect-[3/4]">
        {/* Primary image */}
        <div
          data-strk-img-id={`product-card-${product.id}`}
          data-strk-img={`${product.name} ${product.description}`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-luxury ${
            hovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
          }`}
        />
        {/* Hover image */}
        <div
          data-strk-img-id={`product-card-hover-${product.id}`}
          data-strk-img={`${product.name} detail closeup jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-luxury ${
            hovered ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-charcoal/90 text-white text-overline tracking-widest uppercase rounded-sm backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-2.5 bg-charcoal/90 backdrop-blur-sm text-white text-body-sm font-medium tracking-wider uppercase rounded transition-all duration-300 hover:bg-charcoal ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1.5">
        <h3 className="font-serif text-body font-medium text-charcoal uppercase tracking-wider group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.round(product.rating)
                    ? 'text-gold fill-gold'
                    : 'text-warm-gray-lighter'
                }`}
              />
            ))}
          </div>
          <span className="text-body-sm text-warm-gray">({product.reviewCount})</span>
        </div>
        <p className="text-body font-semibold text-charcoal">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
