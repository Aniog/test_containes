import { Minus, Plus } from 'lucide-react'
import { cn } from '../../lib/utils'

export default function QuantitySelector({
  quantity,
  onDecrease,
  onIncrease,
  className,
}) {
  return (
    <div className={cn('inline-flex items-center rounded-full border border-parchment bg-mist', className)}>
      <button
        type="button"
        onClick={onDecrease}
        className="flex h-11 w-11 items-center justify-center text-stone transition hover:text-ink"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm font-medium text-ink">
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        className="flex h-11 w-11 items-center justify-center text-stone transition hover:text-ink"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}
