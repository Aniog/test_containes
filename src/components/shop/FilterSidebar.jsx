const FilterSidebar = ({ filters, setFilters, categories, materials }) => {
  const toggleValue = (key, value) => {
    setFilters((current) => {
      const currentValues = current[key]
      const nextValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value]

      return { ...current, [key]: nextValues }
    })
  }

  return (
    <aside className="rounded-[2rem] border border-stone-200 bg-white p-6 text-stone-900 shadow-sm">
      <div className="flex items-center justify-between border-b border-stone-200 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.34em] text-stone-500">Filters</p>
          <h2 className="mt-2 font-['Cormorant_Garamond'] text-3xl text-stone-950">
            Refine the selection
          </h2>
        </div>
        <button
          className="text-xs uppercase tracking-[0.3em] text-stone-500 transition duration-300 hover:text-stone-900"
          type="button"
          onClick={() =>
            setFilters({ category: [], material: [], price: ['Under $50', '$50-$80', '$80+'] })
          }
        >
          Reset
        </button>
      </div>

      <div className="mt-6 space-y-8">
        <div>
          <h3 className="text-sm uppercase tracking-[0.28em] text-stone-500">Category</h3>
          <div className="mt-4 space-y-3 text-sm text-stone-700">
            {categories.map((category) => (
              <label key={category} className="flex items-center justify-between gap-3">
                <span>{category}</span>
                <input
                  checked={filters.category.includes(category)}
                  className="h-4 w-4 rounded border-stone-300 text-stone-950 focus:ring-stone-950"
                  type="checkbox"
                  onChange={() => toggleValue('category', category)}
                />
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.28em] text-stone-500">Price</h3>
          <div className="mt-4 space-y-3 text-sm text-stone-700">
            {['Under $50', '$50-$80', '$80+'].map((range) => (
              <label key={range} className="flex items-center justify-between gap-3">
                <span>{range}</span>
                <input
                  checked={filters.price.includes(range)}
                  className="h-4 w-4 rounded border-stone-300 text-stone-950 focus:ring-stone-950"
                  type="checkbox"
                  onChange={() => toggleValue('price', range)}
                />
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.28em] text-stone-500">Material</h3>
          <div className="mt-4 space-y-3 text-sm text-stone-700">
            {materials.map((material) => (
              <label key={material} className="flex items-center justify-between gap-3">
                <span>{material}</span>
                <input
                  checked={filters.material.includes(material)}
                  className="h-4 w-4 rounded border-stone-300 text-stone-950 focus:ring-stone-950"
                  type="checkbox"
                  onChange={() => toggleValue('material', material)}
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
