import { Minus, Plus } from 'lucide-react'

export default function QuantitySelector({ value, onChange, min = 1, max = 10 }) {
  const decrease = () => onChange(Math.max(min, value - 1))
  const increase = () => onChange(Math.min(max, value + 1))

  return (
    <div className="inline-flex items-center border border-stone">
      <button
        type="button"
        onClick={decrease}
        disabled={value <= min}
        className="px-3 py-2 hover:bg-cream disabled:opacity-30 transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus size={14} strokeWidth={1.5} />
      </button>
      <span className="w-10 text-center text-sm font-medium tabular-nums">
        {value}
      </span>
      <button
        type="button"
        onClick={increase}
        disabled={value >= max}
        className="px-3 py-2 hover:bg-cream disabled:opacity-30 transition-colors"
        aria-label="Increase quantity"
      >
        <Plus size={14} strokeWidth={1.5} />
      </button>
    </div>
  )
}
