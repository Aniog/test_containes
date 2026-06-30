import { useState } from 'react'
import { Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import AccordionItem from '@/components/product/AccordionItem'
import { cn } from '@/lib/utils'

export default function ProductSummary({ product }) {
  const { addItem } = useCart()
  const [selectedTone, setSelectedTone] = useState(product.tones[0])
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="rounded-[2.25rem] border border-velmora-line bg-velmora-ivory p-6 text-velmora-ink shadow-velmora-sm md:p-8">
      <p className="text-xs uppercase tracking-[0.35em] text-velmora-bronze">
        {product.category}
      </p>
      <h1 className="mt-4 font-serif text-5xl uppercase leading-none tracking-[0.18em] text-velmora-espresso md:text-6xl">
        {product.name}
      </h1>
      <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-velmora-ink/75">
        <div className="flex items-center gap-1 text-velmora-bronze">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <span>{product.rating} rating</span>
        <span>({product.reviews} reviews)</span>
      </div>
      <p className="mt-6 text-2xl font-medium text-velmora-espresso">
        ${product.price}
      </p>
      <p className="mt-5 max-w-xl text-sm leading-8 text-velmora-ink/72 md:text-base">
        {product.description}
      </p>

      <div className="mt-8">
        <p className="text-xs uppercase tracking-[0.3em] text-velmora-ink/55">
          Tone
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {product.tones.map((tone) => (
            <button
              key={tone}
              type="button"
              onClick={() => setSelectedTone(tone)}
              className={cn(
                'rounded-full border px-5 py-3 text-sm transition',
                selectedTone === tone
                  ? 'border-velmora-bronze bg-velmora-bronze text-velmora-ivory'
                  : 'border-velmora-line bg-velmora-mist text-velmora-espresso hover:border-velmora-bronze/60',
              )}
            >
              {tone}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <div className="inline-flex items-center rounded-full border border-velmora-line bg-velmora-mist px-2 py-2 shadow-velmora-sm">
          <button
            type="button"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            className="rounded-full px-3 py-2 text-sm text-velmora-espresso transition hover:bg-velmora-sand"
          >
            −
          </button>
          <span className="min-w-10 text-center text-sm font-medium text-velmora-espresso">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((current) => current + 1)}
            className="rounded-full px-3 py-2 text-sm text-velmora-espresso transition hover:bg-velmora-sand"
          >
            +
          </button>
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-velmora-ink/55">
          Hypoallergenic · Gift-ready
        </span>
      </div>

      <button
        type="button"
        onClick={() => addItem(product, selectedTone, quantity)}
        className="mt-8 w-full rounded-full bg-velmora-bronze px-6 py-4 text-sm font-medium uppercase tracking-[0.28em] text-velmora-ivory transition hover:bg-velmora-bronze-dark"
      >
        Add to Cart
      </button>

      <div className="mt-8">
        <AccordionItem title="Description" content={product.description} defaultOpen />
        <AccordionItem title="Materials & Care" content={product.materialsCare} />
        <AccordionItem title="Shipping & Returns" content={product.shippingReturns} />
      </div>
    </div>
  )
}
