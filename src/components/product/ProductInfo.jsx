import React, { useState } from 'react'
import { Star, Minus, Plus } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { toast } from 'sonner'

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
    toast.success(`${product.name} added to cart`)
  }

  return (
    <div className="space-y-6">
      {/* Product Name */}
      <h1 className="product-name text-3xl md:text-4xl">{product.name}</h1>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted-foreground'}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Price */}
      <p className="serif-heading text-3xl">${product.price}</p>

      {/* Short Description */}
      <p className="text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      {/* Variant Selector */}
      <div>
        <p className="text-sm uppercase tracking-wider mb-3">Finish</p>
        <div className="flex gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={`px-6 py-2 text-sm tracking-wider uppercase border transition-all ${
                selectedVariant === variant
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-foreground/20 hover:border-foreground/40'
              }`}
            >
              {variant === 'gold' ? 'Gold' : 'Silver'}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-sm uppercase tracking-wider mb-3">Quantity</p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-2 border hover:border-primary transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>
          <span className="text-lg w-12 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-2 border hover:border-primary transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className="w-full btn-primary py-4 text-base"
      >
        Add to Cart — ${(product.price * quantity).toFixed(2)}
      </button>

      {/* Material */}
      <p className="text-sm text-muted-foreground">
        Material: {product.material}
      </p>
    </div>
  )
}
