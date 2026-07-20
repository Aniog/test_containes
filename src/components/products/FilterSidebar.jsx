export default function FilterSidebar({
  categories,
  materials,
  onClear,
  onPriceChange,
  onToggleCategory,
  onToggleMaterial,
  priceFilter,
  selectedCategories,
  selectedMaterials,
}) {
  return (
    <aside className="surface-card p-6 lg:sticky lg:top-24 lg:self-start">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="eyebrow">Refine</p>
          <h2 className="mt-2 font-display text-3xl text-ink">Filters</h2>
        </div>
        <button
          type="button"
          onClick={onClear}
          className="text-sm text-rosewood transition hover:text-ink"
        >
          Clear all
        </button>
      </div>

      <div className="mt-8 space-y-8 text-sm text-ink">
        <section>
          <h3 className="font-medium text-ink">Category</h3>
          <div className="mt-4 space-y-3">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => onToggleCategory(category)}
                  className="h-4 w-4 rounded border-sandDeep text-champagne focus:ring-champagne"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-medium text-ink">Price</h3>
          <div className="mt-4 space-y-3">
            {[
              ['all', 'All prices'],
              ['under-50', 'Under $50'],
              ['50-to-80', '$50 to $80'],
              ['80-plus', '$80+'],
            ].map(([value, label]) => (
              <label key={value} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="price-filter"
                  checked={priceFilter === value}
                  onChange={() => onPriceChange(value)}
                  className="h-4 w-4 border-sandDeep text-champagne focus:ring-champagne"
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-medium text-ink">Material</h3>
          <div className="mt-4 space-y-3">
            {materials.map((material) => (
              <label key={material} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(material)}
                  onChange={() => onToggleMaterial(material)}
                  className="h-4 w-4 rounded border-sandDeep text-champagne focus:ring-champagne"
                />
                <span>{material}</span>
              </label>
            ))}
          </div>
        </section>
      </div>
    </aside>
  )
}
