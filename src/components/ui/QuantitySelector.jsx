import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function QuantitySelector({ value, onChange, min = 1, max = 99, size = 'md' }) {
  const decrement = () => onChange(Math.max(min, value - 1))
  const increment = () => onChange(Math.min(max, value + 1))

  return (
    <div
      className={cn(
        'inline-flex items-center border border-mist bg-cream',
        size === 'sm' ? 'h-9' : 'h-11'
      )}
    >
      <button
        type="button"
        onClick={decrement}
        disabled={value <= min}
        className="flex h-full items-center justify-center px-3 text-taupe transition-colors hover:text-espresso disabled:opacity-30"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span
        className={cn(
          'flex h-full min-w-[2.5rem] select-none items-center justify-center border-x border-mist font-sans text-espresso',
          size === 'sm' ? 'text-sm' : 'text-base'
        )}
      >
        {value}
      </span>
      <button
        type="button"
        onClick={increment}
        disabled={value >= max}
        className="flex h-full items-center justify-center px-3 text-taupe transition-colors hover:text-espresso disabled:opacity-30"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  )
}
