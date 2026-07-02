import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/utils'

const ProductCard = ({ product, showQuickAdd = true }) => {
  const { addToCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 'gold')
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="product-image-container aspect-[4/3.5] mb-4 overflow-hidden bg-[#F0EBE3]">
        <img 
          src={product.images.gold} 
          alt={product.name}
          className="product-image absolute inset-0 w-full h-full object-cover"
        />
        <img 
          src={product.images.silver} 
          alt={product.name}
          className="product-image-secondary absolute inset-0 w-full h-full object-cover"
        />
        
        {showQuickAdd && (
          <button 
            onClick={handleQuickAdd}
            className="quick-add btn btn-primary text-xs px-6 py-2.5"
          >
            Quick Add
          </button>
        )}
      </div>
      
      <div className="space-y-1 px-1">
        <h3 className="product-name text-sm tracking-[0.12em] font-medium">{product.name}</h3>
        <p className="text-[#6B635E] text-sm">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}

export default ProductCard