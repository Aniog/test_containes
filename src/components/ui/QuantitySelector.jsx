import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function QuantitySelector({
  value,
  onChange,
  className,
  min = 1,
  decreaseLabel = 'Decrease quantity',
  increaseLabel = 'Increase quantity',
}) {
  const updateValue = (nextValue) => onChange(Math.max(min, nextValue))

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border border-stone-300 bg-white text-stone-900',
        className,
      )}
    >
      <button
        type="button"
        aria-label={decreaseLabel}
        className="flex h-11 w-11 items-center justify-center rounded-full text-stone-700 transition hover:bg-stone-100"
        onClick={() => updateValue(value - 1)}
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm font-medium">{value}</span>
      <button
        type="button"
        aria-label={increaseLabel}
        className="flex h-11 w-11 items-center justify-center rounded-full text-stone-700 transition hover:bg-stone-100"
        onClick={() => updateValue(value + 1)}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}
