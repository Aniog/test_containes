import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [showQuickAdd, setShowQuickAdd] = useState(false)
  const { addToCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    addToCart(product, selectedVariant, 1)
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div 
        className="product-image-container aspect-[4/3.5] bg-[#F8F5F1] relative overflow-hidden"
        onMouseEnter={() => setShowQuickAdd(true)}
        onMouseLeave={() => setShowQuickAdd(false)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image absolute inset-0 w-full h-full object-cover"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className="product-image-secondary absolute inset-0 w-full h-full object-cover"
          />
        )}
        
        {/* Quick Add Overlay */}
        <div 
          className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
            showQuickAdd ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="btn-accent w-full text-xs py-3"
          >
            Quick Add
          </button>
        </div>
      </div>

      <div className="pt-4 pb-2 px-1">
        <div className="product-name text-sm tracking-[0.12em] mb-1 pr-2">
          {product.name}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#6B665F]">${product.price}</span>
          <span className="text-xs text-[#6B665F]">{product.category}</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard