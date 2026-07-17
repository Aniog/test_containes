import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0])
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-[var(--velmora-bg-alt)] overflow-hidden mb-4">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[var(--velmora-dark)] text-white text-[10px] tracking-widest uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        {showQuickAdd && (
          <button
            className={`absolute bottom-3 left-3 right-3 velmora-btn-accent text-xs transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            onClick={handleQuickAdd}
          >
            {added ? (
              <span className="flex items-center justify-center gap-2">
                <ShoppingBag size={14} /> Added
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <ShoppingBag size={14} /> Add to Cart
              </span>
            )}
          </button>
        )}
      </div>

      {/* Info */}
      <div>
        <h3 className="velmora-product-name text-sm mb-1.5 group-hover:text-[var(--velmora-accent)] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={i < Math.floor(product.rating) ? 'fill-[var(--velmora-star)] text-[var(--velmora-star)]' : 'text-[var(--velmora-border)]'}
              />
            ))}
          </div>
          <span className="text-xs text-[var(--velmora-text-muted)]">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium">${product.price}</p>
      </div>
    </Link>
  )
}
