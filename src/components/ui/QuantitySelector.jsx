import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function QuantitySelector({ value, onChange, min = 1, max = 10 }) {
  const decrease = () => onChange(Math.max(min, value - 1))
  const increase = () => onChange(Math.min(max, value + 1))

  return (
    <div className="inline-flex items-center border border-hairline">
      <button
        type="button"
        onClick={decrease}
        disabled={value <= min}
        className="px-3 py-2 text-warmgray transition-colors hover:bg-taupe/50 disabled:opacity-40"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="min-w-[2.5rem] select-none px-2 text-center text-sm font-medium text-charcoal">
        {value}
      </span>
      <button
        type="button"
        onClick={increase}
        disabled={value >= max}
        className="px-3 py-2 text-warmgray transition-colors hover:bg-taupe/50 disabled:opacity-40"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  )
}
