import { cn } from "../../lib/utils.js"

export default function VariantSelector({ value, onChange, options = [] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {options.map((opt) => {
        const isActive = value === opt.value
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            aria-pressed={isActive}
            className={cn(
              "px-5 py-2.5 text-[10px] tracking-eyebrow uppercase border transition-colors duration-300",
              isActive
                ? "border-espresso bg-espresso text-ivory"
                : "border-ink/20 text-ink hover:border-ink/60",
            )}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
