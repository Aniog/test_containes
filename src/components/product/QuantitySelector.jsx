import { Minus, Plus } from 'lucide-react'

export default function QuantitySelector({ quantity, onChange }) {
  return (
    <div className="inline-flex items-center rounded-full border border-velmora-sand bg-velmora-cream text-velmora-ink">
      <button
        type="button"
        className="rounded-l-full px-4 py-3 text-velmora-cocoa transition hover:bg-velmora-sand/30"
        onClick={() => onChange(Math.max(1, quantity - 1))}
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm font-medium">{quantity}</span>
      <button
        type="button"
        className="rounded-r-full px-4 py-3 text-velmora-cocoa transition hover:bg-velmora-sand/30"
        onClick={() => onChange(quantity + 1)}
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}
