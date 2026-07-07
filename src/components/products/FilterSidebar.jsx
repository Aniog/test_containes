import { allMaterialFilters } from '@/data/products'

const priceOptions = [
  { value: 'under-50', label: 'Under $50' },
  { value: '50-80', label: '$50 to $80' },
  { value: '80-plus', label: '$80 and above' },
]

const categoryOptions = ['Earrings', 'Necklaces', 'Huggies']

function CheckboxGroup({ title, options, selectedValues, onToggle }) {
  return (
    <div className="border-b border-stone-200 pb-6 last:border-none last:pb-0">
      <h3 className="text-xs uppercase tracking-[0.34em] text-stone-500">{title}</h3>
      <div className="mt-4 space-y-3">
        {options.map((option) => {
          const value = typeof option === 'string' ? option : option.value
          const label = typeof option === 'string' ? option : option.label
          const checked = selectedValues.includes(value)

          return (
            <label key={value} className="flex items-center gap-3 text-sm text-stone-700">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onToggle(value)}
                className="h-4 w-4 rounded border-stone-300 text-amber-500 focus:ring-amber-500"
              />
              <span>{label}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

function FilterSidebar({ filters, onToggleCategory, onToggleMaterial, onTogglePrice, onClear }) {
  return (
    <aside className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm shadow-stone-950/5">
      <div className="flex items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <p className="text-xs uppercase tracking-[0.34em] text-stone-500">Refine</p>
          <h2 className="mt-2 font-serif-display text-2xl text-stone-950">Filters</h2>
        </div>
        <button
          type="button"
          className="text-xs uppercase tracking-[0.3em] text-stone-500 transition hover:text-stone-900"
          onClick={onClear}
        >
          Clear
        </button>
      </div>

      <div className="mt-6 space-y-6">
        <CheckboxGroup
          title="Category"
          options={categoryOptions}
          selectedValues={filters.categories}
          onToggle={onToggleCategory}
        />
        <CheckboxGroup
          title="Price"
          options={priceOptions}
          selectedValues={filters.prices}
          onToggle={onTogglePrice}
        />
        <CheckboxGroup
          title="Material"
          options={allMaterialFilters}
          selectedValues={filters.materials}
          onToggle={onToggleMaterial}
        />
      </div>
    </aside>
  )
}

export default FilterSidebar
