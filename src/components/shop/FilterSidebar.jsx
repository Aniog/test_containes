import { useState } from "react"
import { ChevronDown, X } from "lucide-react"
import { CATEGORIES, MATERIALS } from "@/data/products"
import { cn } from "@/lib/utils"

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "newest", label: "Newest" },
  { id: "rating", label: "Top Rated" },
]

const PRICE_BANDS = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "over-75", label: "$75 & above", min: 75, max: Infinity },
]

export default function FilterSidebar({
  filters,
  onChange,
  onClear,
  sort,
  onSortChange,
  resultCount,
}) {
  const { category, material, price } = filters

  return (
    <aside className="w-full">
      {/* Mobile / tablet: results + sort bar */}
      <div className="mb-6 flex items-center justify-between border-y border-hairline py-4 md:hidden">
        <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-inkSoft">
          {resultCount} {resultCount === 1 ? "piece" : "pieces"}
        </p>
        <SortDropdown value={sort} onChange={onSortChange} options={SORTS} />
      </div>

      <div className="space-y-10">
        <FilterGroup label="Category">
          <ul className="space-y-3">
            <li>
              <FilterOption
                checked={category === "all"}
                onChange={() => onChange({ ...filters, category: "all" })}
                label="All Jewelry"
              />
            </li>
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <FilterOption
                  checked={category === c.id}
                  onChange={() => onChange({ ...filters, category: c.id })}
                  label={c.label}
                />
              </li>
            ))}
          </ul>
        </FilterGroup>

        <FilterGroup label="Price">
          <ul className="space-y-3">
            {PRICE_BANDS.map((band) => (
              <li key={band.id}>
                <FilterOption
                  checked={price === band.id}
                  onChange={() => onChange({ ...filters, price: band.id })}
                  label={band.label}
                />
              </li>
            ))}
          </ul>
        </FilterGroup>

        <FilterGroup label="Material">
          <ul className="space-y-3">
            <li>
              <FilterOption
                checked={material === "all"}
                onChange={() => onChange({ ...filters, material: "all" })}
                label="All Materials"
              />
            </li>
            {MATERIALS.map((m) => (
              <li key={m.id}>
                <FilterOption
                  checked={material === m.id}
                  onChange={() => onChange({ ...filters, material: m.id })}
                  label={m.label}
                />
              </li>
            ))}
          </ul>
        </FilterGroup>

        <button
          type="button"
          onClick={onClear}
          className="text-[11px] font-semibold uppercase tracking-[0.22em] text-inkSoft underline-offset-4 hover:text-ink hover:underline"
        >
          Clear all filters
        </button>
      </div>
    </aside>
  )
}

function FilterGroup({ label, children }) {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between text-[11px] font-semibold uppercase tracking-[0.24em] text-ink"
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-300",
            open ? "rotate-180" : "rotate-0",
          )}
          strokeWidth={1.4}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-editorial",
          open ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  )
}

function FilterOption({ checked, onChange, label }) {
  return (
    <label className="group flex cursor-pointer items-center gap-3 text-sm font-light text-inkSoft transition-colors hover:text-ink">
      <span
        className={cn(
          "flex h-4 w-4 flex-shrink-0 items-center justify-center border transition-colors",
          checked
            ? "border-ink bg-ink"
            : "border-hairline group-hover:border-ink",
        )}
      >
        {checked && (
          <span className="block h-1.5 w-1.5 rounded-full bg-canvas" />
        )}
      </span>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
      <span className={cn(checked && "text-ink")}>{label}</span>
    </label>
  )
}

export function SortDropdown({ value, onChange, options }) {
  const [open, setOpen] = useState(false)
  const current = options.find((o) => o.id === value) || options[0]

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        onBlur={() => setTimeout(() => setOpen(false), 100)}
        className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-ink"
      >
        Sort · {current.label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-300",
            open && "rotate-180",
          )}
          strokeWidth={1.4}
        />
      </button>
      {open && (
        <div className="absolute right-0 z-20 mt-3 w-56 border border-hairline bg-elevated shadow-soft">
          <ul>
            {options.map((o) => (
              <li key={o.id}>
                <button
                  type="button"
                  onMouseDown={() => {
                    onChange(o.id)
                    setOpen(false)
                  }}
                  className={cn(
                    "block w-full px-5 py-3 text-left text-[12px] font-medium uppercase tracking-[0.18em] transition-colors duration-200",
                    o.id === value
                      ? "bg-ink text-onNight"
                      : "text-ink hover:bg-surface",
                  )}
                >
                  {o.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
