import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils.js'

export default function QuantitySelector({
  className,
  onChange,
  value,
}) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border border-white/10 bg-stone-900 text-stone-100 shadow-lg shadow-stone-950/20',
        className,
      )}
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        className="flex h-11 w-11 items-center justify-center rounded-full text-stone-300 hover:bg-white/5 hover:text-stone-100"
        onClick={() => onChange(value - 1)}
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm font-medium">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        className="flex h-11 w-11 items-center justify-center rounded-full text-stone-300 hover:bg-white/5 hover:text-stone-100"
        onClick={() => onChange(value + 1)}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}
