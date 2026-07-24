import { Minus, Plus } from 'lucide-react'

export default function QuantitySelector({ quantity, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, quantity - 1))}
        className="rounded-md border border-border p-2.5 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-[2.5rem] text-center text-sm font-medium">{quantity}</span>
      <button
        type="button"
        onClick={() => onChange(quantity + 1)}
        className="rounded-md border border-border p-2.5 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}
