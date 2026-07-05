import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/utils'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 'Gold', 1)
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
          className="quick-add btn btn-gold text-xs px-6 py-2.5"
        >
          Quick Add
        </button>
      </div>
      <div className="p-4">
        <div className="product-name text-sm tracking-[0.08em] mb-1 pr-8">
          {product.name}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#6B665F]">{product.category}</span>
          <span className="font-medium">{formatPrice(product.price)}</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard