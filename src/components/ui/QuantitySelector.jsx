import React from 'react'
import { Minus, Plus } from 'lucide-react'

export function QuantitySelector({ value, onChange, min = 1, max = 99 }) {
  const decrement = () => onChange(Math.max(min, value - 1))
  const increment = () => onChange(Math.min(max, value + 1))

  return (
    <div className="inline-flex items-center border border-velmora-border">
      <button
        type="button"
        onClick={decrement}
        className="h-11 w-11 flex items-center justify-center hover:bg-velmora-linen transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="w-12 text-center text-sm font-medium tabular-nums">{value}</span>
      <button
        type="button"
        onClick={increment}
        className="h-11 w-11 flex items-center justify-center hover:bg-velmora-linen transition-colors"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  )
}
