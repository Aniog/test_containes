import { Minus, Plus } from 'lucide-react'

export default function QuantitySelector({ value, onChange, min = 1, max = 10 }) {
  const decrease = () => {
    if (value > min) onChange(value - 1)
  }
  const increase = () => {
    if (value < max) onChange(value + 1)
  }

  return (
    <div className="inline-flex items-center border border-line">
      <button
        type="button"
        onClick={decrease}
        disabled={value <= min}
        className="h-10 w-10 flex items-center justify-center text-stone hover:text-ink disabled:opacity-30 transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="h-10 w-10 flex items-center justify-center text-sm font-medium text-ink">
        {value}
      </span>
      <button
        type="button"
        onClick={increase}
        disabled={value >= max}
        className="h-10 w-10 flex items-center justify-center text-stone hover:text-ink disabled:opacity-30 transition-colors"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  )
}
