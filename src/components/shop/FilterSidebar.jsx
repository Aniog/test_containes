const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const prices = ['All', '$30–$50', '$50–$80', '$80–$120']
const materials = ['All', '18K Gold Plated']

export default function FilterSidebar({ filters, setFilters }) {
  const update = (key, value) => setFilters((current) => ({ ...current, [key]: value }))
  return (
    <aside className="border border-velmora-line bg-velmora-porcelain p-5 text-velmora-espresso lg:sticky lg:top-28 lg:self-start">
      <h2 className="font-serif text-3xl">Filter</h2>
      {[['category', categories], ['price', prices], ['material', materials]].map(([key, options]) => (
        <div key={key} className="mt-7 border-t border-velmora-line pt-5">
          <p className="mb-4 text-xs font-semibold uppercase tracking-luxury text-velmora-antique">{key}</p>
          <div className="flex flex-wrap gap-2 lg:flex-col">
            {options.map((option) => <button key={option} type="button" onClick={() => update(key, option)} className={`border px-4 py-2 text-left text-sm transition ${filters[key] === option ? 'border-velmora-espresso bg-velmora-espresso text-velmora-porcelain' : 'border-velmora-line text-velmora-espresso hover:border-velmora-gold'}`}>{option}</button>)}
          </div>
        </div>
      ))}
    </aside>
  )
}
