import { categories, materialFilters } from '@/data/products'

export default function ShopFilters({
  selectedCategory,
  onCategoryChange,
  maxPrice,
  onPriceChange,
  selectedMaterials,
  onMaterialToggle,
}) {
  return (
    <aside className="space-y-8 rounded-3xl border border-champagne bg-surface p-6 shadow-card">
      <div className="space-y-4">
        <h3 className="text-xs uppercase tracking-[0.2em] text-mocha">Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-3 text-sm text-espresso">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category}
                onChange={() => onCategoryChange(category)}
                className="h-4 w-4 border-champagne text-gold focus:ring-gold"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xs uppercase tracking-[0.2em] text-mocha">Price</h3>
          <span className="text-sm text-espresso">Up to ${maxPrice}</span>
        </div>
        <input
          type="range"
          min="30"
          max="120"
          step="5"
          value={maxPrice}
          onChange={(event) => onPriceChange(Number(event.target.value))}
          className="w-full accent-gold"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-xs uppercase tracking-[0.2em] text-mocha">Material</h3>
        <div className="space-y-3">
          {materialFilters.map((material) => (
            <label key={material} className="flex items-center gap-3 text-sm text-espresso">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(material)}
                onChange={() => onMaterialToggle(material)}
                className="h-4 w-4 rounded border-champagne text-gold focus:ring-gold"
              />
              <span>{material}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  )
}
