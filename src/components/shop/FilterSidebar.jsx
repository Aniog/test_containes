import { categories, materialFilters, priceFilters } from '@/data/storeData'

const FilterSidebar = ({ filters, setFilters }) => {
  const toggleValue = (key, value) => {
    setFilters((current) => ({
      ...current,
      [key]: current[key] === value ? 'all' : value,
    }))
  }

  return (
    <aside className="space-y-8 rounded-[2rem] border border-stone-300/70 bg-stone-100/70 p-5 text-stone-900">
      <div>
        <h3 className="text-xs uppercase tracking-[0.35em] text-stone-500">Category</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => toggleValue('category', category.id)}
              className={`rounded-full border px-4 py-2 text-sm transition ${filters.category === category.id ? 'border-amber-700 bg-amber-700 text-stone-50' : 'border-stone-300 bg-stone-50 text-stone-900 hover:bg-stone-200'}`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-[0.35em] text-stone-500">Price</h3>
        <div className="mt-4 space-y-2">
          {priceFilters.map((range) => (
            <button
              key={range.id}
              type="button"
              onClick={() => toggleValue('price', range.id)}
              className={`block w-full rounded-full border px-4 py-2 text-left text-sm transition ${filters.price === range.id ? 'border-amber-700 bg-amber-700 text-stone-50' : 'border-stone-300 bg-stone-50 text-stone-900 hover:bg-stone-200'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-[0.35em] text-stone-500">Material</h3>
        <div className="mt-4 space-y-2">
          {materialFilters.map((material) => (
            <button
              key={material}
              type="button"
              onClick={() => toggleValue('material', material)}
              className={`block w-full rounded-full border px-4 py-2 text-left text-sm transition ${filters.material === material ? 'border-amber-700 bg-amber-700 text-stone-50' : 'border-stone-300 bg-stone-50 text-stone-900 hover:bg-stone-200'}`}
            >
              {material}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default FilterSidebar
