import { Minus, Plus } from "lucide-react"

export default function QuantitySelector({ value, onChange, min = 1, max = 10 }) {
  return (
    <div>
      <span className="mb-3 block font-sans text-[11px] uppercase tracking-[0.22em] text-espresso">
        Quantity
      </span>
      <div className="inline-flex items-center border border-hairline">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          className="p-3 text-espresso transition-colors hover:text-gold disabled:opacity-50"
          disabled={value <= min}
          aria-label="Decrease quantity"
        >
          <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
        </button>
        <span className="min-w-10 text-center font-sans text-sm text-espresso">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          className="p-3 text-espresso transition-colors hover:text-gold disabled:opacity-50"
          disabled={value >= max}
          aria-label="Increase quantity"
        >
          <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}
