import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../lib/utils'

export default function ProductCard({ product, showQuickAdd = true }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || 'gold')
  const { addToCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, selectedVariant, 1)
  }

  return (
    <Link to={`/product/${product.slug}`} className="product-card group block">
      <div className="product-image-container aspect-[4/3.5] bg-velmora-surface mb-4 overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="product-image w-full h-full object-cover"
        />
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={product.name}
            className="product-image-secondary w-full h-full object-cover"
          />
        )}
        
        {showQuickAdd && (
          <button 
            onClick={handleQuickAdd}
            className="quick-add btn btn-sm bg-white text-velmora-text hover:bg-velmora-gold hover:text-white shadow-soft"
          >
            Quick Add
          </button>
        )}
      </div>

      <div className="px-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="product-name text-sm tracking-widest leading-tight pr-2">{product.name}</h3>
          <span className="text-sm whitespace-nowrap">{formatPrice(product.price)}</span>
        </div>
        <p className="text-xs text-velmora-text-light mt-1">{product.category}</p>
      </div>
    </Link>
  )
}
