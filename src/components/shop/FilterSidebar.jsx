const FilterSidebar = ({
  categories,
  materials,
  selectedCategory,
  setSelectedCategory,
  selectedMaterial,
  setSelectedMaterial,
  priceCap,
  setPriceCap,
}) => (
  <aside className="space-y-8 rounded-[2rem] border border-velvet-200/70 bg-cream-100 p-6 shadow-editorial text-velvet-900">
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.35em] text-velvet-700">Category</p>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] transition ${
              selectedCategory === category
                ? 'border-velvet-950 bg-velvet-950 text-cream-50'
                : 'border-velvet-200 bg-cream-50 text-velvet-700 hover:border-gold-400 hover:text-gold-500'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>

    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.35em] text-velvet-700">Price</p>
      <input
        type="range"
        min="30"
        max="120"
        step="5"
        value={priceCap}
        onChange={(event) => setPriceCap(Number(event.target.value))}
        className="w-full accent-gold-500"
      />
      <p className="text-sm text-velvet-700">Up to ${priceCap}</p>
    </div>

    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.35em] text-velvet-700">Material</p>
      <div className="space-y-2">
        {['All', ...materials].map((material) => (
          <label key={material} className="flex items-center gap-3 text-sm text-velvet-800">
            <input
              type="radio"
              name="material"
              value={material}
              checked={selectedMaterial === material}
              onChange={() => setSelectedMaterial(material)}
              className="h-4 w-4 border-velvet-300 text-gold-500 focus:ring-gold-400"
            />
            {material}
          </label>
        ))}
      </div>
    </div>
  </aside>
)

export default FilterSidebar
