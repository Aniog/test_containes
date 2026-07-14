import { cn } from "@/lib/utils.js"

export default function VariantSelector({ options, value, onChange }) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-espresso">
          Tone
        </span>
        <span className="font-sans text-xs text-taupe">{value}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = opt === value
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={cn(
                "border px-4 py-2.5 font-sans text-[12px] uppercase tracking-[0.22em] transition-all duration-300",
                active
                  ? "border-espresso bg-espresso text-ivory"
                  : "border-hairline bg-transparent text-espresso hover:border-espresso"
              )}
            >
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}
