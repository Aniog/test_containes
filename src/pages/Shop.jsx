import { useMemo, useRef, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { useStrkImages } from '@/hooks/useStrkImages'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const materialOptions = ['All', '18K Gold Plated', 'Gold Vermeil']
const priceOptions = [
  { label: 'All', value: 'All' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]

export default function Shop() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categoryOptions.includes(initialCategory) ? initialCategory : 'All')
  const [material, setMaterial] = useState('All')
  const [price, setPrice] = useState('All')
  const [sort, setSort] = useState('featured')
  const containerRef = useRef(null)

  const filteredProducts = useMemo(() => {
    let list = [...products]
    if (category !== 'All') list = list.filter((product) => product.category === category)
    if (material !== 'All') list = list.filter((product) => product.material === material)
    if (price === 'under-50') list = list.filter((product) => product.price < 50)
    if (price === '50-80') list = list.filter((product) => product.price >= 50 && product.price <= 80)
    if (price === '80-plus') list = list.filter((product) => product.price > 80)
    if (sort === 'price-low') list.sort((a, b) => a.price - b.price)
    if (sort === 'price-high') list.sort((a, b) => b.price - a.price)
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating)
    return list
  }, [category, material, price, sort])

  useStrkImages(containerRef, [category, material, price, sort])

  return (
    <main ref={containerRef} className="bg-velmora-cream pt-28 text-velmora-ink">
      <section className="border-b border-velmora-linen px-5 pb-12 pt-8 md:px-8 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze">Collection</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serif text-6xl font-medium tracking-tight md:text-8xl">Shop Velmora</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-velmora-sage">Demi-fine earrings, necklaces, huggies, and gift sets made for warm everyday shine.</p>
            </div>
            <label className="flex w-full max-w-xs flex-col gap-2 text-xs font-bold uppercase tracking-[0.18em] text-velmora-sage">
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-linen bg-white/60 px-5 py-3 text-sm normal-case tracking-normal text-velmora-ink focus:border-velmora-champagne focus:outline-none">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-8 lg:grid-cols-[260px_1fr] lg:py-16">
        <aside className="h-fit border border-velmora-linen bg-white/45 p-6 shadow-soft lg:sticky lg:top-28">
          <div className="mb-6 flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-velmora-bronze" />
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink">Filters</h2>
          </div>
          <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
          <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
          <FilterGroup title="Price" options={priceOptions.map((option) => option.label)} value={priceOptions.find((option) => option.value === price)?.label || 'All'} onChange={(label) => setPrice(priceOptions.find((option) => option.label === label)?.value || 'All')} />
        </aside>
        <div>
          <div className="mb-6 flex items-center justify-between border-b border-velmora-linen pb-4 text-sm text-velmora-sage">
            <span>{filteredProducts.length} pieces</span>
            <span>Premium demi-fine · $30–$120</span>
          </div>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
          {filteredProducts.length === 0 && (
            <div className="border border-velmora-linen bg-white/45 p-10 text-center text-velmora-ink">
              <p className="font-serif text-3xl">No pieces matched these filters.</p>
              <button type="button" onClick={() => { setCategory('All'); setMaterial('All'); setPrice('All') }} className="mt-5 rounded-full bg-velmora-ink px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-velmora-cream">Reset filters</button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <fieldset className="border-t border-velmora-linen py-5 first:border-t-0 first:pt-0">
      <legend className="mb-4 font-serif text-2xl text-velmora-ink">{title}</legend>
      <div className="grid gap-2">
        {options.map((option) => (
          <button key={option} type="button" onClick={() => onChange(option)} className={`rounded-full border px-4 py-2 text-left text-sm transition ${value === option ? 'border-velmora-ink bg-velmora-ink text-velmora-cream' : 'border-velmora-linen bg-velmora-cream text-velmora-sage hover:border-velmora-champagne hover:text-velmora-ink'}`}>
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  )
}
