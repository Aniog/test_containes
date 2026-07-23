import React from 'react'
import { Minus, Plus } from 'lucide-react'
import Button from '@/components/ui/Button'
import ReviewStars from '@/components/ui/ReviewStars'
import { formatPrice } from '@/lib/utils'

const ProductInfo = ({
  product,
  selectedVariant,
  setSelectedVariant,
  quantity,
  setQuantity,
  onAddToCart,
}) => (
  <div className="space-y-8">
    <div>
      <p className="text-xs uppercase tracking-[0.32em] text-velmora-gold">{product.category}</p>
      <h1 id={product.query.titleId} className="mt-4 text-3xl uppercase tracking-luxe text-velmora-ink sm:text-4xl">
        {product.name}
      </h1>
      <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-velmora-muted">
        <span className="text-2xl text-velmora-ink">{formatPrice(product.price)}</span>
        <div className="flex items-center gap-3">
          <ReviewStars rating={product.rating} />
          <span>{product.reviewCount} reviews</span>
        </div>
      </div>
      <p id={product.query.descId} className="mt-6 max-w-xl text-sm leading-8 text-velmora-muted sm:text-base">
        {product.longDescription}
      </p>
    </div>

    <div className="space-y-4 rounded-[2rem] border border-velmora-line bg-white/60 p-5 shadow-soft sm:p-6">
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-velmora-gold">Tone</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant}
              type="button"
              onClick={() => setSelectedVariant(variant)}
              className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.24em] transition-all duration-300 ${selectedVariant === variant ? 'border-velmora-accent bg-velmora-accent text-velmora-accent-foreground shadow-soft' : 'border-velmora-line bg-white text-velmora-ink hover:border-velmora-gold'}`}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-velmora-gold">Quantity</p>
        <div className="mt-4 inline-flex items-center rounded-full border border-velmora-line bg-velmora-ivory px-2 py-2">
          <button
            type="button"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-velmora-ink transition-colors hover:bg-white"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-10 text-center text-sm text-velmora-ink">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((current) => current + 1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-velmora-ink transition-colors hover:bg-white"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <Button className="w-full" onClick={onAddToCart}>
        Add to Cart
      </Button>
    </div>
  </div>
)

export default ProductInfo
