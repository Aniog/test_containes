import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 'Gold', 1)
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-card-image">
        <img src={product.images[0]} alt={product.name} />
        {product.images[1] && (
          <img src={product.images[1]} alt={product.name} className="secondary" />
        )}
        <button
          onClick={handleQuickAdd}
          className="quick-add btn btn-sm btn-accent"
        >
          Quick Add
        </button>
      </div>
      <div className="product-card-info">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
      </div>
    </Link>
  )
}

export default ProductCard