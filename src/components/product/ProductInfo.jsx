import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatCurrency } from '../../lib/utils'
import RatingStars from '../shared/RatingStars'

export default function ProductInfo({ product }) {
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(product.variantOptions[0])
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="space-y-7">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-luxe text-velmora-truffle">{product.category}</p>
        <h1 className="font-display text-4xl uppercase tracking-luxe text-velmora-ink md:text-5xl">
          {product.name}
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          <p className="text-lg uppercase tracking-[0.24em] text-velmora-cocoa">
            {formatCurrency(product.price)}
          </p>
          <RatingStars rating={product.rating} reviews={product.reviews} />
        </div>
        <p className="max-w-xl text-base leading-8 text-velmora-cocoa">{product.description}</p>
      </div>

      <div className="space-y-4">
        <p className="text-xs uppercase tracking-luxe text-velmora-truffle">Finish</p>
        <div className="flex flex-wrap gap-3">
          {product.variantOptions.map((variant) => {
            const active = selectedVariant === variant

            return (
              <button
                key={variant}
                type="button"
                onClick={() => setSelectedVariant(variant)}
                className={`rounded-full border px-5 py-3 text-xs uppercase tracking-luxe transition-colors duration-300 ${
                  active
                    ? 'border-velmora-champagne bg-velmora-champagne text-velmora-ink'
                    : 'border-velmora-ink/10 bg-white/70 text-velmora-cocoa'
                }`}
              >
                {variant}
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="inline-flex items-center rounded-full border border-velmora-ink/10 bg-white/70 px-2 py-2 shadow-card">
          <button
            type="button"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-velmora-cocoa"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-10 text-center text-sm font-medium text-velmora-ink">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((current) => current + 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-velmora-cocoa"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => addItem(product, selectedVariant, quantity)}
          className="button-primary w-full sm:flex-1"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
