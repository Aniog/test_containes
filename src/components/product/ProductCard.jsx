import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Star } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, product.variants[0], 1)
  }

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      {/* Image Container */}
      <div
        className="relative aspect-square bg-velmora-warm overflow-hidden rounded-lg mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Placeholder for product image */}
        <div className="absolute inset-0 bg-gradient-to-br from-velmora-deep/5 to-velmora-gold/5 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-velmora-gold/10 flex items-center justify-center">
            <span className="text-velmora-gold/40 text-xs uppercase tracking-wider">Image</span>
          </div>
        </div>

        {/* Quick add button - appears on hover */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 right-4 w-10 h-10 rounded-full bg-velmora-gold text-velmora-deep flex items-center justify-center shadow-premium transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          aria-label="Quick add to cart"
        >
          <Plus size={18} />
        </button>

        {/* Bestseller badge */}
        {product.bestseller && (
          <div className="absolute top-4 left-4 bg-velmora-gold text-velmora-deep text-xs uppercase tracking-wider px-3 py-1 font-medium">
            Bestseller
          </div>
        )}
      </div>

      {/* Product Info */}
      <div>
        <h3
          className="text-sm uppercase tracking-wider text-velmora-text mb-2 font-medium leading-snug"
        >
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-0.5">
            <Star size={12} className="text-velmora-gold" fill="#C9A96E" />
            <span className="text-xs text-velmora-textMuted">{product.rating}</span>
          </div>
          <span className="text-xs text-velmora-textMuted">({product.reviewCount})</span>
        </div>
        <p className="text-base font-medium text-velmora-text">
          ${product.price}
        </p>
      </div>
    </Link>
  )
}
