import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    addToCart(product, 'gold', 1)
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image product-image-primary"
        />
        <img 
          src={product.imageSecondary} 
          alt={product.name}
          className="product-image product-image-secondary"
        />
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn-primary text-xs px-6 py-2.5"
        >
          Quick Add
        </button>
      </div>
      <div className="p-5">
        <div className="product-name text-sm tracking-[0.12em] mb-1.5 pr-2">
          {product.name}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#B8976E] font-medium">${product.price}</span>
          <span className="text-xs text-[#6B665F]">{product.material}</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
