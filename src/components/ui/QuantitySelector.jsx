import { Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export function QuantitySelector({ value, onChange, min = 1, max = 10, compact }) {
  return (
    <div
      className={cn(
        "inline-flex items-center border border-border-dark bg-ivory",
        compact ? "h-10" : "h-12"
      )}
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="flex h-full w-10 items-center justify-center text-warm-gray transition-colors hover:text-charcoal disabled:opacity-40"
        disabled={value <= min}
      >
        <Minus size={14} />
      </button>
      <span className="w-10 text-center text-sm font-medium text-charcoal">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(Math.min(max, value + 1))}
        className="flex h-full w-10 items-center justify-center text-warm-gray transition-colors hover:text-charcoal disabled:opacity-40"
        disabled={value >= max}
      >
        <Plus size={14} />
      </button>
    </div>
  )
}
