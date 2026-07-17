import { useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '../components/common/ProductCard.jsx?probe=velmora17'
import { products } from '@/data/products.js'
import { useImageLoader } from '@/lib/useImageLoader.js?probe=velmora17'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceOptions = [
  { label: 'All prices', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]
const materialOptions = ['All', '18K Gold Plated', 'Crystal']

export default function Shop({ onAdd }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categoryOptions.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const pageRef = useRef(null)
  useImageLoader(pageRef, [category, price, material, sort])

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch =
        price === 'all' ||
        (price === 'under-50' && product.price < 50) ||
        (price === '50-80' && product.price >= 50 && product.price <= 80) ||
        (price === '80-plus' && product.price > 80)
      return categoryMatch && materialMatch && priceMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [category, material, price, sort])

  const changeCategory = (value) => {
    setCategory(value)
    const next = new URLSearchParams(searchParams)
    if (value === 'All') next.delete('category')
    else next.set('category', value)
    setSearchParams(next)
  }

  const FilterGroup = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-espresso">Category</h2>
        <div className="mt-4 space-y-2">
          {categoryOptions.map((option) => (
            <button key={option} type="button" onClick={() => changeCategory(option)} className={`block w-full border px-4 py-3 text-left text-sm transition ${category === option ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-line bg-velmora-parchment text-velmora-ink hover:border-velmora-gold'}`}>
              {option}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-espresso">Price</h2>
        <div className="mt-4 space-y-2">
          {priceOptions.map((option) => (
            <button key={option.value} type="button" onClick={() => setPrice(option.value)} className={`block w-full border px-4 py-3 text-left text-sm transition ${price === option.value ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-line bg-velmora-parchment text-velmora-ink hover:border-velmora-gold'}`}>
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-espresso">Material</h2>
        <div className="mt-4 space-y-2">
          {materialOptions.map((option) => (
            <button key={option} type="button" onClick={() => setMaterial(option)} className={`block w-full border px-4 py-3 text-left text-sm transition ${material === option ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-line bg-velmora-parchment text-velmora-ink hover:border-velmora-gold'}`}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-28 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
        <div className="border-b border-velmora-line pb-8">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">Collection</p>
          <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <h1 id="shop-page-title" className="font-serif text-6xl leading-none text-velmora-ink md:text-7xl">Shop Velmora</h1>
              <p id="shop-page-subtitle" className="mt-5 max-w-2xl text-base leading-8 text-velmora-muted">
                Premium-but-accessible gold jewelry for gifting, self-purchase, and daily glow.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => setFiltersOpen((open) => !open)} className="inline-flex items-center justify-center gap-2 border border-velmora-line bg-velmora-parchment px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-velmora-ink lg:hidden">
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </button>
              <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-muted">
                Sort
                <select value={sort} onChange={(event) => setSort(event.target.value)} className="min-h-12 border border-velmora-line bg-velmora-parchment px-4 text-sm normal-case tracking-normal text-velmora-ink outline-none focus:border-velmora-gold">
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        {filtersOpen && (
          <div className="mt-6 border border-velmora-line bg-velmora-parchment p-5 lg:hidden">
            <FilterGroup />
          </div>
        )}
        <div className="mt-10 grid gap-8 lg:grid-cols-[17rem_1fr]">
          <aside className="hidden border-r border-velmora-line pr-8 lg:block">
            <FilterGroup />
          </aside>
          <div>
            <div className="mb-5 flex items-center justify-between text-sm text-velmora-muted">
              <span>{filteredProducts.length} pieces</span>
              <span>Free worldwide shipping</span>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAdd={onAdd} context="shop" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
