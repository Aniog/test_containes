import { useState } from 'react'
import { Star, Minus, Plus } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../lib/utils'

export default function ProductInfo({ product }) {
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  return (
    <div className="lg:sticky lg:top-28">
      {/* Category */}
      <p className="text-xs tracking-[0.2em] uppercase text-gold-500 font-medium mb-3">
        {product.category}
      </p>

      {/* Name */}
      <h1 className="heading-serif text-2xl md:text-3xl lg:text-4xl text-warm-900 tracking-[0.08em] uppercase mb-3">
        {product.name}
      </h1>

      {/* Price */}
      <p className="text-xl font-medium text-warm-900 mb-3">
        {formatPrice(product.price)}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-5">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
              className={i < Math.floor(product.rating) ? 'text-gold-500' : 'text-cream-400'}
              strokeWidth={1.5}
            />
          ))}
        </div>
        <span className="text-xs text-warm-800/60">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-warm-800/70 leading-relaxed mb-8">
        {product.description}
      </p>

      {/* Variant selector */}
      <div className="mb-6">
        <p className="text-xs tracking-wider uppercase text-warm-800/60 mb-3 font-medium">
          Tone — {selectedVariant}
        </p>
        <div className="flex gap-2">
          {product.variants.map(variant => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={`px-6 py-2.5 text-xs tracking-wider uppercase transition-all duration-200 border ${
                selectedVariant === variant
                  ? 'border-gold-500 bg-gold-500/10 text-warm-900'
                  : 'border-cream-400 text-warm-800/60 hover:border-gold-400'
              }`}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-8">
        <p className="text-xs tracking-wider uppercase text-warm-800/60 mb-3 font-medium">
          Quantity
        </p>
        <div className="inline-flex items-center border border-cream-400">
          <button
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="w-10 h-10 flex items-center justify-center text-warm-800 hover:bg-cream-200/50 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="w-12 text-center text-sm font-medium text-warm-900">{quantity}</span>
          <button
            onClick={() => setQuantity(q => q + 1)}
            className="w-10 h-10 flex items-center justify-center text-warm-800 hover:bg-cream-200/50 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button onClick={handleAddToCart} className="btn-gold w-full text-center text-sm py-4">
        Add to Cart — {formatPrice(product.price * quantity)}
      </button>

      {/* Trust signals */}
      <div className="flex items-center justify-center gap-6 mt-5">
        <span className="text-[10px] text-warm-800/40 tracking-wider uppercase">Free Shipping</span>
        <span className="text-[10px] text-warm-800/40">·</span>
        <span className="text-[10px] text-warm-800/40 tracking-wider uppercase">30-Day Returns</span>
        <span className="text-[10px] text-warm-800/40">·</span>
        <span className="text-[10px] text-warm-800/40 tracking-wider uppercase">Hypoallergenic</span>
      </div>
    </div>
  )
}
