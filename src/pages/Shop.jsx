import { useMemo, useRef, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard.jsx'
import { useImageLoader } from '@/components/common/useImageLoader.js'
import { categories, products } from '@/data/products.js'

const priceRanges = [
  { label: 'All prices', value: 'all' },
  { label: '$30–$50', value: '30-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80–$120', value: '80-120' },
]

const materials = ['All materials', '18K Gold Plated']

export default function Shop({ onAdd }) {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All materials')
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const pageRef = useRef(null)
  useImageLoader(pageRef, [category, price, material, sort])

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All materials' || product.material === material
      const priceMatch = price === 'all' || (() => {
        const [min, max] = price.split('-').map(Number)
        return product.price >= min && product.price <= max
      })()
      return categoryMatch && materialMatch && priceMatch
    })

    return [...result].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [category, material, price, sort])

  const FilterContent = () => (
    <div className="space-y-8 text-velmora-espresso">
      <div>
        <h3 className="mb-4 text-xs font-bold uppercase tracking-refined text-velmora-gold">Category</h3>
        <div className="space-y-3">
          {['All', ...categories.map((item) => item.name), 'Gift Sets'].map((item) => (
            <label key={item} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-espresso">
              <input type="radio" name="category" checked={category === item} onChange={() => setCategory(item)} className="h-4 w-4 accent-velmora-gold" />
              {item}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-xs font-bold uppercase tracking-refined text-velmora-gold">Price</h3>
        <div className="space-y-3">
          {priceRanges.map((item) => (
            <label key={item.value} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-espresso">
              <input type="radio" name="price" checked={price === item.value} onChange={() => setPrice(item.value)} className="h-4 w-4 accent-velmora-gold" />
              {item.label}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-xs font-bold uppercase tracking-refined text-velmora-gold">Material</h3>
        <div className="space-y-3">
          {materials.map((item) => (
            <label key={item} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-espresso">
              <input type="radio" name="material" checked={material === item} onChange={() => setMaterial(item)} className="h-4 w-4 accent-velmora-gold" />
              {item}
            </label>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <main ref={pageRef} className="bg-velmora-ivory px-4 pb-24 pt-28 text-velmora-espresso sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-velmora-line pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-refined text-velmora-gold">Velmora shop</p>
            <h1 className="mt-4 font-display text-6xl font-medium leading-none text-velmora-espresso md:text-8xl">Demi-fine pieces for every day.</h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-velmora-taupe lg:justify-self-end">Explore earrings, necklaces, huggies, and gift-ready sets in warm 18K gold plating with a premium-but-accessible finish.</p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <button className="inline-flex items-center gap-2 rounded-full border border-velmora-line bg-velmora-pearl px-5 py-3 text-sm font-semibold text-velmora-espresso lg:hidden" onClick={() => setFiltersOpen(true)}>
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
          <p className="text-sm text-velmora-taupe">{filteredProducts.length} refined pieces</p>
          <label className="flex items-center gap-3 text-sm text-velmora-espresso">
            Sort
            <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-line bg-velmora-pearl px-4 py-3 text-sm text-velmora-espresso focus:border-velmora-gold focus:outline-none">
              <option value="featured">Featured</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
              <option value="rating">Top rated</option>
            </select>
          </label>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[16rem_1fr]">
          <aside className="hidden rounded-3xl border border-velmora-line bg-velmora-pearl p-6 shadow-card lg:block">
            <FilterContent />
          </aside>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} context="shop" />)}
            {filteredProducts.length === 0 && (
              <div className="col-span-full rounded-3xl border border-velmora-line bg-velmora-pearl p-10 text-center text-velmora-espresso">
                <p className="font-display text-3xl">No pieces match these filters.</p>
                <button className="mt-5 rounded-full bg-velmora-espresso px-6 py-3 text-xs font-bold uppercase tracking-refined text-velmora-ivory" onClick={() => { setCategory('All'); setPrice('all'); setMaterial('All materials') }}>Clear filters</button>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className={`fixed inset-0 z-50 bg-velmora-espresso/50 transition lg:hidden ${filtersOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
        <aside className={`ml-auto h-full w-80 max-w-full overflow-y-auto bg-velmora-ivory p-6 shadow-drawer transition-transform duration-500 ${filtersOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-display text-3xl text-velmora-espresso">Filters</h2>
            <button className="rounded-full bg-velmora-espresso px-5 py-2 text-xs font-bold uppercase tracking-refined text-velmora-ivory" onClick={() => setFiltersOpen(false)}>Done</button>
          </div>
          <FilterContent />
        </aside>
      </div>
    </main>
  )
}
