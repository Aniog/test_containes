import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../lib/utils'

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const { addToCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, selectedVariant, 1)
  }

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="product-card">
        {/* Image */}
        <div className="image-container aspect-[4/3.5] bg-vel-bg-alt relative overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} alternate view`}
              className="image-secondary w-full h-full object-cover"
            />
          )}
          
          {/* Quick Add */}
          <button
            onClick={handleQuickAdd}
            className="quick-add text-vel-text hover:bg-vel-text hover:text-white"
          >
            Quick Add
          </button>
        </div>

        {/* Info */}
        <div className="pt-4 pb-2 px-1">
          <div className="product-name text-sm tracking-[0.06em] mb-1 pr-2">
            {product.name}
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-vel-muted">{product.shortDesc}</div>
            <div className="font-medium text-sm">{formatPrice(product.price)}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
