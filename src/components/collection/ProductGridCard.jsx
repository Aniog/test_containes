import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function ProductGridCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[var(--velmora-bg-alt)] mb-4">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.shortName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={handleAddToCart}
            className="velmora-btn velmora-btn-primary w-full text-xs py-3"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
      <h3 className="velmora-product-name text-sm mb-1.5 group-hover:text-[var(--velmora-accent)] transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 mb-1.5">
        <Star className="w-3 h-3 fill-[var(--velmora-star)] text-[var(--velmora-star)]" />
        <span className="velmora-body-xs text-[var(--velmora-text-muted)]">
          {product.rating} ({product.reviews})
        </span>
      </div>
      <p className="velmora-body-sm font-medium">${product.price}</p>
    </Link>
  )
}
