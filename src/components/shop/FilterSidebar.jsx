import { X } from "lucide-react"
import { categories, products } from "@/data/products"
import { cn } from "@/lib/utils"

const priceRanges = [
  { id: "under40", label: "Under $40" },
  { id: "40to60", label: "$40 - $60" },
  { id: "60to100", label: "$60 - $100" },
  { id: "over100", label: "$100+" },
]

const materials = ["Gold", "Silver", "Crystal", "Enamel"]

export default function FilterSidebar({ filters, onChange, isOpen, onClose }) {
  const toggleCategory = (id) => {
    const next = filters.category.includes(id)
      ? filters.category.filter((c) => c !== id)
      : [...filters.category, id]
    onChange({ ...filters, category: next })
  }

  const togglePrice = (id) => {
    const next = filters.price.includes(id)
      ? filters.price.filter((p) => p !== id)
      : [...filters.price, id]
    onChange({ ...filters, price: next })
  }

  const toggleMaterial = (m) => {
    const next = filters.material.includes(m)
      ? filters.material.filter((x) => x !== m)
      : [...filters.material, m]
    onChange({ ...filters, material: next })
  }

  const clearAll = () => {
    onChange({ category: [], price: [], material: [] })
  }

  const activeCount =
    filters.category.length + filters.price.length + filters.material.length

  const panelClasses =
    "fixed inset-y-0 left-0 z-40 w-72 bg-surface border-r border-divider p-6 overflow-y-auto transform transition-transform duration-300 md:relative md:translate-x-0 md:w-64 md:bg-transparent md:border-r md:border-divider md:p-0 md:pr-8"

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-ink/60 z-30 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          panelClasses,
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-8 md:hidden">
          <h3 className="text-xs uppercase tracking-[0.2em] text-cream">
            Filters
          </h3>
          <button onClick={onClose} aria-label="Close filters">
            <X className="w-5 h-5 text-cream" />
          </button>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xs uppercase tracking-[0.2em] text-cream hidden md:block">
            Filters
          </h3>
          {activeCount > 0 && (
            <button
              onClick={clearAll}
              className="text-xs text-cream-muted hover:text-champagne transition-colors"
            >
              Clear all ({activeCount})
            </button>
          )}
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-cream-muted mb-4">
              Category
            </h4>
            <div className="space-y-3">
              {categories.map((c) => (
                <label
                  key={c.id}
                  className="flex items-center gap-3 text-sm text-cream cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.category.includes(c.id)}
                    onChange={() => toggleCategory(c.id)}
                    className="h-4 w-4 border-divider bg-surface-highlight text-champagne rounded-none focus:ring-champagne"
                  />
                  <span className="group-hover:text-champagne transition-colors">
                    {c.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-cream-muted mb-4">
              Price
            </h4>
            <div className="space-y-3">
              {priceRanges.map((range) => (
                <label
                  key={range.id}
                  className="flex items-center gap-3 text-sm text-cream cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.price.includes(range.id)}
                    onChange={() => togglePrice(range.id)}
                    className="h-4 w-4 border-divider bg-surface-highlight text-champagne rounded-none focus:ring-champagne"
                  />
                  <span className="group-hover:text-champagne transition-colors">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-cream-muted mb-4">
              Material
            </h4>
            <div className="space-y-3">
              {materials.map((m) => (
                <label
                  key={m}
                  className="flex items-center gap-3 text-sm text-cream cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.material.includes(m)}
                    onChange={() => toggleMaterial(m)}
                    className="h-4 w-4 border-divider bg-surface-highlight text-champagne rounded-none focus:ring-champagne"
                  />
                  <span className="group-hover:text-champagne transition-colors">
                    {m}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
