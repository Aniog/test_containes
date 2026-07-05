import { Minus, Plus } from 'lucide-react'

export default function QuantitySelector({ value, onChange, min = 1, max = 10 }) {
  const decrease = () => onChange(Math.max(min, value - 1))
  const increase = () => onChange(Math.min(max, value + 1))

  return (
    <div className="flex items-center border border-warm-gray bg-ivory">
      <button
        type="button"
        onClick={decrease}
        aria-label="Decrease quantity"
        className="px-3 py-2.5 text-espresso hover:bg-warm-gray transition-colors"
      >
        <Minus size={14} strokeWidth={1.5} />
      </button>
      <span className="w-10 text-center text-sm font-medium text-espresso">
        {value}
      </span>
      <button
        type="button"
        onClick={increase}
        aria-label="Increase quantity"
        className="px-3 py-2.5 text-espresso hover:bg-warm-gray transition-colors"
      >
        <Plus size={14} strokeWidth={1.5} />
      </button>
    </div>
  )
}
