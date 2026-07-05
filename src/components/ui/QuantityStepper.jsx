import { Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function QuantityStepper({ value = 1, onChange, min = 1, max = 99, size = "md", className = "" }) {
  const dims = size === "lg" ? "h-12" : "h-11"
  const btn = size === "lg" ? "w-12" : "w-11"

  return (
    <div className={cn("inline-flex items-center border border-line rounded-full", dims, className)}>
      <button
        type="button"
        onClick={() => onChange?.(Math.max(min, value - 1))}
        disabled={value <= min}
        className={cn(btn, "h-full inline-flex items-center justify-center text-ink hover:text-ink-soft disabled:text-muted-2 disabled:cursor-not-allowed transition-colors")}
        aria-label="Decrease quantity"
      >
        <Minus size={14} strokeWidth={1.6} />
      </button>
      <span className="flex-1 text-center text-sm font-medium tracking-wide select-none" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange?.(Math.min(max, value + 1))}
        disabled={value >= max}
        className={cn(btn, "h-full inline-flex items-center justify-center text-ink hover:text-ink-soft disabled:text-muted-2 disabled:cursor-not-allowed transition-colors")}
        aria-label="Increase quantity"
      >
        <Plus size={14} strokeWidth={1.6} />
      </button>
    </div>
  )
}
