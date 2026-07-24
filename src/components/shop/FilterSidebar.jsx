import { priceRanges } from '../../data/store'

const FilterSidebar = ({ filters, categoryOptions, materialOptions, onFilterChange }) => (
  <aside className="rounded-[2rem] border border-stone-200/10 bg-stone-900/50 p-6 lg:sticky lg:top-28">
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.28em] text-stone-400">Category</p>
        <div className="space-y-2">
          {categoryOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => onFilterChange('category', option)}
              className={[
                'flex w-full items-center justify-between rounded-full px-4 py-3 text-left text-sm transition',
                filters.category === option
                  ? 'bg-amber-200 text-stone-950'
                  : 'bg-stone-950 text-stone-300 hover:text-stone-50',
              ].join(' ')}
            >
              <span>{option}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.28em] text-stone-400">Price</p>
        <div className="space-y-2">
          {priceRanges.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => onFilterChange('price', option.id)}
              className={[
                'flex w-full items-center justify-between rounded-full px-4 py-3 text-left text-sm transition',
                filters.price === option.id
                  ? 'bg-amber-200 text-stone-950'
                  : 'bg-stone-950 text-stone-300 hover:text-stone-50',
              ].join(' ')}
            >
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.28em] text-stone-400">Material</p>
        <div className="space-y-2">
          {materialOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => onFilterChange('material', option)}
              className={[
                'flex w-full items-center justify-between rounded-full px-4 py-3 text-left text-sm transition',
                filters.material === option
                  ? 'bg-amber-200 text-stone-950'
                  : 'bg-stone-950 text-stone-300 hover:text-stone-50',
              ].join(' ')}
            >
              <span>{option}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  </aside>
)

export default FilterSidebar
