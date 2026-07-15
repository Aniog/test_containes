import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../lib/cartContext'
import { formatPrice } from '../../lib/utils'

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const { addToCart } = useCart()

  const primaryImage = product.images?.find(img => img.id === 'gold') || product.images?.[0]
  const secondaryImage = product.images?.find(img => img.id === 'silver') || product.images?.[1] || primaryImage

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, selectedVariant, 1)
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-card-image aspect-[4/3.5] relative">
        <img 
          src={primaryImage?.url} 
          alt={primaryImage?.alt || product.name}
          className="primary-image absolute inset-0 w-full h-full object-cover"
        />
        <img 
          src={secondaryImage?.url} 
          alt={secondaryImage?.alt || product.name}
          className="secondary-image absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="quick-add btn btn-sm bg-white text-velmora-charcoal hover:bg-velmora-gold hover:text-white shadow-md"
        >
          Add to Cart
        </button>
      </div>

      <div className="p-5">
        <div className="product-name text-sm tracking-[0.12em] mb-1 pr-2">
          {product.name}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-velmora-text-muted">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs text-velmora-text-muted">
            {product.category}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
