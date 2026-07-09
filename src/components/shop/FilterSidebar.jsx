const FilterSidebar = ({ filters, setFilters }) => {
  const toggleValue = (field, value) => {
    setFilters((current) => ({
      ...current,
      [field]: current[field] === value ? 'All' : value,
    }))
  }

  const filterGroups = [
    {
      title: 'Category',
      field: 'category',
      options: ['Earrings', 'Necklaces', 'Huggies'],
    },
    {
      title: 'Price',
      field: 'price',
      options: ['Under $50', '$50 - $80', '$80+'],
    },
    {
      title: 'Material',
      field: 'material',
      options: ['18K Gold Plated', 'Crystal Accent', 'Gift Set', 'Gold-Plated Filigree'],
    },
  ]

  return (
    <aside className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6 shadow-xl shadow-stone-900/5">
      <div className="flex items-center justify-between border-b border-stone-200 pb-4">
        <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
          Filters
        </h2>
        <button
          type="button"
          className="text-xs uppercase tracking-[0.24em] text-stone-500 transition hover:text-stone-950"
          onClick={() => setFilters({ category: 'All', price: 'All', material: 'All' })}
        >
          Clear
        </button>
      </div>

      <div className="mt-6 space-y-8">
        {filterGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-3 lg:flex-col lg:items-start">
              {group.options.map((option) => {
                const active = filters[group.field] === option

                return (
                  <button
                    key={option}
                    type="button"
                    className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] transition ${
                      active
                        ? 'border-stone-950 bg-stone-950 text-stone-50'
                        : 'border-stone-300 bg-white text-stone-600 hover:border-amber-400 hover:text-stone-950'
                    }`}
                    onClick={() => toggleValue(group.field, option)}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default FilterSidebar
