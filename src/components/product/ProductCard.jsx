import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, selectedVariant, 1)
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
          className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white px-6 py-2 text-xs tracking-[0.1em] opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-[#2C2823] hover:text-white shadow-md"
        >
          QUICK ADD
        </button>
      </div>
      
      <div className="px-1">
        <div className="flex justify-between items-start gap-2">
          <p className="product-name text-sm tracking-[0.08em] pr-1 leading-tight">{product.name}</p>
          <span className="text-sm font-medium whitespace-nowrap">${product.price}</span>
        </div>
        <p className="text-xs text-[#6B665F] mt-1">{product.category}</p>
      </div>
    </Link>
  )
}

export default ProductCard
