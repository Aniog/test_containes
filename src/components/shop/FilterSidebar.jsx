const FilterSidebar = ({ filters, activeFilters, setActiveFilters, sort, setSort }) => {
  const toggleFilter = (group, value) => {
    setActiveFilters((current) => {
      const values = current[group]
      const exists = values.includes(value)

      return {
        ...current,
        [group]: exists ? values.filter((item) => item !== value) : [...values, value],
      }
    })
  }

  return (
    <aside className="rounded-[2rem] border border-mist bg-white p-6 shadow-soft">
      <div className="border-b border-mist pb-5">
        <p className="text-xs uppercase tracking-brand text-bronze">Refine</p>
        <h2 className="mt-3 font-serif text-3xl text-ink">Shop filters</h2>
      </div>

      <div className="mt-6 space-y-6">
        {filters.map((filterGroup) => (
          <div key={filterGroup.key}>
            <h3 className="text-xs uppercase tracking-brand text-ink/60">{filterGroup.label}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {filterGroup.options.map((option) => {
                const isActive = activeFilters[filterGroup.key].includes(option)

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleFilter(filterGroup.key, option)}
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-brand transition ${isActive ? 'border-bronze bg-bronze text-ivory' : 'border-mist bg-ivory text-ink hover:border-bronze hover:text-bronze'}`}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-mist pt-6">
        <label htmlFor="sort-select" className="text-xs uppercase tracking-brand text-ink/60">
          Sort by
        </label>
        <select
          id="sort-select"
          value={sort}
          onChange={(event) => setSort(event.target.value)}
          className="mt-3 h-12 w-full rounded-full border border-mist bg-ivory px-4 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-bronze/30"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Best Rated</option>
        </select>
      </div>
    </aside>
  )
}

export default FilterSidebar
