import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, selectedVariant)
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="product-image-container aspect-[4/3.5] mb-4 relative">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="product-image product-image-primary absolute inset-0 w-full h-full object-cover"
        />
        <img 
          src={product.images[1] || product.images[0]} 
          alt={product.name}
          className="product-image product-image-secondary absolute inset-0 w-full h-full object-cover opacity-0"
        />
        
        {/* Quick Add Button - appears on hover */}
        <button 
          onClick={handleAddToCart}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 btn btn-primary text-xs px-6 py-2.5 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Add to Cart
        </button>
      </div>
      
      <div className="px-1">
        <div className="product-name text-sm tracking-wider mb-1 pr-2">{product.name}</div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#7A7368]">${product.price}</span>
          <span className="text-xs text-[#8B7355]">{product.category}</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
