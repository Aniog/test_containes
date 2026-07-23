const filterGroups = [
  {
    key: 'category',
    label: 'Category',
    options: ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  },
  {
    key: 'price',
    label: 'Price',
    options: ['All', 'Under $50', '$50 to $80', '$80+'],
  },
  {
    key: 'material',
    label: 'Material',
    options: ['All', '18K Gold Plated', 'Gold Vermeil & Crystal', 'Textured Gold Finish'],
  },
]

const FilterSidebar = ({ filters, onFilterChange }) => {
  return (
    <aside className="rounded-[2rem] border border-stone-200 bg-white p-6 text-neutral-950 shadow-sm lg:sticky lg:top-24">
      <div className="mb-6 border-b border-stone-200 pb-5">
        <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Refine</p>
        <h2 className="mt-3 font-display text-3xl text-neutral-950">Shop Filters</h2>
      </div>
      <div className="space-y-8">
        {filterGroups.map((group) => (
          <div key={group.key}>
            <h3 className="text-xs uppercase tracking-[0.3em] text-stone-500">
              {group.label}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.options.map((option) => {
                const isActive = filters[group.key] === option

                return (
                  <button
                    className={`rounded-full border px-4 py-2.5 text-sm transition ${isActive ? 'border-neutral-950 bg-neutral-950 text-stone-50' : 'border-stone-300 bg-stone-50 text-neutral-950 hover:border-stone-400'}`}
                    key={option}
                    onClick={() => onFilterChange(group.key, option)}
                    type="button"
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
