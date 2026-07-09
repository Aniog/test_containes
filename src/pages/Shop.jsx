import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const prices = ['All', 'Under $50', '$50–$80', '$80+']
const materials = ['All', '18K Gold Plated', 'Crystal + Gold Vermeil', 'Crystal + 18K Gold Plated']

export default function Shop() {
  const searchParams = new URLSearchParams(window.location.search)
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material === material
      const matchesPrice =
        price === 'All' ||
        (price === 'Under $50' && product.price < 50) ||
        (price === '$50–$80' && product.price >= 50 && product.price <= 80) ||
        (price === '$80+' && product.price > 80)

      return matchesCategory && matchesMaterial && matchesPrice
    })

    return [...result].sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, material, price, sort])

  return (
    <main className="bg-velmora-ivory pb-20 pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-velmora-espresso/10 pb-10 pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-velmora-gold">Collection</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-6xl font-medium sm:text-7xl">Shop all jewelry</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-velmora-taupe">
                Demi-fine earrings, necklaces, huggies, and giftable sets in warm gold finishes.
              </p>
            </div>
            <label className="flex w-full items-center gap-3 border border-velmora-espresso/15 bg-white/35 px-4 py-3 text-sm text-velmora-espresso lg:w-64">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-velmora-taupe">Sort</span>
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="flex-1 bg-transparent text-velmora-espresso focus:outline-none">
                <option value="featured">Featured</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
                <option value="rating">Top rated</option>
              </select>
            </label>
          </div>
        </div>

        <div className="grid gap-10 py-10 lg:grid-cols-[260px_1fr]">
          <aside className="h-max border border-velmora-espresso/10 bg-white/35 p-5 text-velmora-espresso lg:sticky lg:top-28">
            <div className="mb-6 flex items-center gap-2 border-b border-velmora-espresso/10 pb-4">
              <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
              <h2 className="text-xs font-bold uppercase tracking-[0.28em]">Filter</h2>
            </div>
            <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
            <FilterGroup title="Price" options={prices} value={price} onChange={setPrice} />
            <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
          </aside>

          <div>
            <div className="mb-6 flex items-center justify-between text-sm text-velmora-taupe">
              <p>{filteredProducts.length} pieces</p>
              <p>Premium-but-accessible, $30–$120</p>
            </div>
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="border border-velmora-espresso/10 bg-white/45 p-10 text-center text-velmora-espresso">
                <h3 className="font-serif text-3xl">No pieces match these filters.</h3>
                <p className="mt-2 text-sm text-velmora-taupe">Try adjusting your category, price, or material selection.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="mb-7 last:mb-0">
      <h3 className="mb-3 font-serif text-2xl text-velmora-espresso">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-taupe transition hover:text-velmora-espresso">
            <input
              type="radio"
              name={title}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 accent-velmora-gold"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  )
}
