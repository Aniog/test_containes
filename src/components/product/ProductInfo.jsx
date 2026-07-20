import React, { useState } from 'react'
import { Star } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../lib/utils'

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  return (
    <div>
      <h1 className="product-name text-3xl md:text-4xl tracking-widest mb-2">{product.name}</h1>
      
      <div className="flex items-center gap-4 mb-6">
        <span className="text-2xl">{formatPrice(product.price)}</span>
        <div className="flex items-center gap-1.5 text-sm">
          <div className="stars flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
            ))}
          </div>
          <span className="text-velmora-text-light">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
      </div>

      <p className="text-velmora-text-light leading-relaxed mb-8">{product.description}</p>

      {/* Variant Selector */}
      {product.variants && product.variants.length > 0 && (
        <div className="mb-8">
          <div className="text-xs tracking-[0.1em] mb-3 text-velmora-text-light">TONE</div>
          <div className="flex gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant}
                onClick={() => setSelectedVariant(variant)}
                className={`variant-pill capitalize ${selectedVariant === variant ? 'active' : ''}`}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div className="mb-8">
        <div className="text-xs tracking-[0.1em] mb-3 text-velmora-text-light">QUANTITY</div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-9 h-9 flex items-center justify-center border border-velmora-border hover:bg-velmora-surface"
          >
            −
          </button>
          <span className="w-8 text-center">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="w-9 h-9 flex items-center justify-center border border-velmora-border hover:bg-velmora-surface"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <button 
        onClick={handleAddToCart}
        className="btn btn-primary w-full mb-4"
      >
        Add to Cart
      </button>
      <p className="text-center text-xs text-velmora-text-light tracking-wider">
        Ships in 1-2 business days
      </p>
    </div>
  )
}
