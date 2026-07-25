import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '@/components/product/ProductCard'
import { categories, products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 49 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80 – $120', min: 81, max: 120 },
]

export default function ShopPage({ onAddToCart }) {
  const pageRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || (searchParams.get('collection') === 'gift' ? 'Gift Sets' : 'All')
  const [category, setCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    const nextCategory = searchParams.get('category') || (searchParams.get('collection') === 'gift' ? 'Gift Sets' : 'All')
    setCategory(nextCategory)
  }, [searchParams])


  const filteredProducts = useMemo(() => {
    const range = priceRanges.find((item) => item.label === priceRange)
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const priceMatch = !range || (product.price >= range.min && product.price <= range.max)
      const materialMatch = material === 'All' || product.material === material || (material === 'Hypoallergenic' && product.category !== 'Gift Sets')
      return categoryMatch && priceMatch && materialMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'name') return a.name.localeCompare(b.name)
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, material, priceRange, sort])

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      const result = ImageHelper.loadImages(strkImgConfig, pageRef.current)
      if (typeof result === 'function') cleanup = result
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [category, material, priceRange, sort])

  const selectCategory = (value) => {
    setCategory(value)
    const nextParams = new URLSearchParams(searchParams)
    if (value === 'All') nextParams.delete('category')
    else nextParams.set('category', value)
    setSearchParams(nextParams)
  }

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-28 text-velmora-charcoal">
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-8 sm:px-8 lg:px-12">
        <p className="text-xs font-bold uppercase tracking-wide-luxury text-velmora-brass">Shop Velmora</p>
        <div className="mt-4 flex flex-col gap-6 border-b border-velmora-line pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="font-serif text-6xl font-semibold leading-none text-velmora-charcoal md:text-7xl">The Collection</h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-velmora-muted">
              Demi-fine gold pieces selected for warmth, comfort, and everyday polish. Filter by style, budget, and material.
            </p>
          </div>
          <label className="flex w-full max-w-xs items-center gap-3 border border-velmora-line bg-velmora-porcelain px-4 py-3 text-sm text-velmora-charcoal">
            <span className="text-xs font-bold uppercase tracking-luxury text-velmora-muted">Sort</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)} className="flex-1 bg-transparent text-sm font-semibold text-velmora-charcoal outline-none">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </label>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 sm:px-8 md:grid-cols-[260px_1fr] lg:px-12">
        <aside className="h-fit border border-velmora-line bg-velmora-porcelain p-5 text-velmora-charcoal md:sticky md:top-28">
          <div className="mb-6 flex items-center gap-3 border-b border-velmora-line pb-4">
            <SlidersHorizontal className="h-4 w-4 text-velmora-brass" />
            <h2 className="text-xs font-extrabold uppercase tracking-wide-luxury text-velmora-charcoal">Filters</h2>
          </div>

          <FilterGroup title="Category">
            {['All', ...categories].map((item) => (
              <FilterButton key={item} label={item} active={category === item} onClick={() => selectCategory(item)} />
            ))}
          </FilterGroup>

          <FilterGroup title="Price">
            {['All', ...priceRanges.map((item) => item.label)].map((item) => (
              <FilterButton key={item} label={item} active={priceRange === item} onClick={() => setPriceRange(item)} />
            ))}
          </FilterGroup>

          <FilterGroup title="Material">
            {['All', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
              <FilterButton key={item} label={item} active={material === item} onClick={() => setMaterial(item)} />
            ))}
          </FilterGroup>
        </aside>

        <div>
          <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-luxury text-velmora-muted">
            <span>{filteredProducts.length} piece{filteredProducts.length === 1 ? '' : 's'}</span>
            <span>Premium demi-fine jewelry</span>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} slotPrefix="shop" />
              ))}
            </div>
          ) : (
            <div className="border border-velmora-line bg-velmora-porcelain p-10 text-center text-velmora-charcoal">
              <p className="font-serif text-3xl font-semibold">No pieces match these filters.</p>
              <button type="button" onClick={() => { selectCategory('All'); setPriceRange('All'); setMaterial('All') }} className="mt-6 border border-velmora-brass px-6 py-3 text-xs font-bold uppercase tracking-wide-luxury text-velmora-charcoal transition hover:bg-velmora-brass hover:text-velmora-ivory">
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, children }) {
  return (
    <div className="mb-7 last:mb-0">
      <h3 className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-muted">{title}</h3>
      <div className="flex flex-wrap gap-2 md:flex-col md:items-start">{children}</div>
    </div>
  )
}

function FilterButton({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border px-3 py-2 text-xs font-bold uppercase tracking-luxury transition ${active ? 'border-velmora-brass bg-velmora-brass text-velmora-ivory' : 'border-velmora-line bg-velmora-ivory text-velmora-charcoal hover:border-velmora-brass'}`}
    >
      {label}
    </button>
  )
}
