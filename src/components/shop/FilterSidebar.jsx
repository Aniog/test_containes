const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const prices = ['All', '$30–$50', '$50–$80', '$80–$120']
const materials = ['All', '18K Gold Plated', 'Gold Vermeil']

export default function FilterSidebar({ filters, onChange }) {
  return (
    <aside className="border border-velmora-linen bg-velmora-porcelain p-5 text-velmora-ink lg:sticky lg:top-28 lg:self-start">
      <h2 className="font-serifDisplay text-3xl text-velmora-ink">Filter</h2>
      <div className="mt-6 space-y-7">
        <FilterGroup title="Category" value={filters.category} options={categories} onSelect={(value) => onChange('category', value)} />
        <FilterGroup title="Price" value={filters.price} options={prices} onSelect={(value) => onChange('price', value)} />
        <FilterGroup title="Material" value={filters.material} options={materials} onSelect={(value) => onChange('material', value)} />
      </div>
    </aside>
  )
}

function FilterGroup({ title, value, options, onSelect }) {
  return (
    <div>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-sage">{title}</p>
      <div className="flex flex-wrap gap-2 lg:flex-col lg:items-start">
        {options.map((option) => (
          <button key={option} type="button" onClick={() => onSelect(option)} className={`border px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${value === option ? 'border-velmora-ink bg-velmora-ink text-velmora-cream' : 'border-velmora-linen bg-velmora-cream text-velmora-espresso hover:border-velmora-champagne'}`}>
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
