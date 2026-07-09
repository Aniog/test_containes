import { Minus, Plus } from 'lucide-react'

export default function QuantitySelector({ quantity, onChange }) {
  return (
    <div className="inline-flex items-center rounded-full border border-velmora-line bg-velmora-panel px-2 py-1 text-velmora-cocoa">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, quantity - 1))}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-velmora-ivory"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm">{quantity}</span>
      <button
        type="button"
        onClick={() => onChange(quantity + 1)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-velmora-ivory"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}
