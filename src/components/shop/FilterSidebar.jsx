const FilterSidebar = ({ filters, selected, onChange }) => {
  return (
    <aside className="space-y-8 rounded-[2rem] border border-truffle/10 bg-white p-6 shadow-card">
      <div className="space-y-3">
        <h2 className="text-xs uppercase tracking-[0.24em] text-champagne">Category</h2>
        {filters.categories.map((category) => (
          <label key={category} className="flex items-center justify-between gap-3 text-sm text-velvet">
            <span>{category}</span>
            <input
              checked={selected.category === category}
              className="h-4 w-4 accent-champagne"
              name="category"
              type="radio"
              onChange={() => onChange('category', category)}
            />
          </label>
        ))}
      </div>

      <div className="space-y-3">
        <h2 className="text-xs uppercase tracking-[0.24em] text-champagne">Price</h2>
        {filters.priceRanges.map((priceRange) => (
          <label key={priceRange} className="flex items-center justify-between gap-3 text-sm text-velvet">
            <span>{priceRange}</span>
            <input
              checked={selected.priceRange === priceRange}
              className="h-4 w-4 accent-champagne"
              name="priceRange"
              type="radio"
              onChange={() => onChange('priceRange', priceRange)}
            />
          </label>
        ))}
      </div>

      <div className="space-y-3">
        <h2 className="text-xs uppercase tracking-[0.24em] text-champagne">Material</h2>
        {filters.materials.map((material) => (
          <label key={material} className="flex items-center justify-between gap-3 text-sm text-velvet">
            <span>{material}</span>
            <input
              checked={selected.material === material}
              className="h-4 w-4 accent-champagne"
              name="material"
              type="radio"
              onChange={() => onChange('material', material)}
            />
          </label>
        ))}
      </div>
    </aside>
  )
}

export default FilterSidebar
