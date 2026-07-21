import React from "react"
import { cn } from "../../lib/utils"
import { categories, materials } from "../../data/products"
import { X } from "lucide-react"

const priceBands = [
  { id: "all", label: "All prices", test: () => true },
  { id: "u50", label: "Under $50", test: (p) => p < 50 },
  { id: "50-75", label: "$50 – $75", test: (p) => p >= 50 && p <= 75 },
  { id: "75-120", label: "$75 – $120", test: (p) => p > 75 && p <= 120 },
]

function Group({ title, children }) {
  return (
    <div className="border-t border-ink/10 py-6 first:border-t-0 first:pt-0">
      <h3 className="text-[10px] font-medium uppercase tracking-[0.24em] text-ink/70">
        {title}
      </h3>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  )
}

function CheckRow({ id, label, checked, onChange }) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-3 text-sm text-ink/80 transition-colors duration-200 hover:text-ink"
    >
      <span
        className={cn(
          "flex h-4 w-4 flex-shrink-0 items-center justify-center border transition-colors duration-200",
          checked ? "border-ink bg-ink text-bone" : "border-ink/30 bg-transparent"
        )}
      >
        {checked && (
          <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 6 L5 9 L10 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span>{label}</span>
    </label>
  )
}

export default function FilterSidebar({
  filters,
  onChange,
  totalCount,
  className,
  isMobile = false,
  onClose,
}) {
  const setField = (field, value) => onChange({ ...filters, [field]: value })

  const toggleCategory = (id) => {
    const current = new Set(filters.categories)
    if (current.has(id)) current.delete(id)
    else current.add(id)
    setField("categories", Array.from(current))
  }

  const toggleMaterial = (id) => {
    const current = new Set(filters.materials)
    if (current.has(id)) current.delete(id)
    else current.add(id)
    setField("materials", Array.from(current))
  }

  return (
    <aside
      className={cn(
        "bg-bone-50",
        isMobile ? "h-full" : "sticky top-24 hidden md:block w-[240px] flex-shrink-0",
        className
      )}
    >
      {isMobile && (
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
          <span className="text-[11px] uppercase tracking-[0.24em] text-ink">Filter</span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink hover:bg-ink/5"
            aria-label="Close filters"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      )}
      <div className={cn(isMobile ? "px-5 py-4" : "")}>
        <p className="hidden text-[10px] uppercase tracking-[0.24em] text-ink/60 md:block">
          {totalCount} {totalCount === 1 ? "piece" : "pieces"}
        </p>

        <Group title="Category">
          {categories.map((c) => (
            <CheckRow
              key={c.id}
              id={`cat-${c.id}`}
              label={c.label}
              checked={filters.categories.includes(c.id)}
              onChange={() => toggleCategory(c.id)}
            />
          ))}
        </Group>

        <Group title="Price">
          {priceBands.map((band) => (
            <label
              key={band.id}
              htmlFor={`price-${band.id}`}
              className="flex cursor-pointer items-center gap-3 text-sm text-ink/80 transition-colors duration-200 hover:text-ink"
            >
              <span
                className={cn(
                  "flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border transition-colors duration-200",
                  filters.priceBand === band.id
                    ? "border-ink"
                    : "border-ink/30"
                )}
              >
                {filters.priceBand === band.id && (
                  <span className="h-2 w-2 rounded-full bg-ink" />
                )}
              </span>
              <input
                id={`price-${band.id}`}
                type="radio"
                name="priceBand"
                checked={filters.priceBand === band.id}
                onChange={() => setField("priceBand", band.id)}
                className="sr-only"
              />
              <span>{band.label}</span>
            </label>
          ))}
        </Group>

        <Group title="Material">
          {materials.map((m) => (
            <CheckRow
              key={m.id}
              id={`mat-${m.id}`}
              label={m.label}
              checked={filters.materials.includes(m.id)}
              onChange={() => toggleMaterial(m.id)}
            />
          ))}
        </Group>

        <button
          type="button"
          onClick={() =>
            onChange({ categories: [], materials: [], priceBand: "all" })
          }
          className="mt-6 text-[10px] uppercase tracking-[0.24em] text-ink/60 underline-offset-4 hover:text-ink hover:underline"
        >
          Clear all
        </button>
      </div>
    </aside>
  )
}

export { priceBands }
