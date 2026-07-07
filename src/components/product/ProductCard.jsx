import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '@/lib/utils'

const ProductCard = ({ product, onAddToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || 'Gold')
  const [isHovered, setIsHovered] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onAddToCart({
      ...product,
      variant: selectedVariant,
      image: product.images[0],
    })
  }

  return (
    <Link 
      to={`/product/${product.slug}`}
      className="product-card block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="product-image"
        />
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={product.name}
            className="product-image-secondary"
          />
        )}
        
        {/* Quick Add Button */}
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn btn-primary btn-sm shadow-lg"
        >
          Quick Add
        </button>
      </div>

      <div className="p-4">
        <div className="product-name text-sm tracking-[0.12em] mb-1 pr-8">
          {product.name}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-[var(--color-text-muted)]">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs text-[var(--color-text-muted)]">
            {product.category}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
