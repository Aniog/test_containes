import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { CATEGORIES, MATERIALS } from "@/data/products"
import { cn } from "@/lib/utils"

const PRICE_BUCKETS = [
  { id: "all", label: "All Prices", range: [0, 200] },
  { id: "under50", label: "Under $50", range: [0, 50] },
  { id: "50to75", label: "$50 – $75", range: [50, 75] },
  { id: "over75", label: "Over $75", range: [75, 200] },
]

export default function FilterSidebar({ filters, setFilters, totalCount }) {
  const toggle = (key, value) => {
    setFilters((prev) => {
      const current = prev[key] || []
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
      return { ...prev, [key]: next }
    })
  }

  return (
    <aside className="md:sticky md:top-24 md:self-start">
      <div className="md:pr-6">
        <p className="eyebrow mb-2">Filters</p>
        <p className="text-sm text-ink-muted mb-8">
          {totalCount} {totalCount === 1 ? "piece" : "pieces"}
        </p>

        <FilterGroup title="Category">
          <ul className="space-y-2">
            {CATEGORIES.map((c) => {
              const checked = filters.categories?.includes(c.id)
              return (
                <li key={c.id}>
                  <Checkbox
                    label={c.label}
                    checked={checked}
                    onChange={() => toggle("categories", c.id)}
                  />
                </li>
              )
            })}
          </ul>
        </FilterGroup>

        <FilterGroup title="Price">
          <ul className="space-y-2">
            {PRICE_BUCKETS.map((b) => {
              const checked = filters.price === b.id
              return (
                <li key={b.id}>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <span
                      className={cn(
                        "h-4 w-4 rounded-full border flex items-center justify-center transition-colors",
                        checked
                          ? "border-espresso-800"
                          : "border-espresso-800/30 group-hover:border-espresso-800/60"
                      )}
                    >
                      {checked && <span className="h-1.5 w-1.5 rounded-full bg-espresso-800" />}
                    </span>
                    <input
                      type="radio"
                      name="price"
                      checked={checked}
                      onChange={() => setFilters((p) => ({ ...p, price: b.id }))}
                      className="sr-only"
                    />
                    <span
                      className={cn(
                        "text-sm",
                        checked ? "text-espresso-800" : "text-ink-muted group-hover:text-espresso-800"
                      )}
                    >
                      {b.label}
                    </span>
                  </label>
                </li>
              )
            })}
          </ul>
        </FilterGroup>

        <FilterGroup title="Material">
          <ul className="space-y-2">
            {MATERIALS.map((m) => {
              const checked = filters.materials?.includes(m.id)
              return (
                <li key={m.id}>
                  <Checkbox
                    label={m.label}
                    checked={checked}
                    onChange={() => toggle("materials", m.id)}
                  />
                </li>
              )
            })}
          </ul>
        </FilterGroup>

        <button
          type="button"
          onClick={() => setFilters({ categories: [], materials: [], price: "all" })}
          className="mt-8 text-[11px] uppercase tracking-widest2 text-ink-muted hover:text-espresso-800 transition-colors"
        >
          Clear all
        </button>
      </div>
    </aside>
  )
}

function FilterGroup({ title, children }) {
  const [open, setOpen] = useState(true)
  return (
    <div className="border-t border-espresso-800/10 py-6 first:border-t-0 first:pt-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="eyebrow text-espresso-800">{title}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-ink-muted transition-transform",
            !open && "-rotate-90"
          )}
          strokeWidth={1.4}
        />
      </button>
      {open && <div className="mt-4">{children}</div>}
    </div>
  )
}

function Checkbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={cn(
          "h-4 w-4 border flex items-center justify-center transition-colors",
          checked
            ? "bg-espresso-800 border-espresso-800"
            : "border-espresso-800/30 group-hover:border-espresso-800/60"
        )}
      >
        {checked && (
          <svg viewBox="0 0 12 12" className="h-3 w-3 text-cream-50" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 6.5L4.5 9L10 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        className={cn(
          "text-sm",
          checked ? "text-espresso-800" : "text-ink-muted group-hover:text-espresso-800"
        )}
      >
        {label}
      </span>
    </label>
  )
}
