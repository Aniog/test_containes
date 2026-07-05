import { cn } from "@/lib/utils"
import { VARIANTS } from "@/data/products"

export default function VariantSelector({ value, onChange, available = ["gold", "silver"], className = "" }) {
  const items = VARIANTS.filter((v) => available.includes(v.id))
  return (
    <div className={cn("flex flex-wrap gap-2", className)} role="radiogroup" aria-label="Metal tone">
      {items.map((v) => {
        const active = v.id === value
        return (
          <button
            key={v.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange?.(v.id)}
            className={cn(
              "group inline-flex items-center gap-2.5 rounded-full border px-4 h-10 text-[0.7rem] uppercase tracking-product font-medium transition-all duration-200",
              active
                ? "border-ink bg-ink text-bone"
                : "border-line bg-transparent text-ink hover:border-ink"
            )}
          >
            <span
              className="h-3.5 w-3.5 rounded-full border border-ink/20"
              style={{ background: v.swatch }}
              aria-hidden="true"
            />
            {v.label}
          </button>
        )
      })}
    </div>
  )
}
