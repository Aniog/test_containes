const priceOptions = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-80', label: '$50 to $80' },
  { value: '80-120', label: '$80 to $120' },
]

function FilterSidebar({
  categories,
  materials,
  selectedCategories,
  selectedMaterials,
  selectedPrice,
  onCategoryToggle,
  onMaterialToggle,
  onPriceChange,
  onClear,
}) {
  return (
    <aside className="rounded-[2rem] border border-mist bg-glow p-6 shadow-whisper">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-editorial text-truffle">Curate</p>
          <h2 className="mt-2 font-display text-3xl text-ink">Filters</h2>
        </div>
        <button
          type="button"
          onClick={onClear}
          className="text-xs uppercase tracking-editorial text-truffle transition-colors duration-300 ease-editorial hover:text-ink"
        >
          Clear
        </button>
      </div>

      <div className="mt-8 space-y-8">
        <div>
          <h3 className="text-sm font-medium uppercase tracking-editorial text-ink">Category</h3>
          <div className="mt-4 space-y-3">
            {categories.map((category) => (
              <label key={category} className="flex items-center justify-between gap-3 text-sm text-truffle">
                <span>{category}</span>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => onCategoryToggle(category)}
                  className="h-4 w-4 rounded border-mist text-champagne focus:ring-champagne"
                />
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium uppercase tracking-editorial text-ink">Price</h3>
          <div className="mt-4 space-y-3">
            {priceOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-3 text-sm text-truffle">
                <input
                  type="radio"
                  name="price"
                  value={option.value}
                  checked={selectedPrice === option.value}
                  onChange={() => onPriceChange(option.value)}
                  className="h-4 w-4 border-mist text-champagne focus:ring-champagne"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium uppercase tracking-editorial text-ink">Material</h3>
          <div className="mt-4 space-y-3">
            {materials.map((material) => (
              <label key={material} className="flex items-center justify-between gap-3 text-sm text-truffle">
                <span>{material}</span>
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(material)}
                  onChange={() => onMaterialToggle(material)}
                  className="h-4 w-4 rounded border-mist text-champagne focus:ring-champagne"
                />
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default FilterSidebar
