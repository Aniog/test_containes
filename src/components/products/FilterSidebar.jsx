const priceOptions = [
  { label: 'All prices', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50 to $80', value: '50-80' },
  { label: '$80 and above', value: '80-plus' },
]

const FilterSidebar = ({
  categories,
  materials,
  selectedCategories,
  selectedMaterials,
  selectedPrice,
  onCategoryToggle,
  onMaterialToggle,
  onPriceChange,
  onReset,
}) => (
  <aside className="rounded-[2rem] border border-velmora-line bg-white p-6 shadow-soft">
    <div className="flex items-center justify-between gap-4 border-b border-velmora-line pb-5">
      <div>
        <p className="eyebrow text-velmora-muted">Refine your edit</p>
        <h2 className="mt-2 font-display text-3xl text-velmora-ink">Filters</h2>
      </div>
      <button
        type="button"
        className="text-xs font-medium uppercase tracking-eyebrow text-velmora-muted transition duration-300 hover:text-velmora-gold"
        onClick={onReset}
      >
        Reset
      </button>
    </div>

    <div className="space-y-8 pt-6">
      <div className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-eyebrow text-velmora-ink">Category</p>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category} className="flex items-center justify-between gap-3 text-sm text-velmora-muted">
              <span>{category}</span>
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-velmora-line text-velmora-gold focus:ring-velmora-gold"
                checked={selectedCategories.includes(category)}
                onChange={() => onCategoryToggle(category)}
              />
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-eyebrow text-velmora-ink">Price</p>
        <div className="space-y-3">
          {priceOptions.map((option) => (
            <label key={option.value} className="flex items-center gap-3 text-sm text-velmora-muted">
              <input
                type="radio"
                name="price-range"
                className="h-4 w-4 border-velmora-line text-velmora-gold focus:ring-velmora-gold"
                checked={selectedPrice === option.value}
                onChange={() => onPriceChange(option.value)}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-eyebrow text-velmora-ink">Material</p>
        <div className="space-y-3">
          {materials.map((material) => (
            <label key={material} className="flex items-center justify-between gap-3 text-sm text-velmora-muted">
              <span>{material}</span>
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-velmora-line text-velmora-gold focus:ring-velmora-gold"
                checked={selectedMaterials.includes(material)}
                onChange={() => onMaterialToggle(material)}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  </aside>
)

export default FilterSidebar
