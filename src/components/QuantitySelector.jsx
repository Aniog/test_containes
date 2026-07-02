import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function QuantitySelector({ value, onChange, min = 1, max = 10, className }) {
  const decrement = () => onChange(Math.max(min, value - 1))
  const increment = () => onChange(Math.min(max, value + 1))

  return (
    <div
      className={cn(
        'inline-flex items-center border border-cream-muted bg-cream-dark',
        className
      )}
    >
      <button
        type="button"
        onClick={decrement}
        disabled={value <= min}
        className="px-3 py-2.5 text-ink hover:bg-cream-muted disabled:opacity-40 transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="w-10 text-center font-sans text-sm font-medium text-ink">{value}</span>
      <button
        type="button"
        onClick={increment}
        disabled={value >= max}
        className="px-3 py-2.5 text-ink hover:bg-cream-muted disabled:opacity-40 transition-colors"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  )
}
