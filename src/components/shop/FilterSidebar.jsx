import { categories, materialFilters, priceFilters } from '@/data/products.js'

const FilterGroup = ({ title, options, value, onChange }) => {
  return (
    <div className="space-y-3 border-b border-hairline-dark pb-6">
      <h3 className="text-sm uppercase tracking-[0.24em] text-foreground">{title}</h3>
      <div className="space-y-3">
        {options.map((option) => {
          const optionValue = typeof option === 'string' ? option : option.value
          const label = typeof option === 'string' ? option : option.label

          return (
            <label key={optionValue} className="flex cursor-pointer items-center gap-3 text-sm text-muted transition hover:text-foreground">
              <input
                type="radio"
                name={title}
                checked={value === optionValue}
                onChange={() => onChange(optionValue)}
                className="h-4 w-4 border-hairline-dark accent-[var(--color-accent)]"
              />
              <span>{label}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

const FilterSidebar = ({ filters, setFilters }) => {
  return (
    <aside className="rounded-[1.8rem] border border-hairline-dark bg-base-muted/70 p-6 text-foreground lg:sticky lg:top-28">
      <div className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Refine</p>
          <h2 className="mt-2 text-3xl">Shop Filters</h2>
        </div>
        <FilterGroup
          title="Category"
          options={categories}
          value={filters.category}
          onChange={(value) => setFilters((current) => ({ ...current, category: value }))}
        />
        <FilterGroup
          title="Price"
          options={priceFilters}
          value={filters.price}
          onChange={(value) => setFilters((current) => ({ ...current, price: value }))}
        />
        <FilterGroup
          title="Material"
          options={materialFilters}
          value={filters.material}
          onChange={(value) => setFilters((current) => ({ ...current, material: value }))}
        />
      </div>
    </aside>
  )
}

export default FilterSidebar
