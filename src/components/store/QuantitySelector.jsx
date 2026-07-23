import { Minus, Plus } from 'lucide-react'

const QuantitySelector = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <div className="inline-flex items-center rounded-full border border-velmora-sand bg-white/70">
      <button type="button" onClick={onDecrease} className="p-3 text-velmora-ink">
        <Minus className="h-4 w-4" strokeWidth={1.8} />
      </button>
      <span className="min-w-12 text-center text-sm font-medium text-velmora-ink">
        {quantity}
      </span>
      <button type="button" onClick={onIncrease} className="p-3 text-velmora-ink">
        <Plus className="h-4 w-4" strokeWidth={1.8} />
      </button>
    </div>
  )
}

export default QuantitySelector
