import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function QuantitySelector({ value, onChange, className = '' }) {
  return (
    <div className={cn('inline-flex items-center rounded-full border border-velmora-espresso/15 bg-white/80', className)}>
      <button
        type="button"
        aria-label="Decrease quantity"
        className="flex h-11 w-11 items-center justify-center rounded-full text-velmora-noir transition hover:bg-velmora-mist"
        onClick={() => onChange(Math.max(1, value - 1))}
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm font-medium text-velmora-noir">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        className="flex h-11 w-11 items-center justify-center rounded-full text-velmora-noir transition hover:bg-velmora-mist"
        onClick={() => onChange(value + 1)}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}
