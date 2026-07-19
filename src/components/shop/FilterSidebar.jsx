const FilterSidebar = ({ category, setCategory, price, setPrice, material, setMaterial }) => {
  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
  const prices = ['All', 'Under $50', '$50–$80', '$80+']
  const materials = ['All', '18K Gold Plated', 'Hypoallergenic']

  return (
    <aside className="rounded-3xl border border-velmora-line bg-velmora-mist p-5 text-velmora-ink lg:sticky lg:top-24 lg:self-start">
      <div className="mb-6 flex items-center justify-between border-b border-velmora-line pb-4">
        <h2 className="font-serif text-3xl font-semibold text-velmora-ink">Filter</h2>
        <button className="bg-transparent font-sans text-xs font-bold uppercase tracking-widest text-velmora-gold-deep hover:text-velmora-espresso" onClick={() => { setCategory('All'); setPrice('All'); setMaterial('All') }}>
          Reset
        </button>
      </div>
      <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
      <FilterGroup title="Price" options={prices} value={price} onChange={setPrice} />
      <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
    </aside>
  )
}

const FilterGroup = ({ title, options, value, onChange }) => (
  <div className="border-b border-velmora-line py-5 last:border-0">
    <p className="mb-4 font-sans text-xs font-bold uppercase tracking-widest text-velmora-taupe">{title}</p>
    <div className="flex flex-wrap gap-2 lg:flex-col lg:items-start">
      {options.map((option) => (
        <button
          key={option}
          className={`rounded-full border px-4 py-2 font-sans text-xs font-semibold transition ${value === option ? 'border-velmora-gold bg-velmora-gold text-velmora-espresso' : 'border-velmora-line bg-velmora-ivory text-velmora-ink hover:border-velmora-gold'}`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
)

export default FilterSidebar
