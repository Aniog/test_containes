import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/lib/cart'
import { formatPrice } from '@/lib/utils'
import StarRating from './StarRating'

export default function ProductCard({ product, showQuickAdd = true }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const { addToCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, selectedVariant, 1)
  }

  const handleVariantClick = (e, variant) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedVariant(variant)
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="relative aspect-[4/3.5] bg-[#EDE8E0] overflow-hidden mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image-primary absolute inset-0 w-full h-full object-cover"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className="product-image-secondary absolute inset-0 w-full h-full object-cover"
          />
        )}
        
        {showQuickAdd && (
          <div className="quick-add absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
            <button
              onClick={handleQuickAdd}
              className="btn btn-gold text-xs py-2.5 px-6 shadow-soft"
            >
              Quick Add
            </button>
          </div>
        )}
      </div>

      <div className="space-y-1.5 px-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="product-name text-sm tracking-[0.12em] pr-2">{product.name}</h3>
          <span className="text-sm font-medium whitespace-nowrap">{formatPrice(product.price)}</span>
        </div>
        
        <p className="text-xs text-[#6B635C]">{product.shortDesc}</p>
        
        <div className="flex items-center gap-2 pt-1">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-[#9A9085]">({product.reviewCount})</span>
        </div>

        {/* Variant dots */}
        <div className="flex gap-2 pt-1">
          {product.variants.map((variant) => (
            <button
              key={variant}
              onClick={(e) => handleVariantClick(e, variant)}
              className={`w-3 h-3 rounded-full border ${
                selectedVariant === variant
                  ? 'border-[#0D0D0D] ring-1 ring-offset-2 ring-[#0D0D0D]'
                  : 'border-[#EDE8E0]'
              }`}
              style={{
                backgroundColor: variant === 'gold' ? '#B89778' : '#C0C0C0',
              }}
              aria-label={variant}
            />
          ))}
        </div>
      </div>
    </Link>
  )
}
