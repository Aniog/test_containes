import { filterGroups } from '@/data/store'

function FilterSidebar({ filters, onToggleCategory, onToggleMaterial, onPriceChange, onClear }) {
  return (
    <aside className="rounded-[28px] border border-line bg-pearl p-5 shadow-card md:sticky md:top-28 md:p-6">
      <div className="flex items-center justify-between gap-3 border-b border-line pb-5">
        <div>
          <p className="eyebrow">Filters</p>
          <h2 className="mt-2 font-serif text-3xl text-ink">Refine</h2>
        </div>
        <button
          type="button"
          className="text-xs uppercase tracking-[0.18em] text-truffle transition duration-300 hover:text-champagne-deep"
          onClick={onClear}
        >
          Clear
        </button>
      </div>

      <div className="space-y-8 pt-6">
        <div>
          <h3 className="text-xs uppercase tracking-[0.22em] text-truffle">Category</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {filterGroups.categories.map((category) => {
              const active = filters.categories.includes(category)

              return (
                <button
                  key={category}
                  type="button"
                  className={[
                    'rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition duration-300',
                    active
                      ? 'border-champagne bg-champagne text-velvet'
                      : 'border-line bg-ivory text-truffle hover:border-champagne hover:text-ink',
                  ].join(' ')}
                  onClick={() => onToggleCategory(category)}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.22em] text-truffle">Price</h3>
          <div className="mt-4 space-y-3">
            {filterGroups.priceRanges.map((range) => (
              <label key={range.value} className="flex items-center gap-3 text-sm text-ink">
                <input
                  type="radio"
                  name="price"
                  value={range.value}
                  checked={filters.price === range.value}
                  onChange={(event) => onPriceChange(event.target.value)}
                  className="h-4 w-4 border-line text-champagne focus:ring-champagne"
                />
                <span>{range.label}</span>
              </label>
            ))}
            <label className="flex items-center gap-3 text-sm text-ink">
              <input
                type="radio"
                name="price"
                value=""
                checked={filters.price === ''}
                onChange={(event) => onPriceChange(event.target.value)}
                className="h-4 w-4 border-line text-champagne focus:ring-champagne"
              />
              <span>All prices</span>
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.22em] text-truffle">Material</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {filterGroups.materials.map((material) => {
              const active = filters.materials.includes(material)

              return (
                <button
                  key={material}
                  type="button"
                  className={[
                    'rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition duration-300',
                    active
                      ? 'border-champagne bg-champagne text-velvet'
                      : 'border-line bg-ivory text-truffle hover:border-champagne hover:text-ink',
                  ].join(' ')}
                  onClick={() => onToggleMaterial(material)}
                >
                  {material}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default FilterSidebar
