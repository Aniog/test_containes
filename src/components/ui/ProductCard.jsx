import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import { Star } from 'lucide-react'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0])
  }

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-[var(--velmora-bg-alt)] overflow-hidden mb-4">
          {/* Primary image */}
          <img
            alt={product.name}
            data-strk-img-id={product.images[0].id}
            data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />

          {/* Secondary image on hover */}
          <img
            alt={`${product.name} detail`}
            data-strk-img-id={product.images[0].hoverId}
            data-strk-img={`[product-name-${product.id}] detail closeup`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Quick add button */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={handleAddToCart}
              className="w-full bg-white/95 text-[var(--velmora-text)] text-xs tracking-[0.15em] uppercase py-3 hover:bg-[var(--velmora-gold)] hover:text-white transition-colors"
            >
              Add to Bag
            </button>
          </div>
        </div>

        {/* Product info */}
        <div>
          <h3
            id={`product-name-${product.id}`}
            className="product-name text-sm tracking-[0.12em] mb-1 group-hover:text-[var(--velmora-gold)] transition-colors"
          >
            {product.name}
          </h3>
          <p
            id={`product-desc-${product.id}`}
            className="text-xs text-[var(--velmora-text-muted)] mb-2"
          >
            {product.description}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? 'fill-[var(--velmora-star)] text-[var(--velmora-star)]'
                      : 'text-[var(--velmora-border)]'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-[var(--velmora-text-muted)]">
              ({product.reviews})
            </span>
          </div>
          <p className="text-sm font-medium mt-2">${product.price}</p>
        </div>
      </Link>
    </div>
  )
}
