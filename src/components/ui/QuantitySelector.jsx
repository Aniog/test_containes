import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function QuantitySelector({ value, onChange, min = 1, max = 10, className }) {
  return (
    <div
      className={cn(
        'inline-flex items-center border border-ink/10',
        className,
      )}
    >
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="p-3 text-ink transition-colors hover:text-gold disabled:opacity-30"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="min-w-[2.5rem] px-2 text-center text-sm font-medium tabular-nums">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="p-3 text-ink transition-colors hover:text-gold disabled:opacity-30"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  )
}
