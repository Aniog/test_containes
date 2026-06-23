function FilterGroup({ label, options, selectedValue, onChange }) {
  return (
    <div className="space-y-4 border-b border-stone-800/80 pb-6">
      <p className="text-xs uppercase tracking-[0.24em] text-stone-200">{label}</p>
      <div className="space-y-3">
        {options.map((option) => (
          <label className="flex items-center justify-between gap-3 text-sm text-stone-300" key={option}>
            <span>{option}</span>
            <input
              checked={selectedValue === option}
              className="h-4 w-4 accent-amber-200"
              name={label}
              onChange={() => onChange(option)}
              type="radio"
            />
          </label>
        ))}
      </div>
    </div>
  )
}

function ShopFilters({
  filterGroups,
  selectedCategory,
  selectedMaterial,
  selectedPrice,
  setSelectedCategory,
  setSelectedMaterial,
  setSelectedPrice,
}) {
  return (
    <aside className="surface-panel h-fit space-y-6 p-6 lg:sticky lg:top-28">
      <div>
        <p className="eyebrow text-amber-200">Filters</p>
        <h2 className="mt-3 font-display text-4xl text-stone-100">Refine your selection</h2>
      </div>

      <FilterGroup
        label="Category"
        onChange={setSelectedCategory}
        options={filterGroups.category}
        selectedValue={selectedCategory}
      />
      <FilterGroup
        label="Price"
        onChange={setSelectedPrice}
        options={filterGroups.price}
        selectedValue={selectedPrice}
      />
      <FilterGroup
        label="Material"
        onChange={setSelectedMaterial}
        options={filterGroups.material}
        selectedValue={selectedMaterial}
      />
    </aside>
  )
}

export default ShopFilters
