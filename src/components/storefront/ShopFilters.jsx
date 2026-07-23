import { categories, priceFilters } from '../../data/storefront.js'

const materials = ['18K Gold Plated', 'Crystal Accent', 'Textured Gold', 'Gift Set']

export default function ShopFilters({ selectedCategory, selectedPrice, selectedMaterials, onCategoryChange, onPriceChange, onMaterialToggle }) {
  return (
    <aside id="filters" className="rounded-[1.8rem] border border-stone-200 bg-[var(--velmora-cream)] p-6 shadow-soft">
      <div className="space-y-8 text-[var(--velmora-ink)]">
        <div>
          <h2 className="text-lg uppercase tracking-[0.2em] text-[var(--velmora-ink)]">Filter</h2>
          <p className="mt-2 text-sm leading-6 text-stone-600">Narrow the edit by category, price, and finish.</p>
        </div>

        <div className="space-y-4 border-t border-stone-200 pt-6">
          <h3 className="text-sm uppercase tracking-[0.2em] text-stone-500">Category</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 text-sm text-stone-700">
              <input checked={selectedCategory === 'All'} className="accent-[var(--velmora-ink)]" name="category" type="radio" onChange={() => onCategoryChange('All')} />
              All pieces
            </label>
            {categories.map((category) => (
              <label key={category.id} className="flex items-center gap-3 text-sm text-stone-700">
                <input
                  checked={selectedCategory === category.name}
                  className="accent-[var(--velmora-ink)]"
                  name="category"
                  type="radio"
                  onChange={() => onCategoryChange(category.name)}
                />
                {category.name}
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-4 border-t border-stone-200 pt-6">
          <h3 className="text-sm uppercase tracking-[0.2em] text-stone-500">Price</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 text-sm text-stone-700">
              <input checked={selectedPrice === 'all'} className="accent-[var(--velmora-ink)]" name="price" type="radio" onChange={() => onPriceChange('all')} />
              All prices
            </label>
            {priceFilters.map((range) => (
              <label key={range.id} className="flex items-center gap-3 text-sm text-stone-700">
                <input
                  checked={selectedPrice === range.id}
                  className="accent-[var(--velmora-ink)]"
                  name="price"
                  type="radio"
                  onChange={() => onPriceChange(range.id)}
                />
                {range.label}
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-4 border-t border-stone-200 pt-6">
          <h3 className="text-sm uppercase tracking-[0.2em] text-stone-500">Material</h3>
          <div className="space-y-3">
            {materials.map((material) => (
              <label key={material} className="flex items-center gap-3 text-sm text-stone-700">
                <input
                  checked={selectedMaterials.includes(material)}
                  className="accent-[var(--velmora-ink)]"
                  type="checkbox"
                  onChange={() => onMaterialToggle(material)}
                />
                {material}
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
