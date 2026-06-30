import { Minus, Plus } from 'lucide-react'

export function QuantitySelector({ value, onChange, min = 1, max = 10 }) {
  return (
    <div className="flex items-center border border-velmora-hairline">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="p-3 hover:bg-velmora-cream transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="w-10 text-center text-sm font-medium tabular-nums">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        className="p-3 hover:bg-velmora-cream transition-colors"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  )
}
