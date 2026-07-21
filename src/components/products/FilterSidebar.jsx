const optionButtonClass =
  'flex w-full items-center justify-between rounded-full border border-noir/10 bg-white px-4 py-3 text-sm text-noir transition hover:border-gold/40 hover:bg-mist'

const FilterSidebar = ({
  categories,
  materials,
  prices,
  filters,
  onFilterChange,
  total,
}) => {
  return (
    <aside className="rounded-[2rem] border border-noir/10 bg-ivory p-6 shadow-soft">
      <div className="border-b border-noir/10 pb-5">
        <p className="text-sm uppercase tracking-brand text-taupe">Refine</p>
        <p className="mt-2 font-display text-3xl text-noir">Shop the collection</p>
        <p className="mt-3 text-sm leading-6 text-taupe">{total} pieces selected for modern gifting and daily glow.</p>
      </div>

      <div className="space-y-8 pt-6">
        <div>
          <p className="mb-3 text-xs uppercase tracking-brand text-taupe">Category</p>
          <div className="space-y-3">
            {['All', ...categories].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => onFilterChange('category', category)}
                className={`${optionButtonClass} ${
                  filters.category === category ? 'border-gold bg-noir text-ivory' : ''
                }`}
              >
                <span>{category}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-brand text-taupe">Price</p>
          <div className="space-y-3">
            {prices.map((price) => (
              <button
                key={price.id}
                type="button"
                onClick={() => onFilterChange('price', price.id)}
                className={`${optionButtonClass} ${
                  filters.price === price.id ? 'border-gold bg-noir text-ivory' : ''
                }`}
              >
                <span>{price.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-brand text-taupe">Material</p>
          <div className="space-y-3">
            {['All', ...materials].map((material) => (
              <button
                key={material}
                type="button"
                onClick={() => onFilterChange('material', material)}
                className={`${optionButtonClass} ${
                  filters.material === material ? 'border-gold bg-noir text-ivory' : ''
                }`}
              >
                <span>{material}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default FilterSidebar
