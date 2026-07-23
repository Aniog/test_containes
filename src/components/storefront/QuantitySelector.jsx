import { Minus, Plus } from 'lucide-react'

export default function QuantitySelector({ value, onChange, light = false }) {
  const baseClasses = light
    ? 'border-mist/30 bg-white/5 text-mist'
    : 'border-line bg-surface text-ink'

  return (
    <div className={`inline-flex items-center rounded-full border ${baseClasses}`}>
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        className="grid h-11 w-11 place-items-center rounded-full transition hover:bg-black/5"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm font-medium">{value}</span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="grid h-11 w-11 place-items-center rounded-full transition hover:bg-black/5"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}
