import { categories, priceRanges, materialFilters } from "../../data/products.js"
import { cn } from "../../lib/utils.js"

const SectionLabel = ({ children }) => (
  <h3 className="text-[10px] tracking-eyebrow uppercase text-muted font-medium mb-4">
    {children}
  </h3>
)

const Check = ({ checked }) => (
  <span
    className={cn(
      "h-4 w-4 inline-flex items-center justify-center border transition-colors flex-shrink-0",
      checked ? "bg-espresso border-espresso" : "border-ink/30",
    )}
  >
    {checked && (
      <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 text-ivory" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m5 12 5 5L20 7" />
      </svg>
    )}
  </span>
)

export default function FilterSidebar({ filters, onChange, total, className }) {
  const toggle = (group, value) => {
    onChange((prev) => {
      const set = new Set(prev[group] || [])
      if (set.has(value)) set.delete(value)
      else set.add(value)
      return { ...prev, [group]: Array.from(set) }
    })
  }
  return (
    <aside className={cn("w-full md:w-60 flex-shrink-0", className)} aria-label="Filters">
      <div className="md:sticky md:top-24">
        <p className="text-[11px] tracking-eyebrow uppercase text-ink mb-6">
          {total} {total === 1 ? "piece" : "pieces"}
        </p>

        <div className="mb-9">
          <SectionLabel>Category</SectionLabel>
          <ul className="space-y-3">
            {categories.map((c) => {
              const checked = filters.categories.includes(c.id)
              return (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => toggle("categories", c.id)}
                    className="w-full flex items-center gap-3 text-left text-[13px] text-ink/80 hover:text-ink"
                  >
                    <Check checked={checked} />
                    <span>{c.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="mb-9">
          <SectionLabel>Price</SectionLabel>
          <ul className="space-y-3">
            {priceRanges.map((p) => {
              const checked = filters.prices.includes(p.id)
              return (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => toggle("prices", p.id)}
                    className="w-full flex items-center gap-3 text-left text-[13px] text-ink/80 hover:text-ink"
                  >
                    <Check checked={checked} />
                    <span>{p.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="mb-9">
          <SectionLabel>Material</SectionLabel>
          <ul className="space-y-3">
            {materialFilters.map((m) => {
              const checked = filters.materials.includes(m.id)
              return (
                <li key={m.id}>
                  <button
                    type="button"
                    onClick={() => toggle("materials", m.id)}
                    className="w-full flex items-center gap-3 text-left text-[13px] text-ink/80 hover:text-ink"
                  >
                    <Check checked={checked} />
                    <span>{m.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        {(filters.categories.length ||
          filters.prices.length ||
          filters.materials.length) > 0 && (
          <button
            type="button"
            onClick={() => onChange({ categories: [], prices: [], materials: [] })}
            className="text-[10px] tracking-eyebrow uppercase text-muted hover:text-ink underline underline-offset-4"
          >
            Clear all
          </button>
        )}
      </div>
    </aside>
  )
}
