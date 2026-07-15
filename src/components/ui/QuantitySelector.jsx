import { Minus, Plus } from 'lucide-react'

export default function QuantitySelector({ quantity, onChange }) {
  return (
    <div className="inline-flex items-center rounded-full border border-velmora-sand bg-velmora-ivory text-velmora-ink">
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-full text-velmora-ink transition hover:bg-velmora-goldSoft/15"
        onClick={() => onChange(quantity - 1)}
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm font-medium">{quantity}</span>
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-full text-velmora-ink transition hover:bg-velmora-goldSoft/15"
        onClick={() => onChange(quantity + 1)}
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}
