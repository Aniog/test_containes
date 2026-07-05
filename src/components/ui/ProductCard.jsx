import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingCart } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0].id)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[var(--velmora-bg-secondary)] rounded-sm mb-4">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.bestseller && (
          <span className="absolute top-3 left-3 velmora-label bg-[var(--velmora-accent)] text-white px-2 py-1 rounded-sm">
            Bestseller
          </span>
        )}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 right-3 w-10 h-10 bg-[var(--velmora-white)] rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:bg-[var(--velmora-accent)] hover:text-white ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingCart className="w-4 h-4" />
        </button>
      </div>
      <h3 className="velmora-product-name text-sm text-[var(--velmora-text)] mb-1">
        {product.name}
      </h3>
      <p className="velmora-body-sm text-[var(--velmora-text-light)] mb-2 line-clamp-1">
        {product.shortDescription}
      </p>
      <div className="flex items-center justify-between">
        <span className="velmora-body font-medium text-[var(--velmora-text)]">
          ${product.price}
        </span>
        <div className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-[var(--velmora-star)] text-[var(--velmora-star)]" />
          <span className="velmora-body-sm text-[var(--velmora-text-muted)]">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
      </div>
    </Link>
  )
}
