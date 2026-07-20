import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const materials = ['All', '18K Gold Plated', 'Gold Filigree']
const prices = [
  { label: 'All', min: 0, max: Infinity },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80–$120', min: 80, max: 120 },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const pageRef = useRef(null)
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [material, setMaterial] = useState('All')
  const [priceLabel, setPriceLabel] = useState('All')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    const nextCategory = searchParams.get('category') || 'All'
    setCategory(categories.includes(nextCategory) ? nextCategory : 'All')
  }, [searchParams])

  const handleCategoryChange = (nextCategory) => {
    setCategory(nextCategory)
    const nextParams = new URLSearchParams(searchParams)
    if (nextCategory === 'All') {
      nextParams.delete('category')
    } else {
      nextParams.set('category', nextCategory)
    }
    setSearchParams(nextParams)
  }

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [category, material, priceLabel, sort])

  const filteredProducts = useMemo(() => {
    const selectedPrice = prices.find((price) => price.label === priceLabel) || prices[0]
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch = product.price >= selectedPrice.min && product.price <= selectedPrice.max
      return categoryMatch && materialMatch && priceMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'name') return a.name.localeCompare(b.name)
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, material, priceLabel, sort])

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-28 text-velmora-ink">
      <section className="border-b border-velmora-line px-5 pb-12 pt-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">
            The Velmora Edit
          </p>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h1 className="font-serif text-5xl font-semibold leading-none text-velmora-ink sm:text-6xl lg:text-7xl">
              Shop demi-fine gold jewelry.
            </h1>
            <p className="max-w-xl text-sm leading-7 text-velmora-taupe lg:justify-self-end">
              A curated selection of earrings, huggies, necklaces, and gift-ready pieces priced for everyday luxury.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[270px_1fr]">
          <aside className="h-fit border border-velmora-line bg-velmora-pearl p-5 text-velmora-ink lg:sticky lg:top-28">
            <div className="mb-6 flex items-center gap-3 border-b border-velmora-line pb-4">
              <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
              <h2 className="text-xs font-bold uppercase tracking-[0.24em]">Filter</h2>
            </div>

            <FilterGroup title="Category" options={categories} value={category} onChange={handleCategoryChange} />
            <FilterGroup title="Price" options={prices.map((price) => price.label)} value={priceLabel} onChange={setPriceLabel} />
            <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
          </aside>

          <div>
            <div className="mb-7 flex flex-col gap-4 border-b border-velmora-line pb-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-velmora-espresso">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-taupe">
                Sort
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="border border-velmora-line bg-velmora-pearl px-4 py-3 text-sm font-semibold normal-case tracking-normal text-velmora-ink focus:border-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to high</option>
                  <option value="price-desc">Price: High to low</option>
                  <option value="name">Name</option>
                </select>
              </label>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} priority={index < 2} imageScope="shop" />
                ))}
              </div>
            ) : (
              <div className="border border-velmora-line bg-velmora-pearl px-6 py-14 text-center text-velmora-ink">
                <h3 className="font-serif text-4xl">No pieces match this edit.</h3>
                <p className="mt-3 text-sm text-velmora-taupe">Try clearing a filter to see more Velmora jewelry.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="border-b border-velmora-line py-5 last:border-b-0">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-taupe">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center justify-between gap-3 text-sm font-semibold text-velmora-ink">
            <span>{option}</span>
            <input
              type="radio"
              name={title}
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 accent-velmora-gold"
            />
          </label>
        ))}
      </div>
    </div>
  )
}
