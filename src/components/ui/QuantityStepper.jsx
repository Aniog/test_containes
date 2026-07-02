import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function QuantityStepper({ quantity, onChange, min = 1, max = 10 }) {
  const decrement = () => onChange(Math.max(min, quantity - 1))
  const increment = () => onChange(Math.min(max, quantity + 1))

  return (
    <div className="inline-flex items-center border border-[#E4DDD4]">
      <button
        type="button"
        onClick={decrement}
        disabled={quantity <= min}
        className={cn(
          'flex h-11 w-11 items-center justify-center text-[#1A1512] transition-colors',
          quantity <= min ? 'opacity-30' : 'hover:bg-[#F0EAE3]'
        )}
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      <span className="flex h-11 w-12 items-center justify-center text-sm font-medium text-[#1A1512]">
        {quantity}
      </span>
      <button
        type="button"
        onClick={increment}
        disabled={quantity >= max}
        className={cn(
          'flex h-11 w-11 items-center justify-center text-[#1A1512] transition-colors',
          quantity >= max ? 'opacity-30' : 'hover:bg-[#F0EAE3]'
        )}
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </button>
    </div>
  )
}
