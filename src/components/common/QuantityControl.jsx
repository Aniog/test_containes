import { Minus, Plus } from 'lucide-react'

const QuantityControl = ({ value, onDecrease, onIncrease, label = 'Quantity' }) => (
  <div className="inline-flex items-center overflow-hidden rounded-full border border-velmora-stone bg-velmora-porcelain text-velmora-espresso">
    <button
      type="button"
      onClick={onDecrease}
      className="flex h-11 w-11 items-center justify-center text-velmora-espresso transition hover:bg-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
      aria-label={`Decrease ${label}`}
    >
      <Minus className="h-4 w-4" />
    </button>
    <span className="min-w-10 px-2 text-center text-sm font-semibold" aria-live="polite">
      {value}
    </span>
    <button
      type="button"
      onClick={onIncrease}
      className="flex h-11 w-11 items-center justify-center text-velmora-espresso transition hover:bg-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
      aria-label={`Increase ${label}`}
    >
      <Plus className="h-4 w-4" />
    </button>
  </div>
)

export default QuantityControl
