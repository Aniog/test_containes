import { Minus, Plus } from 'lucide-react'

function QuantitySelector({ value, onChange }) {
  return (
    <div className="inline-flex items-center rounded-full border border-stone-300 bg-white text-stone-900">
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center text-stone-900 transition hover:bg-stone-100"
        onClick={() => onChange(Math.max(1, value - 1))}
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center font-medium">{value}</span>
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center text-stone-900 transition hover:bg-stone-100"
        onClick={() => onChange(Math.min(10, value + 1))}
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}

export default QuantitySelector
