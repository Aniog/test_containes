import { useState } from 'react'
import { Minus, Plus, Star } from 'lucide-react'
import VelmoraButton from '@/components/common/VelmoraButton.jsx'
import { cn } from '@/lib/utils'

const accordions = [
  {
    title: 'Description',
    content: 'A refined demi-fine piece designed for daily polish, soft shine, and the kind of presence that feels personal rather than precious.',
  },
  {
    title: 'Materials & Care',
    content: '18K gold plated finish over a skin-kind base. Keep dry, store separately, and polish gently with a soft cloth after wear.',
  },
  {
    title: 'Shipping & Returns',
    content: 'Free worldwide shipping on all orders. Returns are accepted within 30 days when pieces are unworn and in original packaging.',
  },
]

export default function ProductInfo({ product, onAdd }) {
  const [tone, setTone] = useState(product.tone[0])
  const [quantity, setQuantity] = useState(1)
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="text-velmora-espresso">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-burnished">{product.category}</p>
      <h1 id="detail-product-name" className="mt-4 font-serif text-5xl font-semibold uppercase leading-tight tracking-[0.16em] text-velmora-espresso md:text-6xl">
        {product.name}
      </h1>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <p className="font-serif text-4xl text-velmora-espresso">${product.price}</p>
        <div className="flex items-center gap-1 text-velmora-gold" aria-label={`${product.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
          <span className="ml-2 text-xs font-bold uppercase tracking-[0.18em] text-velmora-cacao/70">{product.rating}</span>
        </div>
      </div>
      <p id="detail-product-tagline" className="mt-6 text-lg leading-8 text-velmora-cacao/80">{product.tagline}</p>
      <p id="detail-product-description" className="mt-3 text-sm leading-7 text-velmora-cacao/75">{product.description}</p>

      <div className="mt-9 border-t border-velmora-mist pt-7">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso">Tone</p>
        <div className="flex flex-wrap gap-3">
          {product.tone.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTone(item)}
              className={cn(
                'rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] transition',
                tone === item ? 'border-velmora-gold bg-velmora-gold text-velmora-espresso' : 'border-velmora-mist text-velmora-espresso hover:border-velmora-burnished',
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center gap-4">
        <div className="flex items-center rounded-full border border-velmora-mist bg-velmora-ivory text-velmora-espresso">
          <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
          <span className="min-w-10 text-center text-sm font-bold">{quantity}</span>
          <button type="button" onClick={() => setQuantity(quantity + 1)} className="p-3" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
        </div>
        <VelmoraButton className="flex-1" onClick={() => onAdd(product, { tone, quantity })}>Add to Cart</VelmoraButton>
      </div>

      <div className="mt-9 divide-y divide-velmora-mist border-y border-velmora-mist">
        {accordions.map((item, index) => (
          <div key={item.title}>
            <button type="button" onClick={() => setOpenIndex(openIndex === index ? -1 : index)} className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso">
              {item.title}
              <span className="font-serif text-2xl">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && <p className="pb-6 text-sm leading-7 text-velmora-cacao/75">{item.content}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
