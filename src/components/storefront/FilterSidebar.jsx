import { collectionCategories, materialFilters, priceFilters } from '../../data/products'

function FilterSidebar({ filters, setFilters, sort, setSort }) {
  return (
    <aside className="rounded-[2rem] border border-hairline bg-pearl p-6 shadow-soft">
      <div className="space-y-8">
        <div>
          <h3 className="text-xs uppercase tracking-[0.24em] text-gold">Category</h3>
          <div className="mt-4 flex flex-wrap gap-3 lg:flex-col">
            {collectionCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilters((current) => ({ ...current, category }))}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition ${
                  filters.category === category
                    ? 'border-gold bg-gold text-umber'
                    : 'border-hairline bg-ivory text-taupe hover:border-gold hover:text-umber'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.24em] text-gold">Price</h3>
          <div className="mt-4 flex flex-wrap gap-3 lg:flex-col">
            {priceFilters.map((range) => (
              <button
                key={range.id}
                type="button"
                onClick={() => setFilters((current) => ({ ...current, price: range.id }))}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition ${
                  filters.price === range.id
                    ? 'border-gold bg-gold text-umber'
                    : 'border-hairline bg-ivory text-taupe hover:border-gold hover:text-umber'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.24em] text-gold">Material</h3>
          <div className="mt-4 flex flex-wrap gap-3 lg:flex-col">
            {materialFilters.map((material) => (
              <button
                key={material}
                type="button"
                onClick={() => setFilters((current) => ({ ...current, material }))}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition ${
                  filters.material === material
                    ? 'border-gold bg-gold text-umber'
                    : 'border-hairline bg-ivory text-taupe hover:border-gold hover:text-umber'
                }`}
              >
                {material}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="sort" className="block text-xs uppercase tracking-[0.24em] text-gold">
            Sort
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="mt-4 w-full rounded-full border border-hairline bg-ivory px-4 py-3 text-sm text-umber outline-none transition focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>
    </aside>
  )
}

export default FilterSidebar
