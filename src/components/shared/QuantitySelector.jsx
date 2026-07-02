import { Minus, Plus } from 'lucide-react'

const QuantitySelector = ({ value, onDecrease, onIncrease, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center rounded-full border border-velmora-line bg-velmora-mist ${className}`}
    >
      <button
        type="button"
        onClick={onDecrease}
        className="flex h-11 w-11 items-center justify-center rounded-full text-velmora-ink transition hover:bg-velmora-sand"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm font-medium text-velmora-ink">
        {value}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        className="flex h-11 w-11 items-center justify-center rounded-full text-velmora-ink transition hover:bg-velmora-sand"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}

export default QuantitySelector
