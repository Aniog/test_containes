import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/utils'

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, selectedVariant, 1)
  }

  return (
    <Link to={`/product/${product.slug}`} className="product-card block group">
      <div className="product-card-image">
        <img 
          src={product.images[0]} 
          alt={product.name}
          loading="lazy"
        />
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={`${product.name} alternate view`}
            loading="lazy"
          />
        )}
        <button 
          onClick={handleAddToCart}
          className="quick-add btn btn-primary btn-sm"
        >
          Quick Add
        </button>
      </div>
      <div className="product-card-info">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}

export default ProductCard
