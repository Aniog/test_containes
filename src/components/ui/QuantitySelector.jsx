import { Minus, Plus } from 'lucide-react'

export function QuantitySelector({ value, onChange, min = 1, max = 99 }) {
  const decrement = () => onChange(Math.max(min, value - 1))
  const increment = () => onChange(Math.min(max, value + 1))

  return (
    <div className="inline-flex items-center border border-velmora-hairline bg-white">
      <button
        type="button"
        onClick={decrement}
        disabled={value <= min}
        className="px-3 py-2.5 text-velmora-muted transition hover:text-velmora-dark disabled:opacity-30"
        aria-label="Decrease quantity"
      >
        <Minus size={14} strokeWidth={1.5} />
      </button>
      <span className="w-10 text-center text-sm font-medium text-velmora-dark">
        {value}
      </span>
      <button
        type="button"
        onClick={increment}
        disabled={value >= max}
        className="px-3 py-2.5 text-velmora-muted transition hover:text-velmora-dark disabled:opacity-30"
        aria-label="Increase quantity"
      >
        <Plus size={14} strokeWidth={1.5} />
      </button>
    </div>
  )
}
