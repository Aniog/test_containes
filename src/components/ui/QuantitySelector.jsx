import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function QuantitySelector({ value, onChange, min = 1, max = 10, className }) {
  return (
    <div
      className={cn(
        'inline-flex items-center border border-velmora-sand rounded-none',
        className
      )}
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="w-10 h-10 flex items-center justify-center text-velmora-dark hover:bg-velmora-warm disabled:opacity-30 transition-colors"
      >
        <Minus size={14} />
      </button>
      <span className="w-10 h-10 flex items-center justify-center text-sm font-medium tabular-nums">
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="w-10 h-10 flex items-center justify-center text-velmora-dark hover:bg-velmora-warm disabled:opacity-30 transition-colors"
      >
        <Plus size={14} />
      </button>
    </div>
  )
}
