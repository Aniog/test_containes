import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function ProductForm({ product }) {
  const { addItem } = useCart()
  const [variant, setVariant] = useState('gold')
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem(product, variant, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
    setQty(1)
  }

  return (
    <div className="space-y-6">
      {/* Variant */}
      <div>
        <p className="text-[10px] tracking-[0.15em] uppercase text-velmora-taupe font-medium mb-3">
          Finish
        </p>
        <div className="flex gap-3">
          {['gold', 'silver'].map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`px-6 py-2.5 text-xs tracking-[0.08em] uppercase border transition-all ${
                variant === v
                  ? 'border-velmora-deep bg-velmora-deep text-white'
                  : 'border-velmora-sand text-velmora-charcoal hover:border-velmora-taupe'
              }`}
            >
              {v === 'gold' ? '18K Gold' : 'Silver Tone'}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-[10px] tracking-[0.15em] uppercase text-velmora-taupe font-medium mb-3">
          Quantity
        </p>
        <div className="flex items-center border border-velmora-sand w-fit">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="p-2.5 hover:bg-velmora-sand transition-colors"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="px-5 text-sm font-medium tabular-nums min-w-[40px] text-center">{qty}</span>
          <button
            onClick={() => setQty(qty + 1)}
            className="p-2.5 hover:bg-velmora-sand transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAdd}
        className={`w-full py-4 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 ${
          added
            ? 'bg-green-800 text-white'
            : 'bg-velmora-deep text-white hover:bg-velmora-charcoal'
        }`}
      >
        {added ? '✓ Added to Bag' : 'Add to Bag'}
      </button>
    </div>
  )
}
