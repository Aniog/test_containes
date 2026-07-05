import { Minus, Plus } from 'lucide-react'

function QuantitySelector({ quantity, onDecrease, onIncrease, compact = false }) {
  const sizeClasses = compact ? 'h-9 w-9' : 'h-11 w-11'

  return (
    <div className="inline-flex items-center rounded-full border border-velmora-line bg-velmora-mist">
      <button
        type="button"
        onClick={onDecrease}
        className={`${sizeClasses} inline-flex items-center justify-center rounded-full text-velmora-espresso transition hover:bg-velmora-ivory`}
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm font-medium text-velmora-espresso">
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        className={`${sizeClasses} inline-flex items-center justify-center rounded-full text-velmora-espresso transition hover:bg-velmora-ivory`}
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}

export default QuantitySelector
