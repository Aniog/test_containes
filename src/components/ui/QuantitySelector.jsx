import { Minus, Plus } from 'lucide-react'

const QuantitySelector = ({ quantity, onChange, light = false }) => {
  const borderTone = light ? 'border-white/15 text-ivory' : 'border-noir/10 text-noir'
  const buttonTone = light ? 'hover:bg-white/10' : 'hover:bg-noir/5'

  return (
    <div className={`inline-flex items-center overflow-hidden rounded-full border ${borderTone}`}>
      <button
        type="button"
        onClick={() => onChange(Math.max(1, quantity - 1))}
        className={`flex h-11 w-11 items-center justify-center transition ${buttonTone}`}
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm">{quantity}</span>
      <button
        type="button"
        onClick={() => onChange(quantity + 1)}
        className={`flex h-11 w-11 items-center justify-center transition ${buttonTone}`}
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}

export default QuantitySelector
