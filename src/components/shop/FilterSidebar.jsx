import React from "react"
import { X } from "lucide-react"
import { CATEGORIES, MATERIALS } from "@/data/products"

const PRICE_BUCKETS = [
  { id: "under-50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over-80", label: "Over $80", min: 80.01, max: Infinity },
]

function Checkbox({ checked, onChange, label, id }) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-3 py-1.5 text-[14px] text-espresso transition-colors hover:text-champagne-500"
    >
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center border transition-colors ${
          checked ? "border-espresso bg-espresso" : "border-stone-200 bg-ivory"
        }`}
      >
        {checked && (
          <svg
            className="h-2.5 w-2.5 text-ivory"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="2 6 5 9 10 3" />
          </svg>
        )}
      </span>
      <input
        id={id}
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span>{label}</span>
    </label>
  )
}

export default function FilterSidebar({
  filters,
  onToggleCategory,
  onToggleMaterial,
  onTogglePrice,
  onClear,
  isMobile = false,
  onClose,
}) {
  const activeCount =
    filters.categories.length +
    filters.materials.length +
    filters.prices.length

  return (
    <aside
      className={`bg-ivory-50 ${
        isMobile
          ? "fixed inset-0 z-[55] flex flex-col"
          : "hidden w-full lg:block lg:w-64 lg:shrink-0"
      }`}
      aria-label="Filters"
    >
      {isMobile && (
        <div className="flex items-center justify-between border-b border-sand-200 px-6 py-4">
          <h2 className="font-serif text-2xl text-espresso">Filter</h2>
          <button
            type="button"
            aria-label="Close filters"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center text-espresso focus-ring"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      )}

      <div
        className={`flex-1 overflow-y-auto px-6 py-6 md:px-0 ${
          isMobile ? "" : "lg:sticky lg:top-24"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <h3 className="font-sans text-[11px] font-medium uppercase tracking-widest2 text-stone-300">
            {activeCount > 0
              ? `Filter · ${activeCount} active`
              : "Filter"}
          </h3>
          {activeCount > 0 && (
            <button
              type="button"
              onClick={onClear}
              className="font-sans text-[11px] uppercase tracking-widest2 text-stone-300 underline-offset-4 transition-colors hover:text-espresso hover:underline focus-ring"
            >
              Clear
            </button>
          )}
        </div>

        <div className="mb-8">
          <h4 className="font-sans text-[11px] font-medium uppercase tracking-widest2 text-espresso">
            Category
          </h4>
          <div className="mt-3 flex flex-col">
            {CATEGORIES.map((c) => (
              <Checkbox
                key={c.id}
                id={`filter-cat-${c.id}`}
                label={c.label}
                checked={filters.categories.includes(c.id)}
                onChange={() => onToggleCategory(c.id)}
              />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h4 className="font-sans text-[11px] font-medium uppercase tracking-widest2 text-espresso">
            Material
          </h4>
          <div className="mt-3 flex flex-col">
            {MATERIALS.map((m) => (
              <Checkbox
                key={m.id}
                id={`filter-mat-${m.id}`}
                label={m.label}
                checked={filters.materials.includes(m.id)}
                onChange={() => onToggleMaterial(m.id)}
              />
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-sans text-[11px] font-medium uppercase tracking-widest2 text-espresso">
            Price
          </h4>
          <div className="mt-3 flex flex-col">
            {PRICE_BUCKETS.map((b) => (
              <Checkbox
                key={b.id}
                id={`filter-price-${b.id}`}
                label={b.label}
                checked={filters.prices.includes(b.id)}
                onChange={() => onTogglePrice(b.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export { PRICE_BUCKETS }
