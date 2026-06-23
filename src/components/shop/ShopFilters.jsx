const ShopFilters = ({ activeCategory, activeMaterial, activePrice, onCategoryChange, onMaterialChange, onPriceChange }) => {
  const priceOptions = [
    { value: 'all', label: 'All prices' },
    { value: 'under-50', label: 'Under $50' },
    { value: '50-80', label: '$50 to $80' },
    { value: '80-plus', label: '$80 and above' },
  ]

  const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies']
  const materialOptions = ['All', '18K Gold Plated', 'Crystal Accent', 'Gift Set']

  return (
    <aside className="rounded-[2rem] border border-line bg-pearl p-6 shadow-float lg:sticky lg:top-28">
      <div className="space-y-8">
        <div>
          <h3 className="text-xs uppercase tracking-caps text-muted">Category</h3>
          <div className="mt-4 flex flex-wrap gap-2 lg:flex-col">
            {categoryOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => onCategoryChange(option)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-caps transition-colors duration-300 ${
                  activeCategory === option
                    ? 'border-gold bg-gold text-pearl'
                    : 'border-line text-ink hover:border-gold hover:text-gold'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-caps text-muted">Price</h3>
          <div className="mt-4 space-y-2">
            {priceOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-3 text-sm text-ink">
                <input
                  type="radio"
                  checked={activePrice === option.value}
                  onChange={() => onPriceChange(option.value)}
                  className="h-4 w-4 border-line text-gold accent-gold"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-caps text-muted">Material</h3>
          <div className="mt-4 flex flex-wrap gap-2 lg:flex-col">
            {materialOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => onMaterialChange(option)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-caps transition-colors duration-300 ${
                  activeMaterial === option
                    ? 'border-gold bg-gold text-pearl'
                    : 'border-line text-ink hover:border-gold hover:text-gold'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default ShopFilters
