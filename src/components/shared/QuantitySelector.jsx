import { Minus, Plus } from 'lucide-react'

export default function QuantitySelector({ quantity, onChange }) {
  return (
    <div className="inline-flex items-center rounded-full border border-stone-300 bg-stone-50 p-1 text-stone-900">
      <button
        type="button"
        onClick={() => onChange(quantity - 1)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-stone-700 transition hover:bg-stone-200"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm font-medium">{quantity}</span>
      <button
        type="button"
        onClick={() => onChange(quantity + 1)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-stone-700 transition hover:bg-stone-200"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}
