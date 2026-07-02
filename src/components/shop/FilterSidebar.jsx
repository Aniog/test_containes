import { SlidersHorizontal } from 'lucide-react'
import { categoryFilters, categoryLabels, materialFilters, priceFilters } from '@/data/products'

function FilterGroup({ title, children }) {
  return (
    <div className="space-y-4 border-b border-stone-200 pb-6 last:border-b-0 last:pb-0">
      <h3 className="text-xs uppercase tracking-[0.3em] text-stone-500">{title}</h3>
      {children}
    </div>
  )
}

export default function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedPrice,
  setSelectedPrice,
  selectedMaterial,
  setSelectedMaterial,
  sort,
  setSort,
}) {
  return (
    <aside className="space-y-6 rounded-[1.75rem] border border-stone-200 bg-stone-50 p-5 text-stone-900 shadow-[0_16px_50px_-38px_rgba(28,25,23,0.4)] lg:sticky lg:top-28">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Refine</p>
          <h2 className="mt-2 font-display text-2xl text-stone-950">Shop Filters</h2>
        </div>
        <SlidersHorizontal className="h-5 w-5 text-stone-500" />
      </div>

      <FilterGroup title="Sort">
        <select
          className="w-full rounded-full border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-900"
          value={sort}
          onChange={(event) => setSort(event.target.value)}
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Top Rated</option>
        </select>
      </FilterGroup>

      <FilterGroup title="Category">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition ${
              selectedCategory === 'all'
                ? 'border-stone-900 bg-stone-900 text-stone-50'
                : 'border-stone-300 bg-white text-stone-700 hover:border-stone-900 hover:text-stone-950'
            }`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          {categoryFilters.map((category) => (
            <button
              key={category}
              type="button"
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition ${
                selectedCategory === category
                  ? 'border-stone-900 bg-stone-900 text-stone-50'
                  : 'border-stone-300 bg-white text-stone-700 hover:border-stone-900 hover:text-stone-950'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Price">
        <div className="space-y-2">
          {priceFilters.map((filter) => (
            <label
              key={filter.id}
              className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 transition hover:border-stone-400"
            >
              <span>{filter.label}</span>
              <input
                checked={selectedPrice === filter.id}
                className="h-4 w-4 accent-stone-900"
                name="price-filter"
                type="radio"
                onChange={() => setSelectedPrice(filter.id)}
              />
            </label>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Material">
        <div className="space-y-2">
          <button
            type="button"
            className={`w-full rounded-2xl border px-4 py-3 text-left text-sm transition ${
              selectedMaterial === 'all'
                ? 'border-stone-900 bg-stone-900 text-stone-50'
                : 'border-stone-200 bg-white text-stone-700 hover:border-stone-500'
            }`}
            onClick={() => setSelectedMaterial('all')}
          >
            All Materials
          </button>
          {materialFilters.map((material) => (
            <button
              key={material}
              type="button"
              className={`w-full rounded-2xl border px-4 py-3 text-left text-sm transition ${
                selectedMaterial === material
                  ? 'border-stone-900 bg-stone-900 text-stone-50'
                  : 'border-stone-200 bg-white text-stone-700 hover:border-stone-500'
              }`}
              onClick={() => setSelectedMaterial(material)}
            >
              {material}
            </button>
          ))}
        </div>
      </FilterGroup>
    </aside>
  )
}
