import React, { useState } from 'react'
import { Minus, Plus, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

export default function ProductPurchasePanel({ product }) {
  const { addItem } = useCart()
  const [variant, setVariant] = useState('Gold Tone')
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="text-velmora-espresso lg:sticky lg:top-28">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-antique">{product.category}</p>
      <h1 id={product.titleId} className="mt-4 font-serif text-4xl uppercase leading-none tracking-[0.16em] text-velmora-espresso md:text-5xl">{product.name}</h1>
      <div className="mt-5 flex items-center gap-4">
        <p className="font-serif text-3xl text-velmora-espresso">${product.price}</p>
        <div className="flex items-center gap-1 text-velmora-champagne">
          {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
          <span className="ml-2 text-sm text-velmora-cocoa/75">{product.rating} ({product.reviewCount})</span>
        </div>
      </div>
      <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-cocoa/82">{product.description}</p>

      <div className="mt-8 border-t border-velmora-mist pt-7">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-velmora-cocoa">Tone</p>
        <div className="mt-3 flex gap-3">
          {['Gold Tone', 'Silver Tone'].map((tone) => (
            <button
              key={tone}
              type="button"
              onClick={() => setVariant(tone)}
              className={`rounded-full border px-5 py-2 text-sm transition ${variant === tone ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-mist bg-white/50 text-velmora-espresso hover:border-velmora-antique'}`}
            >
              {tone}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-7">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-velmora-cocoa">Quantity</p>
        <div className="mt-3 inline-flex items-center border border-velmora-mist bg-white/50">
          <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-3 text-velmora-espresso hover:text-velmora-antique" aria-label="Decrease quantity">
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-10 text-center text-velmora-espresso">{quantity}</span>
          <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-3 text-velmora-espresso hover:text-velmora-antique" aria-label="Increase quantity">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <button type="button" onClick={() => addItem(product, quantity, variant)} className="mt-8 w-full bg-velmora-champagne px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso shadow-glow transition hover:bg-velmora-antique hover:text-velmora-ivory">
        Add to Cart
      </button>
      <p className="mt-4 text-center text-xs uppercase tracking-[0.16em] text-velmora-cocoa/70">Free shipping · 30-day returns · Hypoallergenic</p>
    </div>
  )
}
