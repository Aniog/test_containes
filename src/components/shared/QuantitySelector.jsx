import { Minus, Plus } from 'lucide-react'

function QuantitySelector({ value, onDecrease, onIncrease, light = false }) {
  const baseClasses = light
    ? 'border-velmora-pearl/25 text-velmora-pearl'
    : 'border-velmora-ink/15 text-velmora-ink'

  return (
    <div className={`inline-flex items-center rounded-full border ${baseClasses}`}>
      <button
        type="button"
        aria-label="Decrease quantity"
        className="rounded-full p-3 transition hover:bg-velmora-ink/5"
        onClick={onDecrease}
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm font-medium">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        className="rounded-full p-3 transition hover:bg-velmora-ink/5"
        onClick={onIncrease}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}

export default QuantitySelector
