import { Minus, Plus } from 'lucide-react'

export default function QuantitySelector({ value, onChange }) {
  return (
    <div className="inline-flex items-center rounded-full border border-stone-300 bg-stone-50 p-1">
      <button
        type="button"
        aria-label="Decrease quantity"
        className="flex h-10 w-10 items-center justify-center rounded-full text-stone-700 transition hover:bg-stone-200"
        onClick={() => onChange(Math.max(1, value - 1))}
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm font-medium text-stone-900">
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        className="flex h-10 w-10 items-center justify-center rounded-full text-stone-700 transition hover:bg-stone-200"
        onClick={() => onChange(value + 1)}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}
