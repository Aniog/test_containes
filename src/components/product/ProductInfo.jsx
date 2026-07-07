import React, { useState } from 'react'
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function ProductInfo({ product }) {
  const [variant, setVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
  }

  return (
    <div className="md:pl-8 lg:pl-12">
      {/* Product Name */}
      <h1 className="font-serif text-3xl md:text-4xl text-velmora-base tracking-wide mb-3">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'fill-velmora-gold text-velmora-gold'
                  : 'text-velmora-taupe-light'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-velmora-muted">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Price */}
      <p className="font-serif text-2xl text-velmora-base mb-6">${product.price}</p>

      {/* Description */}
      <p className="text-velmora-muted leading-relaxed mb-8">{product.description}</p>

      {/* Variant Selector */}
      <div className="mb-6">
        <p className="text-xs tracking-super-wide uppercase text-velmora-base mb-3">Color</p>
        <div className="flex gap-3">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`px-6 py-2.5 text-xs tracking-wide capitalize border transition-colors ${
                variant === v
                  ? 'border-velmora-gold bg-velmora-gold/10 text-velmora-base'
                  : 'border-velmora-taupe-light text-velmora-muted hover:border-velmora-base'
              }`}
            >
              {v} tone
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-8">
        <p className="text-xs tracking-super-wide uppercase text-velmora-base mb-3">Quantity</p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 border border-velmora-taupe-light flex items-center justify-center hover:border-velmora-base transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-lg w-8 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 border border-velmora-taupe-light flex items-center justify-center hover:border-velmora-base transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className="w-full py-4 bg-velmora-base text-velmora-cream text-xs tracking-super-wide uppercase flex items-center justify-center gap-3 hover:bg-velmora-gold hover:text-velmora-base transition-colors"
      >
        <ShoppingBag className="w-4 h-4" />
        Add to Bag — ${(product.price * quantity).toFixed(2)}
      </button>

      {/* Trust Badges */}
      <div className="mt-8 pt-8 border-t border-velmora-taupe-light/30 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-xs text-velmora-muted">Free Shipping</p>
          <p className="text-[10px] text-velmora-taupe mt-1">Worldwide</p>
        </div>
        <div>
          <p className="text-xs text-velmora-muted">30-Day Returns</p>
          <p className="text-[10px] text-velmora-taupe mt-1">Hassle-free</p>
        </div>
        <div>
          <p className="text-xs text-velmora-muted">18K Gold</p>
          <p className="text-[10px] text-velmora-taupe mt-1">Hypoallergenic</p>
        </div>
      </div>
    </div>
  )
}
