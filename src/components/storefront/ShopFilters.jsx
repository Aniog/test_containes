export default function ShopFilters({ filters, setFilters }) {
  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
  const prices = ['All', 'Under $50', '$50 to $80', '$80+']
  const materials = ['All', '18K Gold Plated', 'Crystal & Gold', 'Gift Set']

  const renderGroup = (title, key, options) => (
    <div className="space-y-4">
      <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-ink">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2 lg:flex-col lg:items-start">
        {options.map((option) => {
          const isActive = filters[key] === option
          return (
            <button
              key={option}
              type="button"
              onClick={() => setFilters((current) => ({ ...current, [key]: option }))}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition ${
                isActive
                  ? 'border-velmora-gold bg-velmora-gold text-velmora-ink'
                  : 'border-velmora-stone/20 text-velmora-stone hover:border-velmora-gold hover:text-velmora-ink'
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )

  return (
    <aside className="space-y-8 rounded-[2rem] border border-velmora-stone/15 bg-white p-5 shadow-soft lg:sticky lg:top-28">
      {renderGroup('Category', 'category', categories)}
      {renderGroup('Price', 'price', prices)}
      {renderGroup('Material', 'material', materials)}
    </aside>
  )
}
