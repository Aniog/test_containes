function FilterSidebar({
  categories,
  materials,
  priceFilters,
  selectedCategories,
  selectedMaterials,
  priceRange,
  onCategoryToggle,
  onMaterialToggle,
  onPriceChange,
  onClear,
}) {
  const sections = [
    {
      title: 'Category',
      items: categories,
      selected: selectedCategories,
      onToggle: onCategoryToggle,
      type: 'checkbox',
    },
    {
      title: 'Material',
      items: materials,
      selected: selectedMaterials,
      onToggle: onMaterialToggle,
      type: 'checkbox',
    },
  ]

  return (
    <div className="rounded-[2rem] border border-mist/70 bg-ivory p-6 shadow-card">
      <div className="mb-6 flex items-center justify-between border-b border-mist/70 pb-4">
        <div>
          <p className="text-xs uppercase tracking-luxe text-champagne">Refine</p>
          <h2 className="text-2xl">Filters</h2>
        </div>
        <button
          type="button"
          onClick={onClear}
          className="text-xs uppercase tracking-[0.22em] text-ink/55 transition hover:text-champagne"
        >
          Clear
        </button>
      </div>

      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.title} className="space-y-3 border-b border-mist/70 pb-6 last:border-0 last:pb-0">
            <h3 className="text-sm uppercase tracking-[0.22em] text-ink/70">{section.title}</h3>
            <div className="space-y-3">
              {section.items.map((item) => {
                const checked = section.selected.includes(item)

                return (
                  <label key={item} className="flex items-center gap-3 text-sm text-ink/74">
                    <input
                      type={section.type}
                      checked={checked}
                      onChange={() => section.onToggle(item)}
                      className="h-4 w-4 rounded border-mist text-champagne focus:ring-champagne"
                    />
                    <span>{item}</span>
                  </label>
                )
              })}
            </div>
          </div>
        ))}

        <div className="space-y-3">
          <h3 className="text-sm uppercase tracking-[0.22em] text-ink/70">Price</h3>
          <div className="space-y-3">
            {priceFilters.map((option) => (
              <label key={option.value} className="flex items-center gap-3 text-sm text-ink/74">
                <input
                  type="radio"
                  name="price-range"
                  checked={priceRange === option.value}
                  onChange={() => onPriceChange(option.value)}
                  className="h-4 w-4 border-mist text-champagne focus:ring-champagne"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar
