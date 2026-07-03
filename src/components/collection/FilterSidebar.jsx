import { useState } from "react"
import { ChevronDown, X } from "lucide-react"
import { CATEGORIES, MATERIALS } from "@/data/products"
import { cn, formatPrice } from "@/lib/utils"

const PRICE_BUCKETS = [
  { id: "0-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 — $75", min: 50, max: 75 },
  { id: "75-100", label: "$75 — $100", min: 75, max: 100 },
  { id: "100+", label: "$100 & above", min: 100, max: 9999 },
]

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-line py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between"
        aria-expanded={open}
      >
        <span className="font-sans text-[11px] uppercase tracking-eyebrow text-ink-secondary">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-ink-secondary transition-transform duration-300",
            open && "rotate-180",
          )}
          strokeWidth={1.5}
        />
      </button>
      {open && <div className="mt-4 space-y-2.5">{children}</div>}
    </div>
  )
}

function Checkbox({ checked, onChange, label }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={cn(
          "h-4 w-4 flex-shrink-0 border transition-colors duration-300 flex items-center justify-center",
          checked
            ? "bg-accent border-accent"
            : "border-line-strong group-hover:border-accent",
        )}
        aria-hidden="true"
      >
        {checked && (
          <svg viewBox="0 0 12 12" className="h-3 w-3 text-ink-onAccent" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="2 6 5 9 10 3" />
          </svg>
        )}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="text-sm text-ink-secondary group-hover:text-ink-primary transition-colors duration-300">
        {label}
      </span>
    </label>
  )
}

export default function FilterSidebar({
  filters,
  onChange,
  onClear,
  totalCount,
}) {
  const activeCount =
    filters.categories.length +
    filters.materials.length +
    filters.prices.length

  return (
    <aside className="w-full md:w-64 lg:w-72 md:flex-shrink-0">
      <div className="flex items-center justify-between mb-2">
        <p className="eyebrow">
          Filters
          {activeCount > 0 && (
            <span className="ml-2 text-accent">({activeCount})</span>
          )}
        </p>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-[11px] uppercase tracking-eyebrow text-ink-muted hover:text-ink-primary inline-flex items-center gap-1"
          >
            <X className="h-3 w-3" strokeWidth={1.5} /> Clear
          </button>
        )}
      </div>
      <p className="text-[12px] text-ink-muted mb-2">
        {totalCount} {totalCount === 1 ? "piece" : "pieces"}
      </p>

      <FilterGroup title="Category">
        {CATEGORIES.map((c) => (
          <Checkbox
            key={c.id}
            checked={filters.categories.includes(c.id)}
            onChange={(e) =>
              onChange("categories", c.id, e.target.checked)
            }
            label={c.label}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_BUCKETS.map((p) => (
          <Checkbox
            key={p.id}
            checked={filters.prices.includes(p.id)}
            onChange={(e) => onChange("prices", p.id, e.target.checked)}
            label={p.label}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material" defaultOpen={false}>
        {MATERIALS.map((m) => (
          <Checkbox
            key={m.id}
            checked={filters.materials.includes(m.id)}
            onChange={(e) => onChange("materials", m.id, e.target.checked)}
            label={m.label}
          />
        ))}
      </FilterGroup>

      <div className="pt-6 text-[11px] text-ink-muted leading-relaxed">
        All Velmora pieces are 18K gold plated over brass or sterling silver,
        hypoallergenic, and made in small batches.
      </div>
    </aside>
  )
}

export { PRICE_BUCKETS }
