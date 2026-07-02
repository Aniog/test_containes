import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import ProductCard from '../common/ProductCard.jsx'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceRanges = ['All', 'Under $50', '$50–$80', '$80–$120']
const materials = ['All', '18K Gold Plated', 'Crystal & Gold Vermeil', 'Textured Gold Plated']

const FilterGroup = ({ title, options, value, onChange }) => (
  <div className="border-b border-velmora-line pb-6">
    <h3 className="text-xs font-extrabold uppercase tracking-[0.26em] text-velmora-clay">{title}</h3>
    <div className="mt-4 grid gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`rounded-full border px-4 py-2 text-left text-sm transition ${value === option ? 'border-velmora-gold bg-velmora-gold/20 text-velmora-ink' : 'border-transparent text-velmora-forest/78 hover:border-velmora-line hover:bg-velmora-cream'}`}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
)

const ShopSection = ({ products, onAdd, onSelect }) => {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('Featured')

  const filtered = useMemo(() => {
    const result = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch = price === 'All'
        || (price === 'Under $50' && product.price < 50)
        || (price === '$50–$80' && product.price >= 50 && product.price <= 80)
        || (price === '$80–$120' && product.price > 80 && product.price <= 120)
      return categoryMatch && materialMatch && priceMatch
    })

    return [...result].sort((a, b) => {
      if (sort === 'Price low to high') return a.price - b.price
      if (sort === 'Price high to low') return b.price - a.price
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [category, material, price, products, sort])

  return (
    <section id="shop" className="bg-velmora-ivory px-5 py-16 text-velmora-ink lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-velmora-line pb-7 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-clay">Collection</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ink md:text-6xl">Shop all Velmora</h2>
          </div>
          <label className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-velmora-forest">
            Sort
            <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-line bg-velmora-cream px-5 py-3 text-sm normal-case tracking-normal text-velmora-ink focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold/30">
              <option>Featured</option>
              <option>Price low to high</option>
              <option>Price high to low</option>
            </select>
          </label>
        </div>

        <div className="grid gap-8 lg:grid-cols-[17rem_1fr]">
          <aside className="rounded-[1.5rem] border border-velmora-line bg-velmora-cream p-5 text-velmora-ink shadow-soft lg:sticky lg:top-28 lg:self-start">
            <div className="mb-5 flex items-center gap-2 text-velmora-ink">
              <SlidersHorizontal className="h-4 w-4" />
              <h2 className="text-sm font-extrabold uppercase tracking-[0.24em]">Filters</h2>
            </div>
            <div className="grid gap-6">
              <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
              <FilterGroup title="Price" options={priceRanges} value={price} onChange={setPrice} />
              <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
            </div>
          </aside>

          <div>
            <p className="mb-5 text-sm text-velmora-forest/70">Showing {filtered.length} of {products.length} pieces</p>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} onAdd={onAdd} onSelect={onSelect} imageContext="shop" />
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="border border-velmora-line bg-velmora-cream p-10 text-center text-velmora-ink">
                <p className="font-serif text-3xl">No pieces match these filters.</p>
                <p className="mt-2 text-sm text-velmora-forest/70">Try opening your selection to see more luminous options.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopSection
