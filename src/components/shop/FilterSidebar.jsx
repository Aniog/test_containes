import { X } from 'lucide-react'

const CATEGORIES = ['Earrings', 'Necklaces', 'Huggies', 'Sets']

const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
]

const MATERIALS = ['18K Gold Plated', 'Sterling Silver', 'Gold Vermeil']

export default function FilterSidebar({
  filters,
  onChange,
  isMobileOpen,
  onClose,
}) {
  const toggleArray = (key, value) => {
    const current = filters[key]
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value]
    onChange({ ...filters, [key]: next })
  }

  const clearAll = () =>
    onChange({ category: [], price: [], material: [] })

  const hasFilters =
    filters.category.length > 0 ||
    filters.price.length > 0 ||
    filters.material.length > 0

  const FilterGroup = ({ title, options, filterKey, labels }) => (
    <div className="mb-8">
      <h4 className="text-xs font-sans uppercase tracking-ui text-espresso font-medium mb-3">
        {title}
      </h4>
      <div className="space-y-2">
        {options.map((option) => {
          const label = labels ? labels.find((l) => l.value === option)?.label : option
          const isSelected = filters[filterKey].includes(option)
          return (
            <label
              key={String(option)}
              className="flex items-center gap-2.5 text-sm font-light text-taupe cursor-pointer hover:text-espresso transition-colors"
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => toggleArray(filterKey, option)}
                className="w-4 h-4 border-warm-gray text-espresso bg-ivory checked:bg-espresso checked:border-espresso focus:ring-gold focus:ring-offset-0 rounded-none"
              />
              {label}
            </label>
          )
        })}
      </div>
    </div>
  )

  const SidebarContent = () => (
    <div className="p-6 md:p-0">
      <div className="flex items-center justify-between mb-6 md:hidden">
        <h3 className="text-sm font-sans uppercase tracking-ui text-espresso font-medium">
          Filters
        </h3>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close filters"
          className="p-1 text-espresso"
        >
          <X size={20} strokeWidth={1.5} />
        </button>
      </div>

      {hasFilters && (
        <button
          type="button"
          onClick={clearAll}
          className="mb-6 text-xs font-sans uppercase tracking-ui text-taupe border-b border-taupe pb-0.5 hover:text-espresso hover:border-espresso transition-colors"
        >
          Clear All
        </button>
      )}

      <FilterGroup title="Category" options={CATEGORIES} filterKey="category" />
      <FilterGroup
        title="Price"
        options={PRICE_RANGES.map((r) => `${r.min}-${r.max}`)}
        filterKey="price"
        labels={PRICE_RANGES.map((r) => ({
          value: `${r.min}-${r.max}`,
          label: r.label,
        }))}
      />
      <FilterGroup
        title="Material"
        options={MATERIALS}
        filterKey="material"
      />
    </div>
  )

  return (
    <>
      <aside className="hidden md:block w-64 flex-shrink-0 pr-8">
        <h3 className="text-sm font-sans uppercase tracking-ui text-espresso font-medium mb-6">
          Filters
        </h3>
        <SidebarContent />
      </aside>

      {isMobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-espresso/40"
            onClick={onClose}
            aria-hidden="true"
          />
          <div className="absolute top-0 left-0 h-full w-[300px] bg-cream shadow-xl overflow-y-auto">
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  )
}
