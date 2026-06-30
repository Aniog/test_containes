import { ImageHelper } from '@strikingly/sdk'
import { SlidersHorizontal } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import strkImgConfig from '../../strk-img-config.json'
import { products } from '../../data/products.js'
import ProductCard from './ProductCard.jsx'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$51–$80', min: 51, max: 80 },
  { label: '$81–$120', min: 81, max: 120 },
]
const materials = ['All', '18K Gold Plated', 'Gold Filigree']

export default function ShopPage({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [category, price, material, sort])

  useEffect(() => {
    const nextCategory = searchParams.get('category') || 'All'
    if (categories.includes(nextCategory)) setCategory(nextCategory)
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const range = priceRanges.find((item) => item.label === price) || priceRanges[0]
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const priceMatch = product.price >= range.min && product.price <= range.max
      const materialMatch = material === 'All' || product.material === material
      return categoryMatch && priceMatch && materialMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, price, material, sort])

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="px-5 pb-10 pt-8 sm:px-8 lg:px-10 lg:pb-14">
        <div className="mx-auto max-w-7xl border-b border-velmora-espresso/10 pb-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-velmora-taupe">The collection</p>
          <div className="grid gap-6 lg:grid-cols-[1fr_28rem] lg:items-end">
            <h1 className="font-serifDisplay text-5xl font-semibold leading-tight text-velmora-espresso sm:text-7xl">Demi-fine essentials, edited with intention.</h1>
            <p className="text-base leading-8 text-velmora-taupe">Explore gold pieces designed for self-purchase, gifting, layering, and the refined everyday.</p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[17rem_1fr]">
          <aside className="h-fit border border-velmora-espresso/10 bg-velmora-sand/60 p-5 text-velmora-espresso lg:sticky lg:top-28">
            <div className="mb-5 flex items-center gap-2 border-b border-velmora-espresso/10 pb-4">
              <SlidersHorizontal size={17} className="text-velmora-champagne" />
              <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso">Filter</h2>
            </div>
            <FilterGroup title="Category" values={categories} active={category} onChange={setCategory} />
            <FilterGroup title="Price" values={priceRanges.map((item) => item.label)} active={price} onChange={setPrice} />
            <FilterGroup title="Material" values={materials} active={material} onChange={setMaterial} />
          </aside>

          <div>
            <div className="mb-6 flex flex-col justify-between gap-4 border-b border-velmora-espresso/10 pb-5 sm:flex-row sm:items-center">
              <p className="text-sm text-velmora-taupe"><span className="font-semibold text-velmora-espresso">{filteredProducts.length}</span> pieces</p>
              <label className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-velmora-taupe">
                Sort
                <select value={sort} onChange={(event) => setSort(event.target.value)} className="border border-velmora-espresso/15 bg-velmora-ivory px-4 py-3 text-sm font-medium normal-case tracking-normal text-velmora-espresso outline-none transition focus:border-velmora-champagne">
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} compact />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="border border-velmora-espresso/10 bg-velmora-sand p-10 text-center text-velmora-espresso">
                <p className="font-serifDisplay text-3xl font-semibold">No pieces match those filters.</p>
                <button type="button" onClick={() => { setCategory('All'); setPrice('All'); setMaterial('All') }} className="mt-5 border border-velmora-espresso px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory">
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, values, active, onChange }) {
  return (
    <div className="border-b border-velmora-espresso/10 py-5 last:border-b-0">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-taupe">{title}</p>
      <div className="flex flex-wrap gap-2 lg:grid">
        {values.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => onChange(value)}
            className={`border px-3 py-2 text-left text-xs font-semibold uppercase tracking-[0.18em] transition ${active === value ? 'border-velmora-champagne bg-velmora-champagne text-velmora-espresso' : 'border-velmora-espresso/12 bg-velmora-ivory text-velmora-espresso hover:border-velmora-champagne'}`}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  )
}
