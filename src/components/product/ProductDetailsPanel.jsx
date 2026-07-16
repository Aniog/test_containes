import { useState } from 'react'
import QuantitySelector from '@/components/shared/QuantitySelector.jsx'
import StarRating from '@/components/shared/StarRating.jsx'
import { formatPrice } from '@/data/store.js'

function ProductDetailsPanel({ product, onAddToCart }) {
  const [selectedTone, setSelectedTone] = useState(product.tones[0])
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="lg:sticky lg:top-28">
      <p className="text-sm uppercase tracking-[0.24em] text-velmora-truffle">{product.category}</p>
      <h1 className="mt-4 velmora-product-name text-2xl sm:text-3xl">{product.name}</h1>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <span className="font-display text-4xl text-velmora-ink">{formatPrice(product.price)}</span>
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />
      </div>
      <p className="mt-6 text-base leading-8 text-velmora-truffle">{product.description}</p>

      <div className="mt-8 space-y-6 rounded-[2rem] border border-velmora-ink/10 bg-velmora-pearl p-6 shadow-card">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-velmora-ink">Tone</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {product.tones.map((tone) => (
              <button
                key={tone}
                type="button"
                className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.18em] transition ${
                  selectedTone === tone
                    ? 'border-velmora-gold bg-velmora-gold text-velmora-pearl'
                    : 'border-velmora-ink/10 bg-velmora-pearl text-velmora-ink'
                }`}
                onClick={() => setSelectedTone(tone)}
              >
                {tone}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-velmora-ink">Quantity</p>
            <p className="mt-2 text-sm text-velmora-truffle">Ready to ship within 48 hours.</p>
          </div>
          <QuantitySelector
            value={quantity}
            onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
            onIncrease={() => setQuantity((current) => current + 1)}
          />
        </div>

        <button
          type="button"
          className="velmora-button-primary w-full"
          onClick={() => onAddToCart(product, selectedTone, quantity)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetailsPanel
