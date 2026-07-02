import React from 'react'
import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function QuantitySelector({ value, onChange, min = 1, max = 99, size = 'md' }) {
  const handleDec = () => onChange(Math.max(min, value - 1))
  const handleInc = () => onChange(Math.min(max, value + 1))
  const sizeClasses =
    size === 'sm'
      ? 'h-8 w-8'
      : 'h-10 w-10'

  return (
    <div className="inline-flex items-center border border-cream-300">
      <button
        type="button"
        onClick={handleDec}
        disabled={value <= min}
        className={cn(
          'flex items-center justify-center text-espresso-900 transition-colors hover:bg-cream-200 disabled:opacity-40',
          sizeClasses
        )}
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="flex h-10 w-10 items-center justify-center font-sans text-sm tabular-nums text-espresso-900">
        {value}
      </span>
      <button
        type="button"
        onClick={handleInc}
        disabled={value >= max}
        className={cn(
          'flex items-center justify-center text-espresso-900 transition-colors hover:bg-cream-200 disabled:opacity-40',
          sizeClasses
        )}
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  )
}
