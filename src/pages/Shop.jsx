import { useEffect, useMemo, useRef, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { products } from '../data/products.js'
import ProductCard from '../components/product/ProductCard.jsx'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const materialOptions = ['All', '18K Gold Plated', 'Hypoallergenic']
const priceOptions = [
  { label: 'All', min: 0, max: 999 },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80–$120', min: 80, max: 120 },
]

export default function Shop() {
  const containerRef = useRef(null)
  const [category, setCategory] = useState('All')
  const [material, setMaterial] = useState('All')
  const [price, setPrice] = useState(priceOptions[0])
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material || product.material.includes(material)
      const priceMatch = product.price >= price.min && product.price <= price.max
      return categoryMatch && materialMatch && priceMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, material, price, sort])

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [category, material, price.label, sort])


  const filterPanel = (
    <div className="space-y-9 text-cocoa">
      <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
      <FilterGroup title="Price" options={priceOptions.map((option) => option.label)} value={price.label} onChange={(label) => setPrice(priceOptions.find((option) => option.label === label))} />
      <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
    </div>
  )

  return (
    <div ref={containerRef} className="bg-parchment pt-20 text-cocoa">
      <section className="border-b border-mist bg-ivory px-5 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-luxe text-antique">The Velmora Shop</p>
          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h1 id="shop-title" className="font-serif text-6xl font-semibold leading-tight text-cocoa md:text-8xl">Demi-fine jewelry, softly luminous.</h1>
              <p id="shop-copy" className="mt-5 max-w-2xl text-base leading-8 text-stone">Discover warm gold earrings, necklaces, huggies, and giftable sets designed to feel premium, personal, and easy to wear.</p>
            </div>
            <div className="flex items-center gap-3">
              <button type="button" className="inline-flex items-center gap-2 border border-mist bg-parchment px-4 py-3 text-xs font-bold uppercase tracking-luxe text-cocoa lg:hidden" onClick={() => setFiltersOpen((open) => !open)}><SlidersHorizontal className="h-4 w-4" /> Filters</button>
              <label className="sr-only" htmlFor="sort">Sort products</label>
              <select id="sort" value={sort} onChange={(event) => setSort(event.target.value)} className="border border-mist bg-parchment px-4 py-3 text-sm text-cocoa focus:outline-none focus:ring-2 focus:ring-champagne">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[260px_1fr] lg:px-10 lg:py-16">
        <aside className="hidden border-r border-mist pr-8 lg:block">
          <div className="sticky top-28">{filterPanel}</div>
        </aside>
        {filtersOpen && <aside className="border border-mist bg-ivory p-6 lg:hidden">{filterPanel}</aside>}
        <div>
          <div className="mb-6 flex items-center justify-between text-sm text-stone"><span>{filteredProducts.length} pieces</span><span>Premium demi-fine gold edit</span></div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => <ProductCard key={product.id} product={product} contextId="shop-title" />)}
          </div>
        </div>
      </section>
    </div>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div>
      <h2 className="border-b border-mist pb-3 text-xs font-bold uppercase tracking-luxe text-antique">{title}</h2>
      <div className="mt-4 space-y-3">
        {options.map((option) => (
          <label key={option} className="flex items-center justify-between gap-3 text-sm text-stone">
            <span>{option}</span>
            <input type="radio" name={title} value={option} checked={value === option} onChange={() => onChange(option)} className="h-4 w-4 accent-antique" />
          </label>
        ))}
      </div>
    </div>
  )
}
