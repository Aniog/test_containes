import { Minus, Plus } from 'lucide-react'

const QuantitySelector = ({ value, onChange, compact = false }) => (
  <div className={`inline-flex items-center border border-velmora-espresso/15 bg-velmora-pearl text-velmora-ink ${compact ? 'h-9' : 'h-12'}`}>
    <button
      type="button"
      className="flex h-full w-10 items-center justify-center text-velmora-ink transition hover:bg-velmora-parchment focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
      onClick={() => onChange(Math.max(1, value - 1))}
      aria-label="Decrease quantity"
    >
      <Minus className="h-4 w-4" />
    </button>
    <span className="min-w-10 text-center text-sm font-semibold">{value}</span>
    <button
      type="button"
      className="flex h-full w-10 items-center justify-center text-velmora-ink transition hover:bg-velmora-parchment focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
      onClick={() => onChange(value + 1)}
      aria-label="Increase quantity"
    >
      <Plus className="h-4 w-4" />
    </button>
  </div>
)

export default QuantitySelector
