import { CATEGORIES, MATERIALS } from "@/data/products"
import { formatPrice } from "@/lib/utils"
import { X } from "lucide-react"

const PRICE_BUCKETS = [
  { id: "all",     label: "All Prices", min: 0,    max: Infinity },
  { id: "under50", label: "Under $50",  min: 0,    max: 50 },
  { id: "50-75",   label: "$50 – $75",  min: 50,   max: 75 },
  { id: "over75",  label: "$75+",       min: 75,   max: Infinity },
]

export default function FilterSidebar({
  filters,
  onChange,
  onClear,
  totalCount,
  open,
  onClose,
}) {
  const set = (patch) => onChange({ ...filters, ...patch })

  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-espresso/30 z-40 lg:hidden animate-fade-in"
          onClick={onClose}
          aria-hidden
        />
      )}
      <aside
        className={`
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          fixed lg:static top-0 left-0 bottom-0 z-50 w-[85%] max-w-sm lg:w-auto lg:max-w-none
          bg-cream lg:bg-transparent
          transition-transform duration-500 ease-editorial
          lg:transition-none
          overflow-y-auto
        `}
      >
        <div className="lg:sticky lg:top-32 p-6 lg:p-0">
          <div className="flex items-center justify-between mb-7">
            <h3 className="text-[12px] uppercase tracking-wider-3 font-medium text-espresso">
              Filter
            </h3>
            <div className="flex items-center gap-4">
              {totalCount != null && (
                <span className="text-[11px] uppercase tracking-wider-2 text-mocha-400">
                  {totalCount} {totalCount === 1 ? "piece" : "pieces"}
                </span>
              )}
              <button
                onClick={onClear}
                className="text-[11px] uppercase tracking-wider-2 text-mocha-400 hover:text-gold-600 transition-colors"
              >
                Clear
              </button>
              <button
                onClick={onClose}
                className="lg:hidden p-1 -mr-1 text-espresso"
                aria-label="Close filters"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Category */}
          <FilterGroup title="Category">
            <ul className="space-y-2.5">
              <li>
                <FilterRadio
                  checked={filters.category === "all"}
                  onChange={() => set({ category: "all" })}
                  label="All"
                />
              </li>
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <FilterRadio
                    checked={filters.category === c.id}
                    onChange={() => set({ category: c.id })}
                    label={c.label}
                  />
                </li>
              ))}
            </ul>
          </FilterGroup>

          {/* Material */}
          <FilterGroup title="Material">
            <ul className="space-y-2.5">
              <li>
                <FilterRadio
                  checked={filters.material === "all"}
                  onChange={() => set({ material: "all" })}
                  label="All Materials"
                />
              </li>
              {MATERIALS.map((m) => (
                <li key={m.id}>
                  <FilterRadio
                    checked={filters.material === m.id}
                    onChange={() => set({ material: m.id })}
                    label={m.label}
                  />
                </li>
              ))}
            </ul>
          </FilterGroup>

          {/* Price */}
          <FilterGroup title="Price">
            <ul className="space-y-2.5">
              {PRICE_BUCKETS.map((b) => (
                <li key={b.id}>
                  <FilterRadio
                    checked={filters.price === b.id}
                    onChange={() => set({ price: b.id })}
                    label={b.label}
                  />
                </li>
              ))}
            </ul>
          </FilterGroup>
        </div>
      </aside>
    </>
  )
}

function FilterGroup({ title, children }) {
  return (
    <div className="mb-7 pb-7 border-b border-taupe-300/60 last:border-b-0">
      <h4 className="text-[11px] uppercase tracking-wider-3 font-medium text-mocha-400 mb-4">
        {title}
      </h4>
      {children}
    </div>
  )
}

function FilterRadio({ checked, onChange, label }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={`
          w-4 h-4 grid place-items-center border transition-colors duration-300
          ${checked ? "border-gold-500" : "border-mocha-300 group-hover:border-gold-500"}
        `}
      >
        {checked && <span className="w-2 h-2 bg-gold-500" />}
      </span>
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        className={`text-[13px] transition-colors ${
          checked ? "text-espresso" : "text-mocha-500 group-hover:text-espresso"
        }`}
      >
        {label}
      </span>
    </label>
  )
}

export { PRICE_BUCKETS }
