import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/products/ProductCard'
import { products } from '@/data/products'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const materialOptions = ['All', '18K Gold Plated', 'Gold Vermeil']
const priceOptions = [
  { label: 'All', value: 'All' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]

export default function ShopPage({ onAddToCart }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [category, setCategory] = useState(searchParams.get('category') || 'All')
  const [material, setMaterial] = useState('All')
  const [price, setPrice] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material === material
      const matchesPrice =
        price === 'All' ||
        (price === 'under-50' && product.price < 50) ||
        (price === '50-80' && product.price >= 50 && product.price <= 80) ||
        (price === '80-plus' && product.price > 80)
      return matchesCategory && matchesMaterial && matchesPrice
    })

    if (sort === 'price-low') return [...result].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') return [...result].sort((a, b) => b.price - a.price)
    if (sort === 'rating') return [...result].sort((a, b) => b.rating - a.rating)
    return result
  }, [category, material, price, sort])

  const handleCategory = (value) => {
    setCategory(value)
    if (value === 'All') setSearchParams({})
    else setSearchParams({ category: value })
  }

  return (
    <main className="bg-velmora-pearl pt-28 text-velmora-ink">
      <section className="border-b border-velmora-mist px-5 pb-10 pt-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.26em] text-velmora-champagne">Shop Velmora</p>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">Demi-fine signatures</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-velmora-cocoa/78">
                Warm gold essentials for ear stacks, collarbone light, and gift-ready moments. Every piece sits between $30 and $120.
              </p>
            </div>
            <label className="flex max-w-xs flex-col gap-2 text-xs font-bold uppercase tracking-[0.18em] text-velmora-cocoa/76">
              Sort by
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-mist bg-white px-5 py-3 text-sm font-bold normal-case tracking-normal text-velmora-ink focus:border-velmora-champagne focus:outline-none">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[17rem_1fr] lg:px-10 lg:py-14">
        <aside className="h-fit rounded-[1.75rem] border border-velmora-mist bg-white/55 p-5 text-velmora-ink shadow-card lg:sticky lg:top-28">
          <div className="mb-5 flex items-center gap-2 border-b border-velmora-mist pb-4">
            <SlidersHorizontal className="h-4 w-4 text-velmora-champagne" />
            <h2 className="text-sm font-extrabold uppercase tracking-[0.22em]">Filters</h2>
          </div>
          <FilterGroup title="Category" options={categoryOptions} value={category} onChange={handleCategory} />
          <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
          <FilterGroup title="Price" options={priceOptions} value={price} onChange={setPrice} />
        </aside>

        <div>
          <div className="mb-5 flex items-center justify-between text-sm text-velmora-cocoa/78">
            <p>{filteredProducts.length} pieces</p>
            <p className="hidden sm:block">Free worldwide shipping on every order</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="rounded-[1.75rem] border border-dashed border-velmora-mist bg-velmora-linen p-10 text-center text-velmora-ink">
              <p className="font-serif text-3xl">No pieces match these filters.</p>
              <button type="button" onClick={() => { setCategory('All'); setMaterial('All'); setPrice('All'); setSearchParams({}) }} className="mt-5 rounded-full bg-velmora-ink px-6 py-3 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-pearl">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  const normalizedOptions = options.map((option) => (typeof option === 'string' ? { label: option, value: option } : option))

  return (
    <div className="border-b border-velmora-mist py-5 last:border-0">
      <h3 className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-cocoa">{title}</h3>
      <div className="grid gap-2">
        {normalizedOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`rounded-full border px-4 py-2 text-left text-sm font-semibold transition ${
              value === option.value
                ? 'border-velmora-champagne bg-velmora-champagne text-velmora-ink'
                : 'border-velmora-mist bg-velmora-pearl text-velmora-cocoa hover:border-velmora-champagne hover:text-velmora-ink'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
