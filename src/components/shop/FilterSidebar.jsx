import { materialOptions, priceOptions } from '@/data/store.js'

function FilterSidebar({
  categories,
  selectedCategories,
  onCategoryToggle,
  selectedPrice,
  onPriceChange,
  selectedMaterials,
  onMaterialToggle,
}) {
  return (
    <aside className="rounded-[2rem] border border-velmora-ink/10 bg-velmora-pearl p-6 shadow-card">
      <div>
        <p className="velmora-eyebrow">Filter</p>
        <h2 className="mt-3 font-display text-4xl text-velmora-ink">Refine your edit</h2>
      </div>

      <div className="mt-8 space-y-8">
        <section>
          <h3 className="text-sm uppercase tracking-[0.22em] text-velmora-ink">Category</h3>
          <div className="mt-4 space-y-3">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-3 text-sm text-velmora-truffle">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-velmora-ink/20 accent-velmora-ink"
                  checked={selectedCategories.includes(category)}
                  onChange={() => onCategoryToggle(category)}
                />
                {category}
              </label>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm uppercase tracking-[0.22em] text-velmora-ink">Price</h3>
          <div className="mt-4 space-y-3">
            {priceOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-3 text-sm text-velmora-truffle">
                <input
                  type="radio"
                  name="price"
                  className="h-4 w-4 accent-velmora-ink"
                  checked={selectedPrice === option.value}
                  onChange={() => onPriceChange(option.value)}
                />
                {option.label}
              </label>
            ))}
            <button
              type="button"
              className="text-xs uppercase tracking-[0.22em] text-velmora-gold"
              onClick={() => onPriceChange('all')}
            >
              Reset price
            </button>
          </div>
        </section>

        <section>
          <h3 className="text-sm uppercase tracking-[0.22em] text-velmora-ink">Material</h3>
          <div className="mt-4 space-y-3">
            {materialOptions.map((material) => (
              <label key={material} className="flex items-center gap-3 text-sm text-velmora-truffle">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-velmora-ink/20 accent-velmora-ink"
                  checked={selectedMaterials.includes(material)}
                  onChange={() => onMaterialToggle(material)}
                />
                {material}
              </label>
            ))}
          </div>
        </section>
      </div>
    </aside>
  )
}

export default FilterSidebar
