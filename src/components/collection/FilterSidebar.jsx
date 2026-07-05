import { useState } from "react"
import { ChevronDown, X } from "lucide-react"
import { CATEGORIES, MATERIALS } from "@/data/products"
import { cn } from "@/lib/utils"

const PRICE_BUCKETS = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75plus", label: "$75+", min: 75, max: Infinity },
]

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-line py-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between text-left"
        aria-expanded={open}
      >
        <span className="eyebrow">{title}</span>
        <ChevronDown
          size={14}
          strokeWidth={1.4}
          className={cn("text-ink transition-transform duration-300", open && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300",
          open ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  )
}

function CheckRow({ label, checked, onChange, count }) {
  return (
    <label className="flex items-center justify-between py-1.5 cursor-pointer group">
      <span className="flex items-center gap-2.5">
        <span
          className={cn(
            "h-4 w-4 border rounded-sm inline-flex items-center justify-center transition-colors",
            checked ? "bg-ink border-ink" : "border-line group-hover:border-ink"
          )}
        >
          {checked && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
              <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" className="text-bone" />
            </svg>
          )}
        </span>
        <span className="text-sm text-ink-soft font-sans group-hover:text-ink transition-colors">
          {label}
        </span>
      </span>
      {typeof count === "number" && (
        <span className="text-[11px] text-muted-2 font-sans">{count}</span>
      )}
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  )
}

export default function FilterSidebar({ filters, onChange, products, totalCount, onClose }) {
  const { categories, materials, price, sort } = filters

  const toggleCategory = (id) => {
    const next = categories.includes(id)
      ? categories.filter((c) => c !== id)
      : [...categories, id]
    onChange({ ...filters, categories: next })
  }
  const toggleMaterial = (id) => {
    const next = materials.includes(id)
      ? materials.filter((m) => m !== id)
      : [...materials, id]
    onChange({ ...filters, materials: next })
  }

  const countByCategory = (id) => products.filter((p) => p.category === id).length
  const countByMaterial = (id) => products.filter((p) => p.material === id).length

  const hasActive =
    categories.length > 0 || materials.length > 0 || price !== "all"

  return (
    <aside className="bg-bone" aria-label="Filters">
      <div className="flex items-center justify-between pb-5 border-b border-line">
        <h2 className="eyebrow">Refine</h2>
        {hasActive && (
          <button
            type="button"
            onClick={() => onChange({ categories: [], materials: [], price: "all", sort: "featured" })}
            className="text-[11px] uppercase tracking-eyebrow text-muted hover:text-ink font-sans inline-flex items-center gap-1.5"
          >
            Clear <X size={11} strokeWidth={1.6} />
          </button>
        )}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="lg:hidden -mr-2 p-2 text-ink"
            aria-label="Close filters"
          >
            <X size={18} strokeWidth={1.4} />
          </button>
        )}
      </div>

      <FilterGroup title="Category">
        {CATEGORIES.map((c) => (
          <CheckRow
            key={c.id}
            label={c.name}
            checked={categories.includes(c.id)}
            onChange={() => toggleCategory(c.id)}
            count={countByCategory(c.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_BUCKETS.map((b) => (
          <label key={b.id} className="flex items-center gap-2.5 py-1.5 cursor-pointer group">
            <span
              className={cn(
                "h-4 w-4 rounded-full border inline-flex items-center justify-center transition-colors",
                price === b.id ? "border-ink" : "border-line group-hover:border-ink"
              )}
            >
              {price === b.id && <span className="h-2 w-2 rounded-full bg-ink" />}
            </span>
            <span className="text-sm text-ink-soft group-hover:text-ink transition-colors font-sans">
              {b.label}
            </span>
            <input
              type="radio"
              className="sr-only"
              name="price"
              checked={price === b.id}
              onChange={() => onChange({ ...filters, price: b.id })}
            />
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Material" defaultOpen={false}>
        {MATERIALS.map((m) => (
          <CheckRow
            key={m.id}
            label={m.label}
            checked={materials.includes(m.id)}
            onChange={() => toggleMaterial(m.id)}
            count={countByMaterial(m.id)}
          />
        ))}
      </FilterGroup>

      <p className="mt-6 text-[11px] text-muted-2 font-sans">
        Showing {totalCount} piece{totalCount === 1 ? "" : "s"}.
      </p>
    </aside>
  )
}

export { PRICE_BUCKETS }
