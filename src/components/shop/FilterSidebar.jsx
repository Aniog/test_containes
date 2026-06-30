function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-velmora-line pb-6">
      <h3 className="text-xs uppercase tracking-[0.35em] text-velmora-bronze">
        {title}
      </h3>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  )
}

export default function FilterSidebar({
  categoryOptions,
  materialOptions,
  priceOptions,
  selectedCategories,
  selectedMaterials,
  selectedPrice,
  onCategoryToggle,
  onMaterialToggle,
  onPriceChange,
  onClearFilters,
}) {
  return (
    <aside className="lg:sticky lg:top-28 lg:h-fit lg:w-72">
      <div className="rounded-[2rem] border border-velmora-line bg-velmora-ivory p-6 text-velmora-ink shadow-velmora-sm">
        <div className="flex items-center justify-between gap-4 border-b border-velmora-line pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-velmora-bronze">
              Filters
            </p>
            <h2 className="mt-2 font-serif text-3xl text-velmora-espresso">
              Refine the edit
            </h2>
          </div>
          <button
            type="button"
            onClick={onClearFilters}
            className="text-xs uppercase tracking-[0.28em] text-velmora-ink/55 transition hover:text-velmora-espresso"
          >
            Clear
          </button>
        </div>

        <div className="mt-6 space-y-6">
          <FilterGroup title="Category">
            {categoryOptions.map((option) => (
              <label key={option} className="flex items-center gap-3 text-sm text-velmora-ink/80">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(option)}
                  onChange={() => onCategoryToggle(option)}
                  className="h-4 w-4 rounded border-velmora-line text-velmora-bronze focus:ring-velmora-bronze"
                />
                {option}
              </label>
            ))}
          </FilterGroup>

          <FilterGroup title="Price">
            {priceOptions.map((option) => (
              <label key={option.id} className="flex items-center gap-3 text-sm text-velmora-ink/80">
                <input
                  type="radio"
                  name="price"
                  checked={selectedPrice === option.id}
                  onChange={() => onPriceChange(option.id)}
                  className="h-4 w-4 border-velmora-line text-velmora-bronze focus:ring-velmora-bronze"
                />
                {option.label}
              </label>
            ))}
          </FilterGroup>

          <FilterGroup title="Material">
            {materialOptions.map((option) => (
              <label key={option} className="flex items-center gap-3 text-sm text-velmora-ink/80">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(option)}
                  onChange={() => onMaterialToggle(option)}
                  className="h-4 w-4 rounded border-velmora-line text-velmora-bronze focus:ring-velmora-bronze"
                />
                {option}
              </label>
            ))}
          </FilterGroup>
        </div>
      </div>
    </aside>
  )
}
