import { useEffect, useMemo, useRef, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products.js'
import ProductCard from '@/components/common/ProductCard.jsx'

const categoryFilters = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const materialFilters = ['All', '18K Gold Plated', 'Gold Vermeil']
const priceFilters = [
  { label: 'All', min: 0, max: 999 },
  { label: 'Under $50', min: 0, max: 49 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80+', min: 81, max: 999 },
]

const Shop = ({ onAddToCart }) => {
  const pageRef = useRef(null)
  const [category, setCategory] = useState('All')
  const [material, setMaterial] = useState('All')
  const [priceLabel, setPriceLabel] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const priceRange = priceFilters.find((filter) => filter.label === priceLabel) || priceFilters[0]

    const nextProducts = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material === material
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max
      return matchesCategory && matchesMaterial && matchesPrice
    })

    if (sort === 'price-low') {
      return [...nextProducts].sort((a, b) => a.price - b.price)
    }

    if (sort === 'price-high') {
      return [...nextProducts].sort((a, b) => b.price - a.price)
    }

    return nextProducts
  }, [category, material, priceLabel, sort])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, material, priceLabel, sort])

  return (
    <main ref={pageRef} className="bg-velmora-parchment pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-8 sm:px-8 md:pb-14 md:pt-14">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.32em] text-velmora-goldDark">Shop Velmora</p>
        <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="font-serif text-6xl font-medium leading-none text-velmora-espresso md:text-8xl">The demi-fine edit.</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-taupe md:text-lg">
              Refined gold pieces priced for everyday indulgence, thoughtful gifts, and softly elevated styling.
            </p>
          </div>
          <label className="flex w-full max-w-xs flex-col gap-2 text-xs font-bold uppercase tracking-[0.2em] text-velmora-taupe">
            Sort by
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="rounded-full border border-velmora-stone bg-velmora-ivory px-5 py-3 text-sm font-semibold normal-case tracking-normal text-velmora-espresso focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold/30"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to high</option>
              <option value="price-high">Price: High to low</option>
            </select>
          </label>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[280px_1fr]">
        <aside className="h-fit border border-velmora-stone/70 bg-velmora-ivory p-5 text-velmora-espresso shadow-soft lg:sticky lg:top-28">
          <div className="mb-6 flex items-center gap-3 border-b border-velmora-stone/70 pb-5">
            <SlidersHorizontal className="h-5 w-5 text-velmora-goldDark" />
            <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso">Filters</h2>
          </div>

          <FilterGroup title="Category" options={categoryFilters} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={priceFilters.map((filter) => filter.label)} value={priceLabel} onChange={setPriceLabel} />
          <FilterGroup title="Material" options={materialFilters} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-6 flex items-center justify-between border-b border-velmora-stone/70 pb-4 text-sm text-velmora-taupe">
            <span>{filteredProducts.length} pieces</span>
            <span className="hidden sm:inline">Free worldwide shipping on all orders</span>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-velmora-stone/70 bg-velmora-ivory p-12 text-center text-velmora-espresso shadow-soft">
              <h2 className="font-serif text-4xl text-velmora-espresso">No pieces found.</h2>
              <p className="mt-4 text-sm leading-7 text-velmora-taupe">Try a different category, price, or material filter.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

const FilterGroup = ({ title, options, value, onChange }) => (
  <fieldset className="border-b border-velmora-stone/70 py-5 last:border-b-0">
    <legend className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-velmora-taupe">{title}</legend>
    <div className="flex flex-wrap gap-2 lg:flex-col">
      {options.map((option) => {
        const active = value === option
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-4 py-2 text-left text-sm font-semibold transition ${
              active
                ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory'
                : 'border-velmora-stone bg-velmora-ivory text-velmora-espresso hover:border-velmora-gold hover:text-velmora-goldDark'
            }`}
          >
            {option}
          </button>
        )
      })}
    </div>
  </fieldset>
)

export default Shop
