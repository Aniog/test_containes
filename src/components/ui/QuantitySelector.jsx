import React from 'react'
import { Minus, Plus } from 'lucide-react'

export default function QuantitySelector({ value, onChange, min = 1, max = 10 }) {
  const decrease = () => onChange(Math.max(min, value - 1))
  const increase = () => onChange(Math.min(max, value + 1))

  return (
    <div className="inline-flex items-center border border-taupe/60">
      <button
        type="button"
        onClick={decrease}
        disabled={value <= min}
        className="flex h-10 w-10 items-center justify-center text-stone transition-colors hover:bg-cream disabled:opacity-40"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="flex h-10 w-10 items-center justify-center text-sm font-medium text-ink">
        {value}
      </span>
      <button
        type="button"
        onClick={increase}
        disabled={value >= max}
        className="flex h-10 w-10 items-center justify-center text-stone transition-colors hover:bg-cream disabled:opacity-40"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  )
}
