import { Minus, Plus } from 'lucide-react'

const QuantitySelector = ({ value, onChange }) => {
  return (
    <div className="inline-flex items-center rounded-full border border-velmora-sand bg-velmora-card text-velmora-ink shadow-soft">
      <button
        type="button"
        className="rounded-l-full px-4 py-3 text-velmora-smoke transition hover:bg-velmora-sand hover:text-velmora-ink"
        onClick={() => onChange(Math.max(1, value - 1))}
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-12 px-3 text-center text-sm font-medium uppercase tracking-widest text-velmora-ink">
        {value}
      </span>
      <button
        type="button"
        className="rounded-r-full px-4 py-3 text-velmora-smoke transition hover:bg-velmora-sand hover:text-velmora-ink"
        onClick={() => onChange(value + 1)}
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}

export default QuantitySelector
