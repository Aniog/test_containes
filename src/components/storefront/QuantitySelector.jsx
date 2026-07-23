import { Minus, Plus } from 'lucide-react'

export default function QuantitySelector({ value, onChange, compact = false }) {
  const sizeClass = compact ? 'h-9 w-9' : 'h-11 w-11'

  return (
    <div className="inline-flex items-center rounded-full border border-stone-300 bg-white text-[var(--velmora-ink)]">
      <button
        type="button"
        aria-label="Decrease quantity"
        className={`${sizeClass} inline-flex items-center justify-center rounded-full text-stone-600 transition hover:text-[var(--velmora-ink)]`}
        onClick={() => onChange(Math.max(1, value - 1))}
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm font-medium">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        className={`${sizeClass} inline-flex items-center justify-center rounded-full text-stone-600 transition hover:text-[var(--velmora-ink)]`}
        onClick={() => onChange(value + 1)}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}
