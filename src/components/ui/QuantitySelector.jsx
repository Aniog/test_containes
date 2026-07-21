import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function QuantitySelector({ value, onChange, min = 1, max = 99, className }) {
  const decrease = () => onChange(Math.max(min, value - 1))
  const increase = () => onChange(Math.min(max, value + 1))

  return (
    <div className={cn('inline-flex items-center border border-champagne bg-cream-light', className)}>
      <button
        type="button"
        onClick={decrease}
        disabled={value <= min}
        className="flex h-10 w-10 items-center justify-center text-taupe transition-colors hover:bg-champagne disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="flex h-10 w-12 items-center justify-center text-sm font-medium text-espresso">
        {value}
      </span>
      <button
        type="button"
        onClick={increase}
        disabled={value >= max}
        className="flex h-10 w-10 items-center justify-center text-taupe transition-colors hover:bg-champagne disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  )
}
