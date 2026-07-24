import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import ProductCard from '../components/storefront/ProductCard'
import { products } from '../data'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const prices = ['All', 'Under $50', '$50–$80', '$80–$120']
const materials = ['All', '18K Gold Plated', 'Crystal + Gold Vermeil', 'Gold Filigree']

export default function Shop({ onAdd }) {
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
        || (price === '$80–$120' && product.price >= 80 && product.price <= 120)
      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'Price: Low to High') return [...result].sort((a, b) => a.price - b.price)
    if (sort === 'Price: High to Low') return [...result].sort((a, b) => b.price - a.price)
    return result
  }, [category, material, price, sort])

  return (
    <main className="bg-velmora-ivory pb-20 pt-28 text-velmora-cocoa lg:pb-28">
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="border-b border-velmora-champagne/25 pb-10 pt-6 md:flex md:items-end md:justify-between md:gap-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-antique">Velmora shop</p>
            <h1 className="mt-4 font-serif text-6xl font-semibold leading-none tracking-[-0.03em] text-velmora-cocoa md:text-7xl">All jewelry</h1>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-taupe md:mt-0">Explore demi-fine earrings, necklaces, huggies, and gift-ready sets in warm gold finishes designed for daily wear.</p>
        </div>

        <div className="grid gap-8 pt-8 lg:grid-cols-[280px_1fr]">
          <aside className="h-max rounded-[1.5rem] border border-velmora-champagne/25 bg-velmora-porcelain p-6 shadow-soft lg:sticky lg:top-28">
            <div className="mb-6 flex items-center gap-3 text-velmora-cocoa">
              <SlidersHorizontal className="h-5 w-5 text-velmora-antique" />
              <h2 className="text-xs font-bold uppercase tracking-[0.24em]">Filter</h2>
            </div>
            <FilterGroup title="Category" value={category} options={categories} onChange={setCategory} />
            <FilterGroup title="Price" value={price} options={prices} onChange={setPrice} />
            <FilterGroup title="Material" value={material} options={materials} onChange={setMaterial} />
          </aside>

          <section>
            <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-velmora-taupe"><span className="font-semibold text-velmora-cocoa">{filtered.length}</span> luminous pieces</p>
              <label className="flex items-center gap-3 text-sm text-velmora-taupe">
                Sort
                <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-champagne/35 bg-velmora-porcelain px-4 py-2 text-sm font-semibold text-velmora-cocoa outline-none focus:border-velmora-antique">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </label>
            </div>

            {filtered.length > 0 ? (
              <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}
              </div>
            ) : (
              <div className="rounded-[1.5rem] border border-velmora-champagne/25 bg-velmora-porcelain p-10 text-center shadow-soft">
                <p className="font-serif text-4xl text-velmora-cocoa">No pieces match this edit.</p>
                <p className="mt-3 text-sm text-velmora-taupe">Try clearing a filter to see the full Velmora collection.</p>
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="border-t border-velmora-champagne/20 py-5 first:border-t-0 first:pt-0">
      <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-antique">{title}</h3>
      <div className="grid gap-2">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-3 text-sm leading-6 text-velmora-cocoa">
            <input
              type="radio"
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 accent-velmora-antique"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
