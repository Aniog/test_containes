import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { SlidersHorizontal, X } from 'lucide-react'
import strkImgConfig from '../strk-img-config.json'
import ProductCard from '../components/product/ProductCard.jsx'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceOptions = ['All', 'Under $50', '$50–$80', '$80+']
const materialOptions = ['All', '18K gold plated', 'Gold filigree']

export default function Shop({ products, onAdd }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categoryOptions.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('Featured')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const containerRef = useRef(null)

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material === material
      const matchesPrice = price === 'All'
        || (price === 'Under $50' && product.price < 50)
        || (price === '$50–$80' && product.price >= 50 && product.price <= 80)
        || (price === '$80+' && product.price > 80)
      return matchesCategory && matchesMaterial && matchesPrice
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'Price: Low to High') return a.price - b.price
      if (sort === 'Price: High to Low') return b.price - a.price
      if (sort === 'Top Rated') return b.rating - a.rating
      return 0
    })
  }, [products, category, material, price, sort])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [filteredProducts.length, category, material, price, sort])

  const resetFilters = () => {
    setCategory('All')
    setPrice('All')
    setMaterial('All')
  }

  const FilterGroup = ({ title, options, value, onChange }) => (
    <fieldset className="border-b border-velmora-sand py-6 first:pt-0">
      <legend className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold-deep">{title}</legend>
      <div className="space-y-3">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-charcoal">
            <input
              type="radio"
              name={title}
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 accent-velmora-gold"
            />
            <span className={value === option ? 'font-semibold text-velmora-ink' : 'text-velmora-charcoal/80'}>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )

  const filters = (
    <div className="text-velmora-ink">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-serif text-3xl font-semibold">Filters</h2>
        <button type="button" onClick={resetFilters} className="text-xs font-bold uppercase tracking-[0.2em] text-velmora-gold-deep hover:text-velmora-ink">Reset</button>
      </div>
      <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
      <FilterGroup title="Price" options={priceOptions} value={price} onChange={setPrice} />
      <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
    </div>
  )

  return (
    <main ref={containerRef} className="bg-velmora-cream px-5 pb-20 pt-28 text-velmora-ink lg:px-12 lg:pb-28">
      <section className="mx-auto max-w-7xl">
        <div className="border-b border-velmora-sand pb-10 md:flex md:items-end md:justify-between md:gap-10">
          <div>
            <p id="shop-eyebrow" className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold-deep">The Collection</p>
            <h1 id="shop-title" className="mt-4 font-serif text-5xl font-semibold leading-tight text-velmora-ink md:text-7xl">Demi-fine gold, edited with restraint</h1>
            <p id="shop-subtitle" className="mt-5 max-w-2xl text-base leading-8 text-velmora-charcoal/78">Browse earrings, necklaces, huggies, and gift sets designed for warm light and everyday wear.</p>
          </div>
          <div className="mt-8 flex items-center gap-3 md:mt-0">
            <button type="button" onClick={() => setFiltersOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-velmora-sand bg-velmora-pearl px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-velmora-ink lg:hidden">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <label className="sr-only" htmlFor="sort">Sort products</label>
            <select id="sort" value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-sand bg-velmora-pearl px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-velmora-ink">
              {['Featured', 'Price: Low to High', 'Price: High to Low', 'Top Rated'].map((option) => <option key={option}>{option}</option>)}
            </select>
          </div>
        </div>

        <div className="grid gap-10 pt-10 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">{filters}</aside>
          <div>
            <div className="mb-6 flex items-center justify-between text-sm text-velmora-charcoal/75">
              <p><span className="font-semibold text-velmora-ink">{filteredProducts.length}</span> pieces</p>
              <p className="hidden uppercase tracking-[0.18em] sm:block">Free shipping worldwide</p>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}
              </div>
            ) : (
              <div className="border border-velmora-sand bg-velmora-pearl p-10 text-center shadow-card">
                <h2 className="font-serif text-3xl font-semibold text-velmora-ink">No pieces found</h2>
                <p className="mt-3 text-sm leading-7 text-velmora-charcoal/75">Try adjusting the filters to see more of the collection.</p>
                <button type="button" onClick={resetFilters} className="mt-6 rounded-full bg-velmora-ink px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-pearl hover:bg-velmora-gold-deep">Clear filters</button>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className={`fixed inset-0 z-40 bg-velmora-ink/45 backdrop-blur-sm transition lg:hidden ${filtersOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={() => setFiltersOpen(false)} aria-hidden="true" />
      <aside className={`fixed bottom-0 left-0 right-0 z-50 max-h-[86vh] overflow-y-auto rounded-t-[2rem] bg-velmora-pearl p-6 text-velmora-ink shadow-editorial transition duration-300 lg:hidden ${filtersOpen ? 'translate-y-0' : 'translate-y-full'}`} aria-label="Mobile filters">
        <div className="mb-4 flex justify-end">
          <button type="button" onClick={() => setFiltersOpen(false)} className="rounded-full border border-velmora-sand p-2" aria-label="Close filters"><X className="h-5 w-5" /></button>
        </div>
        {filters}
        <button type="button" onClick={() => setFiltersOpen(false)} className="mt-6 w-full rounded-full bg-velmora-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-pearl">Apply Filters</button>
      </aside>
    </main>
  )
}
