import { Minus, Plus } from 'lucide-react'

export default function QuantitySelector({ min = 1, onChange, value }) {
  return (
    <div className="flex items-center rounded-full border border-sandDeep/80 bg-white/70 text-ink">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="rounded-full p-2 transition hover:bg-sand"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm font-medium">{value}</span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="rounded-full p-2 transition hover:bg-sand"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}
