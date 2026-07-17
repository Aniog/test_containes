import { useState } from 'react'
import { Minus, Plus, Star } from 'lucide-react'
import { formatPrice } from '@/data/products.js'

export default function ProductInfo({ product, onAdd }) {
  const [tone, setTone] = useState(product.tones[0])
  const [quantity, setQuantity] = useState(1)

  return (
    <section className="text-velmora-ink lg:sticky lg:top-28 lg:self-start">
      <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">{product.category}</p>
      <h1 id={`product-${product.id}-title`} className="mt-4 font-serif text-4xl uppercase leading-tight tracking-[0.14em] text-velmora-ink md:text-5xl">
        {product.name}
      </h1>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <p className="text-2xl font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
        <div className="flex items-center gap-1 text-sm text-velmora-espresso">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-velmora-gold text-velmora-gold" />
          ))}
          <span className="ml-2 text-velmora-muted">{product.rating} ({product.reviews})</span>
        </div>
      </div>
      <p id={`product-${product.id}-desc`} className="mt-6 text-base leading-8 text-velmora-muted">
        {product.shortDescription}
      </p>
      <div className="mt-8 border-y border-velmora-line py-6">
        <p className="text-xs font-bold uppercase tracking-[0.26em] text-velmora-muted">Tone</p>
        <div className="mt-3 flex gap-3">
          {product.tones.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setTone(option)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${tone === option ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-line bg-velmora-parchment text-velmora-ink hover:border-velmora-gold'}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <div className="inline-flex h-14 w-36 items-center justify-between border border-velmora-line bg-velmora-parchment text-velmora-ink">
          <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="h-full px-4 transition hover:bg-velmora-blush" aria-label="Decrease quantity">
            <Minus className="h-4 w-4" />
          </button>
          <span className="font-semibold">{quantity}</span>
          <button type="button" onClick={() => setQuantity((value) => value + 1)} className="h-full px-4 transition hover:bg-velmora-blush" aria-label="Increase quantity">
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <button
          type="button"
          onClick={() => onAdd(product, quantity, tone)}
          className="min-h-14 flex-1 bg-velmora-champagne px-6 text-sm font-bold uppercase tracking-[0.24em] text-velmora-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-velmora-gold"
        >
          Add to Cart
        </button>
      </div>
      <p className="mt-4 text-sm text-velmora-muted">Free worldwide shipping. Ships in 1–2 business days.</p>
    </section>
  )
}
