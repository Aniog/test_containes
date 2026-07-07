import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/shop/ProductCard.jsx'
import { products } from '@/data/products.js'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80–$120', min: 80, max: 120 },
]
const materials = ['All', '18K Gold Plated', 'Hypoallergenic']

export default function Shop({ onAddToCart }) {
  const pageRef = useRef(null)
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const range = priceRanges.find((item) => item.label === price) || priceRanges[0]
    const result = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const priceMatch = product.price >= range.min && product.price <= range.max
      const materialMatch = material === 'All' || product.material === material || material === 'Hypoallergenic'
      return categoryMatch && priceMatch && materialMatch
    })

    return [...result].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })
  }, [category, material, price, sort])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [filteredProducts])

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-24 text-velmora-ink md:pt-28">
      <section className="border-b border-velmora-linen px-5 pb-10 pt-8 md:px-8 md:pb-14">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold">The shop</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serif text-6xl leading-none md:text-8xl">Demi-fine essentials</h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-velmora-bronze">
                Explore earrings, necklaces, huggies, and gift-ready sets crafted for a premium feel at an accessible price.
              </p>
            </div>
            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.18em] text-velmora-bronze">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="min-w-48 rounded-full border border-velmora-linen bg-velmora-ivory px-5 py-3 text-sm normal-case tracking-normal text-velmora-ink outline-none focus:border-velmora-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="rating">Top rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-9 px-5 py-10 md:px-8 lg:grid-cols-[260px_1fr] lg:py-14">
        <aside className="h-fit border border-velmora-linen bg-velmora-pearl/70 p-5 lg:sticky lg:top-28">
          <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={priceRanges.map((item) => item.label)} value={price} onChange={setPrice} />
          <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-6 flex items-center justify-between border-b border-velmora-linen pb-4 text-sm text-velmora-bronze">
            <p>{filteredProducts.length} pieces</p>
            <p>Free worldwide shipping</p>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-x-5 gap-y-11 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          ) : (
            <div className="border border-velmora-linen bg-velmora-pearl p-10 text-center text-velmora-ink">
              <h2 className="font-serif text-4xl">No pieces match these filters.</h2>
              <p className="mt-3 text-sm text-velmora-bronze">Try widening your edit to see more Velmora jewelry.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="border-b border-velmora-linen py-5 first:pt-0 last:border-b-0 last:pb-0">
      <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink">{title}</h2>
      <div className="mt-4 grid gap-2">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-3 text-sm text-velmora-bronze">
            <input
              type="radio"
              name={title}
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 accent-velmora-gold"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
