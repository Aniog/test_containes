import { SlidersHorizontal } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const materialOptions = ['All', '18K Gold Plated', 'Gold Vermeil']
const priceOptions = [
  { label: 'All', min: 0, max: 999 },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80–$120', min: 80, max: 120 },
]

export default function Shop({ onAddToCart }) {
  const pageRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [material, setMaterial] = useState('All')
  const [priceRange, setPriceRange] = useState(priceOptions[0])
  const [sort, setSort] = useState('featured')
  const activeCategory = searchParams.get('category') || 'All'
  const dependencyKey = `${activeCategory}-${material}-${priceRange.label}-${sort}`

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [dependencyKey])

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const categoryMatch = activeCategory === 'All' || product.category === activeCategory
      const materialMatch = material === 'All' || product.material === material
      const priceMatch = product.price >= priceRange.min && product.price <= priceRange.max
      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'price-asc') return [...result].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') return [...result].sort((a, b) => b.price - a.price)
    if (sort === 'rating') return [...result].sort((a, b) => b.rating - a.rating)
    return result
  }, [activeCategory, material, priceRange, sort])

  const setCategory = (category) => {
    if (category === 'All') setSearchParams({})
    else setSearchParams({ category })
  }

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="border-b border-velmora-mist px-5 pb-12 pt-8 md:px-8 md:pb-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-velmora-goldDeep">Collection</p>
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <h1 id="shop-page-title" className="font-serif text-6xl font-semibold leading-none text-balance text-velmora-espresso md:text-8xl">Shop Demi-Fine Jewelry</h1>
            <p id="shop-page-copy" className="max-w-xl text-base leading-8 text-velmora-charcoal md:justify-self-end">Warm gold essentials, crystal accents, and gift-ready sets designed for the everyday ritual of getting dressed.</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit border border-velmora-mist bg-velmora-linen p-5 text-velmora-espresso shadow-soft lg:sticky lg:top-28">
            <div className="mb-6 flex items-center gap-2 border-b border-velmora-mist pb-4">
              <SlidersHorizontal className="h-4 w-4 text-velmora-goldDeep" aria-hidden="true" />
              <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso">Filter</h2>
            </div>
            <FilterGroup title="Category" options={categoryOptions} active={activeCategory} onChange={setCategory} />
            <FilterGroup title="Material" options={materialOptions} active={material} onChange={setMaterial} />
            <div className="border-t border-velmora-mist pt-5">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-taupe">Price</h3>
              <div className="flex flex-wrap gap-2 lg:grid">
                {priceOptions.map((option) => (
                  <button key={option.label} type="button" onClick={() => setPriceRange(option)} className={`velmora-focus rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${priceRange.label === option.label ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-mist bg-velmora-ivory text-velmora-charcoal hover:border-velmora-gold'}`}>{option.label}</button>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-6 flex flex-col gap-4 border-b border-velmora-mist pb-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-velmora-charcoal">Showing <span className="font-semibold text-velmora-espresso">{filteredProducts.length}</span> refined pieces</p>
              <label className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-velmora-taupe">
                Sort
                <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-mist bg-velmora-linen px-4 py-2 text-sm normal-case tracking-normal text-velmora-espresso focus:border-velmora-gold focus:outline-none">
                  <option value="featured">Featured</option>
                  <option value="rating">Top Rated</option>
                  <option value="price-asc">Price Low to High</option>
                  <option value="price-desc">Price High to Low</option>
                </select>
              </label>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} imagePrefix="shop-grid" />)}
              </div>
            ) : (
              <div className="border border-velmora-mist bg-velmora-linen p-10 text-center text-velmora-espresso">
                <h3 className="font-serif text-4xl font-semibold">No pieces match these filters.</h3>
                <p className="mt-3 text-sm text-velmora-charcoal">Try a softer price range or browse the full collection.</p>
                <button type="button" onClick={() => { setCategory('All'); setMaterial('All'); setPriceRange(priceOptions[0]) }} className="velmora-focus mt-6 rounded-full bg-velmora-espresso px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-espresso">Reset Filters</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, active, onChange }) {
  return (
    <div className="border-t border-velmora-mist py-5 first:border-t-0 first:pt-0">
      <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-taupe">{title}</h3>
      <div className="flex flex-wrap gap-2 lg:grid">
        {options.map((option) => (
          <button key={option} type="button" onClick={() => onChange(option)} className={`velmora-focus rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${active === option ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-mist bg-velmora-ivory text-velmora-charcoal hover:border-velmora-gold'}`}>{option}</button>
        ))}
      </div>
    </div>
  )
}
