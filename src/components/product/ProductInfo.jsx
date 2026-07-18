import { useState } from 'react'
import { Minus, Plus, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/context/CartContext'

export function ProductInfo({ product }) {
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="rounded-[2rem] border border-velmora-line bg-white/70 p-6 shadow-soft sm:p-8">
      <p className="text-xs uppercase tracking-[0.32em] text-velmora-truffle">{product.category}</p>
      <h1 className="mt-3 font-display text-4xl uppercase tracking-product text-velmora-espresso sm:text-5xl">
        {product.name}
      </h1>
      <div className="mt-4 flex items-center gap-4">
        <p className="text-2xl font-medium text-velmora-espresso">${product.price}</p>
        <span className="flex items-center gap-1 text-sm text-velmora-truffle">
          <Star className="h-4 w-4 fill-velmora-gold text-velmora-gold" />
          {product.rating} ({product.reviewCount})
        </span>
      </div>
      <p className="mt-6 text-base leading-8 text-velmora-truffle">{product.description}</p>

      <div className="mt-8">
        <p className="text-xs uppercase tracking-[0.28em] text-velmora-truffle">Tone</p>
        <div className="mt-3 flex flex-wrap gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant}
              type="button"
              onClick={() => setSelectedVariant(variant)}
              className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.25em] transition ${
                selectedVariant === variant
                  ? 'border-velmora-gold bg-velmora-gold text-velmora-ink'
                  : 'border-velmora-line bg-velmora-porcelain text-velmora-espresso hover:border-velmora-taupe'
              }`}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <div className="flex items-center rounded-full border border-velmora-line bg-velmora-porcelain">
          <button
            type="button"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            className="p-3 text-velmora-truffle"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-10 text-center text-sm text-velmora-espresso">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((current) => current + 1)}
            className="p-3 text-velmora-truffle"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <Button className="mt-8 w-full" onClick={() => addItem(product, selectedVariant, quantity)}>
        Add to Cart
      </Button>
    </div>
  )
}
