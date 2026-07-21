import { Minus, Plus } from "lucide-react"

const QuantitySelector = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <div className="inline-flex items-center rounded-full border border-velvet/15 bg-porcelain text-velvet shadow-soft">
      <button
        type="button"
        onClick={onDecrease}
        className="flex h-11 w-11 items-center justify-center rounded-full text-velvet transition hover:bg-velvet hover:text-ivory"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm font-medium">{quantity}</span>
      <button
        type="button"
        onClick={onIncrease}
        className="flex h-11 w-11 items-center justify-center rounded-full text-velvet transition hover:bg-velvet hover:text-ivory"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}

export default QuantitySelector
