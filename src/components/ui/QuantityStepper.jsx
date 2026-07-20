import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function QuantityStepper({ value, onChange, min = 1, max = 99, className }) {
  return (
    <div
      className={cn(
        'inline-flex items-center border border-velmora-taupe',
        className,
      )}
    >
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="px-3 py-2 text-velmora-stone transition-colors hover:text-velmora-charcoal disabled:opacity-30"
        aria-label="Decrease quantity"
      >
        <Minus className="h-3 w-3" />
      </button>
      <span className="min-w-[2rem] select-none px-2 text-center text-sm tabular-nums">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="px-3 py-2 text-velmora-stone transition-colors hover:text-velmora-charcoal disabled:opacity-30"
        aria-label="Increase quantity"
      >
        <Plus className="h-3 w-3" />
      </button>
    </div>
  )
}
